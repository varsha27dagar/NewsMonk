import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
export class Navbar extends Component {
  
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><b>NewsMonkey</b></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="business">Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="sports">Sports</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav >
            </div >
        )
    }
}
export default Navbar
