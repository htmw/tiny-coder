import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Recipes from './Recipes';
import Favorites from './Favorites';
import Calories from './Calories';
import MealPlanning from './MealPlanning';
import HealthCare from './HealthCare';
import Gynamstic from './Gynamstic';
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Signup from "./SignUp";
import Logout from "./Logout";
import { UserProvider } from "../context/user";

const Pages = () => {
    return (
        <UserProvider>
            <Routes>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/signup" element={<Signup />}></Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Home />} exact></Route>    
                    <Route path="/Logout" element={<Logout />} exact></Route>    
                    <Route path="/Recipes" element={<Recipes />} exact></Route>
                    <Route path="/Favorites" element={<Favorites />} exact></Route>
                    <Route path="/Calories" element={<Calories />} exact></Route>
                    <Route path="/Health-Care" element={<HealthCare />} exact></Route>
                    <Route path="/Gynamstic" element={<Gynamstic />} exact></Route>
                    <Route path="/Meal-planning" element={<MealPlanning />} exact></Route>
                </Route>
            </Routes>
        </UserProvider>
  )
}

export default Pages;