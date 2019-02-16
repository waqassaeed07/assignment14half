import React, { Component } from 'react';
import "./plan.css";
import "bootstrap/dist/css/bootstrap.min.css";
import airplanicon from './res/airplane-icon.png';
import shareicon from './res/share-icon.png';
import caricon from './res/car-icon.png';


class Plan extends Component {
    render() {
        return (
            <div>
         <div className="container-fluid">
         <center><h3 id="planheadingone">Plan Your Business Trip To Africa</h3>
         <p>Book Your Flight.Hotal. Groung Transport and get connected with our wide African network </p>
         </center>
         <div className="planicondiv">
             <img src={airplanicon} alt="airplan-icon" className="planicon"/>
             <img src={shareicon} alt="share-icon" className="planicon"/>
             <img src={caricon} alt="share-icon" className="planicon"/>
         </div>
         <div className="planicondi">
             <p className="planico">
             Travel</p>
             <p className="planico">
             Networking</p>
             <p className="planico">
             Logistics</p>
         </div>


         </div>
                    </div>
                    )
                }
            }

export default Plan;