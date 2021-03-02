import React,{ useRef,useEffect } from 'react';
import { Route } from 'react-router-dom';
import ScenicPage from './component/ScenicPage/ScenicPage';
import HomePage from './component/HomePage/HomePage';


const Main = () => {
    
    return (
        <React.Fragment>
            <Route
                exact
                path="/"
                component={HomePage} />
            <Route
                exact
                path="/scenicSpot"
                render={props => <ScenicPage key='' city=''/>} />
            <Route
                exact
                path="/scenicSpot/:city"
                render={props => <ScenicPage key={props.match.params.city} city={props.match.params.city}/>} />
        </React.Fragment> 
    )
}

export default Main