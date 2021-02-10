import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
<div className="form">
    <h4>Sign up</h4>
    <form>
      <div className="input-field">
          <input id="first_name" type="text" className="validate"/>
          <label for="first_name"><span>First Name</span></label>
        </div>
        <div className="input-field">
          <input id="last_name" type="text" className="validate"/>
          <label for="last_name"><span>Last Name</span></label>
        </div>
        <div className="input-field">
          <input id="password" type="password" className="validate"/>
          <label for="password"><span>Password</span></label>
        </div>
        <div className="input-field">
          <input id="email" type="email" className="validate"/>
          <label for="email"><span>Email</span></label>
        </div>
    </form>
    {/* <button className="btn signUp">Sign up</button> */}
    <button className="btn-floating waves-effect waves-light close">Close</button>
 </div>
    )
}
