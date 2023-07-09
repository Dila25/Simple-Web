import React from 'react';
import Nav from "./Nav";
import './Mainhome.css';
import bouquet from "./Photos/bouquet.png";

export default function MainHome() {
  return (
    <div>
      <Nav />
      <div className='container'>
        <div className='main'>
          <div className="row">
            <div className="column">
              <img src={bouquet} className="bouquet" alt="signin logo" />
            </div>
            <div className="column2">
              <h2 className='h-h1'>WELCOME TO</h2>
              <h2 className='h-h2'>SIMPLE WEB</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
