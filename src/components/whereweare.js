import React, { Component } from 'react';
import "./whereweare"
import mapimg from "./res/map-image.png"

class Whereweare extends Component{

    render(){
        return(
            <div>
                <div className="container-fluid wherewearebg">
                <div className="row">
                <div className="col-md-2">
                </div>
                <div className="col-md-4">
                <img src={mapimg} width="300px"/>
                
                </div>
                </div>
                </div>
                </div>
        )
    }
}
export default Whereweare;
