import React from "react";
import Login from "./login";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className = "container">
                
                <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className = "navbar-brand" href = "#">Navbar</a>
                    <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target = "#navbarNav" aria-controls = "navbarNav">
                    <span className = "navbar-toggler-icon"></span>
                     </button>

                     <div className = "collapse navbar-collapse" id = "navbarNav">
                        <ul className = "navbar-nav">
                         <li className = "nav-item">
                      <a className = "nav-link" href = "#">Home</a>
                     </li>
                        <li className = "nav-item">
                        <a className = "nav-link" href = "#">News</a>
                        </li>
                        <li className = "nav-item">
                        <a className = "nav-link" href = "#">Extras</a>
                        </li>
                        </ul>
                    </div>

                </nav><br></br><br></br>

                <div>
                    <Login />
                </div>
            </div>
        )
    }
}