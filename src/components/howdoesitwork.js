import React, { Component } from 'react';
import "./howdoesitwork.css";
import "bootstrap/dist/css/bootstrap.min.css";
import support2 from './res/support2.png';
import support1 from './res/support1.png';
import support3 from './res/support3.png';


class Howdoesitwork extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <center><h3 id="planheadingone">How does it work?</h3>
                                <p>We take care of you arrival to departure </p>
                            </center>
                            <div className="supportdiv">
                                <img src={support2} alt="airplan-icon" className="workicon" />
                                <img src={support1} alt="share-icon" className="workicon" />
                                <img src={support3} alt="share-icon" className="workicon" />
                            </div>

                            <div id="workdiv">
                               <div id="workperaf">
                                    Millions of people need help in
                                   <br />  their logistics & finding the
                                   <br />right people in Africa
                                  </div>

                                <div id="workperas">
                                    No more filling forms for
                                  <br /> seperate servece.We book
                                   <br />Your flight.Hotel.driver and
                                   <br /> even meetings.
                                 </div>

                                <div id="workperat">
                                    Travel confidently to Africa.
                                    <br />We have your back
                                    <br /><a href="#">Learn more
                                    </a>
                                </div>
                            </div>
                            <button id="workgetstarted" href="#">
                            Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>





        )
    }
}

export default Howdoesitwork;