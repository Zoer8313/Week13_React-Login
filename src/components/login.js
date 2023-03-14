import React from "react";

export default class Login extends React.Component {
    render() {
        return (
            <div className = "container">
            <div className = "card center" id = "login-card">
                <div className = "card-header bg-dark text-white">
                    <h3>Login</h3>
                </div>
                <div className = "card-body">
                    <form>
                        <div className = "mb-3">
                         <label for = "username" className = "form-label"><b>Username:</b></label>  
                        <input type = "text" id = "username" placeholder = "Username" className = "center"></input>
                        </div>
                        <div className = "mb-3">
                         <label for = "password" className = "form-label"><b>Password:</b></label>   
                        <input type = "text" id = "password" placeholder = "Password" className = "center"></input>
                        </div>
                <button type = "submit" value = "submit" className = "btn btn-dark">Enter</button>
                </form>
            </div>
            <div className = "card-footer">
                Forgot your password? Click <a href = "#">here.</a>
            </div>
        </div>
          </div>  
        );
    }
}
//dropdown on navbar doesnt drop down when page is minimized
//