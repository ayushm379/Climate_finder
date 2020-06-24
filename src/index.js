import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading"

class App extends React.Component {
    state = {latitude : null, errMsg : ""};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({latitude : position.coords.latitude}), 
            (err) => this.setState({errMsg : err.message}) 
        );
    }

    render_helper(){
        if( this.state.latitude && !this.state.errMsg ){
            return <div> <SeasonDisplay latitude = {this.state.latitude} /> </div>;
        }if( !this.state.latitude && this.state.errMsg  ){
            return <div>  Error : { this.state.errMsg }  </div>;
        }
        return (
            <Loading text = "PLease Accept Location Request..." />
        );
    }

    render(){
        return(
            <div>
                {this.render_helper()}
            </div>
        );
    }
    
}

ReactDOM.render( <App /> ,document.getElementById('root') );