import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import { connect } from 'react-redux'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import Header from './components/header/header.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

//import the user action 
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {


  unsubscribeFromAuth = null

  componentDidMount(){
    //destructing, using the redux mapDispatchToProps, pass in the props of setCurrentUser, 
    const {setCurrentUser} = this.props

    //a firebase auth method, onAuthStateChanged method, open subscription 
    // async request, the user has a uid property
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth)
          //firestore method onSnapshot, using the .data() method will give by the object properties  
          userRef.onSnapshot(snapShot => {
            //used the destructed variable name, the redux mapDispatchToProps
            setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
            })
            // console.log(this.state)
          }) 
        }else{
          //when the user log out. set currentUser back to null
          setCurrentUser(userAuth)
        }
    })
  }

  componentWillUnmount(){
    //to close the subscription, prevent memory leak
    this.unsubscribeFromAuth()
  }


  render(){
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>

      </div>
    )
  }
}


//mapDispatchToProps is the standard naming, can be anything 
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


//we don't need to get mapStateToProps, since we are not retrieving any information, pass in null
//we need to send infomation to the Reducer, we use mapDispatchToProps
export default connect(null, mapDispatchToProps)(App);
