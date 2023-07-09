import React from 'react';
import Nav from "./FirstHomeNav";
import './Mainhome.css';
import bouquet from "./Photos/bouquet.png";
import { Link } from "react-router-dom";

export default function MainHome() {
  return (
    <div>
      <Nav />
      <div className='container'>
        <div className='main'>
          <div class="row">
            <div class="column">
              <img src={bouquet} className="bouquet" alt="signin logo" />
            </div>
            <div class="column2">
              <h2 className='h-h1a'>WELCOME TO</h2>
              <h2 className='h-h2a'>SIMPLE WEB</h2>
              <br /><br />
              <div className='bset'>
                <div className='bt'>
                  <Link to="/loginH"><button type="submit" className='btnsub'>Login</button></Link>
                </div>
                <div className='bt'>
                  <Link to="/reg"><button type="submit" className='btnsub'>Register</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
