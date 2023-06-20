import React from "react";

const About = ( ) =>{
    return( <>
        <div className="application" align="center">
        
        
            <img alt="empImg" src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />

            <div className="header-text" align="center">
                <h1>Serving Technology Better</h1>
                <p>Choose your Favourite Employee Application</p>
                    <ul>
                        <li className="list" list-style-type="none">
                        This application can Add employee details such as names, emails, phone, etc.
                        </li>
                        <li>
                            Update details
                        </li>
                        <li>
                           Delete users details
                        </li>

                    </ul>
            </div>



        </div>

        </>
    );
    }

    export default About;
