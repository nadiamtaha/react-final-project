
import About from '../About/About';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import Navbar from '../Navbar/Navbar';
import Notfound from '../Notfound/Notfound';
import Register from '../Register/Register';
import Tvshows from '../Tvshows/Tvshows';
import Home from './../Home/Home';
import  {Redirect, Route, Switch, useHistory}  from "react-router"
import { useEffect, useState } from 'react';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


function App() {
  let history=useHistory();

  let [loginData,setLoginData]=useState(null);

  useEffect(() => {
    if(localStorage.getItem('userData'))
    {
      getUserData();
    }
  }, [])

  function getUserData(){
    let userData=JSON.parse(localStorage.getItem('userData'));
    setLoginData(userData);
  }

  function logout(){
    localStorage.removeItem('userData');
    setLoginData(null);
    history.push('/login');
  }

  
  return (
    <div className="App">
       <Navbar loginData={loginData} logout={logout} />
       <div className="container">
         {/* {['home','movies','about'].push('login')} */}
       <Switch> 
          <Redirect exact from='/' to='/home'/>
       
          <ProtectedRoute path='/home' component={Home}/>
          <ProtectedRoute path='/tvshows' component={Tvshows}/>
          <ProtectedRoute path='/about' component={About}/>
          <ProtectedRoute path='/movies' component={Movies}/>

          <Route  path='/login' render={(props)=><Login getUserData={getUserData} {...props}/>}/>
          <Route  path='/register' component={Register} render={(props)=><Register {...props}/>}/>
          <Route  path='*' component={Notfound}/>

       </Switch>
       </div>
         {/* <Navbar/>
         <Home/>
         <About/>
         <Movies/>
         <Tvshows/>
         <Notfound/>
         <Login/>
         <Register/> */}
    </div>
  );
}

export default App;
