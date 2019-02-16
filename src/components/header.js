import React, { Component } from 'react';
import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import usericon from './res/user-icon.png';
import locationicon from './res/location-icon.png';
import aimicon from './res/aim-icon.png';


class Header extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid main">
                    <div className="topnavbar">
                        <a className="toptags">
                            About </a>
                        <a className="toptags">
                            How it works </a>
                        <a className="toptags">
                            Industory </a>
                        <a className="toptags">
                            Countries </a>
                        <a className="toptags">
                            Events </a>
                        <div id="toptagleft">

                            <a id="toptagsup">
                                Supplier Sign Up
                </a>
                            <a id="usericon">
                                <img src={usericon} alt="user-icon" height="30px" width="30px" />
                            </a>
                        </div>
                    </div>
                    {/* <!-- header navbar end -->
            <!-- header searchbox start --> */}
                    <div id="searchdiv">
                        <img src={locationicon} alt="location" className="searchimg"/>
                            <input type="text" placeholder="I Live In" height="22" className="searchbox" />
                            <img src={aimicon} alt="aim-icon" className="searchimg" />
                            <input type="text" placeholder="I Want to do business in" size="26" className="searchbox"/>
                                <a id="lets">
                                    Let's go </a>
                     </div>
                  </div>
                    </div>
                    )
                }
            }
export default Header;