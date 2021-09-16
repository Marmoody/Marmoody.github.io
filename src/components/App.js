import React from "react";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Dashboard from "./Dashboard"
import "bootstrap/dist/css/bootstrap.min.css"
//import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'
import NoteBoard from './NoteBoard'

const App = () => {
    
    return (
            
                <div>
                <Router>
                    <AuthProvider>
                        <Switch>
                            
                            <PrivateRoute exact path="/" component={Dashboard} />
                            <PrivateRoute path="/update-profile" component={UpdateProfile} />
                            <PrivateRoute path="/noteboard" component={NoteBoard}/>
                            <Route path="/signup" component={SignUp} />
                            <Route path="/login" component={LogIn} />
                            <Route path="/forgot-password" component={ForgotPassword} />

                        </Switch>
                    </AuthProvider>
                </Router>
                </div>
          
    ) 
}


export default App