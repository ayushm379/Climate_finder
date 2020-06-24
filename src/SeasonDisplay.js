import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    Summer : {
        text : 'ITS HOT!!!',
        iconName : 'sun'
    },
    Winter : {
        text :'ITS CHILLY COLD...',
        iconName : 'snowflake'
    }
}

const getSeason = (latitude, month)=>{
    console.log('MONTH = ' + month);
    console.log('Latitude = ' + latitude);
    if( month > 2 && month < 9 ){
        return (latitude > 0) ? 'Summer' : 'Winter'; 
    }else{
        return (latitude > 0) ? 'Winter' : 'Summer';
    }
}
const SeasonDisplay = (props) =>{
    const season = getSeason(props.latitude, new Date().getMonth());
    
    const {text, iconName} = seasonConfig[season];

    return(
        <div className = {`season-display ${season}`} > 
            <i className = {`icon-left massive ${iconName} icon`} />
            <h1> {text} </h1>
            <i className = {`icon-right massive ${iconName} icon`} />
        </div>
        );
    };

export default SeasonDisplay;