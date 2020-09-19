import React, { useEffect } from 'react'
import './App.css'
import Login from './Login'
import Checkout from './Checkout'
import Header from './Header'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
function App() {
    const [{user}, dispatch] = useStateValue();

    useEffect(()=>{
        const unsubscribe  = auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                //logged in
                dispatch({
                    type:'SET_USER',
                    user:authUser
                });
            }
            else{
                //logged out
                dispatch({
                    type:'SET_USER',
                    user:null
                })
            }
        })
        return ()=> {
            unsubscribe();
        }
        console.log('user is  '+user)
    },[])
    return (
        <div className="app">
    
            <Router>
                <Switch>
                <Route path="/login"><Login></Login></Route>
                    <Route path="/checkout">
                    <Header/>
                    <Checkout/>
                    </Route>
                    <Route path="/">
                <Header/>
                    <Home/></Route>
                </Switch>
            </Router>  
        </div>
    )
}

export default App
