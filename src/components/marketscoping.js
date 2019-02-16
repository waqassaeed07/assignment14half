import React, { Component } from 'react';
import "./marketscoping.css";
import "bootstrap/dist/css/bootstrap.min.css";


class Marketscoping extends Component {

    render() {
        return (
            <div>
                <div className="container-fluid services">
                    <div className="row">
                        <div className="col-md-4 ourservicesdiv">
                        <p className="marketleftp">Our Services 
                            </p>
                            <p className="marketleftp">Business Introduction
                            </p>
                            <p className="marketleftp">Concierge Services
                            </p>
                            <p className="marketleftp">Viza Arrangements
                            </p>
                            <p className="marketleftp">Translation
                            </p>
                            <p className="marketleftp">Ground Transportaion
                            </p>
                            <p className="marketleftp">Flight & Hotel
                            </p>   
                        </div>

                        <div className="col-md-1">
                        <p id="markerscopingp">Market
                            <br/>Scopping
                            </p>
                        </div>

                        <div className="col-md-7">
                        <p id="easyma">Easy Market Access
                            </p>
                            <p id="easymap">-Start your project/business in Africa with ease.We introduce you relevant networks and/Or 
                                <br/>partners in Africa from the gecko.there's no need for endless searching on the web for partner/
                                <br/>supplier/buyer.We carefully filter our databases of local African entities so we can much our
                                <br/>clients based on the (sub) sector.objectives and a background check.
                                <br/>
                                <br/>
                                -our Africa advisors are experienced young leaders within their respective industries.They can help
                                <br/>you before. during and after your meetings in Africa.
                                <br/>
                                <br/>
                                -Have you ever visited a large fair to only meet a few designated companies or not knowing who
                                <br/>you should meet so you just give your business card to as many people as possible? Africa saves
                                <br/>you time. money and whole lot of painfull networking.get to the right meeting straight away.

                                </p>
                        </div>

                    </div>
                </div>
                <div className="container-fluid lookingformain">
                <div className="row">
                <div className="col-md-1">
                </div>
                <div className="col-md-6">
                <h4 className="lookingpartenerh">Looking for a local logistics partener?
                    </h4>
                    <p className="lookingforp">We would arrange the Hotels.flights and ground transportaion for their
                        <br/>conference/exibition/fair visitors.
                        </p>
                </div>
                <div className="col-md-4">
                <button className="lookingbtgetstarted">Get Started
                    </button>
                </div>

                </div>
                </div>
            </div>





        )
    }
}

export default Marketscoping;