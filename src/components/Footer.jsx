import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/CAREER.gif';
function Footer() {
  return (
    <>
      <main>
        <section className="hero py-5">
          <div className='container'>

            <div className='logo1 pb-5'style={{
              borderBottom: '1px solid #0000001a'
            }}>
              <img src={logo} className='m-auto d-block' style={{ width: '200px' }} alt="Career Engine" />
            </div>

            <div className='footer-credit text-center pt-3'>
              <p style={{fontSize:'12px'}}>Copyright © 2024 All Rights Reserved. Made with Love by <a href="https://www.jdwebservices.com/">JD Web Services</a></p>

            </div>
            

          </div>

        </section>
        {/* Rest of the Home component */}
      </main>
    </>
  )
}

export default Footer