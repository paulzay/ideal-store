import React, { Component } from "react";

// IMPORTING BOOTSTRAP
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

// IMPORTING FROM REACT ICONS
import { FiEdit2, FiPackage, FiCreditCard } from 'react-icons/fi'
import { FaUserAlt, FaCommentDots, FaWallet } from 'react-icons/fa'
import { AiOutlineLike, AiOutlineFieldTime } from 'react-icons/ai'

import MyAccountOverview from './AccounOverview';
import MyAccount from './MyAccount'

import './profile.css'

class UserProfile extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow mb-2">
              <div className="card-body">
                <div className='row pb-2'>
                  <FaUserAlt className='mr-3 my-auto ml-2' />
                  <h5>My Account</h5>
                </div>
                <ul className='list-unstyled'>
                  <li className='row'>
                    <FiPackage className='mr-3 my-auto ml-2' />
                    <a className='nav-link text-dark' href="">Orders</a>
                  </li>
                  <li className='row'>
                    <FaCommentDots className='mr-3 my-auto ml-2' />
                    <a className='nav-link text-dark' href="">Pending Reviews</a>
                  </li>
                  <li className='row'>
                    <FiCreditCard className='mr-3 my-auto ml-2' />
                    <a className='nav-link text-dark' href="">Voucher Credit</a>
                  </li>
                  <li className='row'>
                    <AiOutlineLike className='mr-3 my-auto ml-2' />
                    <a className='nav-link text-dark' href="">Saved Items</a>
                  </li>
                  <li className='row'>
                    <AiOutlineFieldTime className='mr-3 my-auto ml-2' />
                    <a className='nav-link text-dark' href="">Recently Viewed</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card shadow mb-2">
              <div className="card-body">
                <ul className='list-unstyled'>
                  <li>
                    <a className='nav-link text-dark' href="">Details</a>
                  </li>
                  <li>
                    <a className='nav-link text-dark' href="">Address Book</a>
                  </li>
                  <li>
                    <a className='nav-link text-dark' href="">Change Password</a>
                  </li>
                  <li>
                    <a className='nav-link text-dark' href="">Newsletter Preferences</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          <div className="col-md-8">
            <div className="card shadow mb-2">
              <div className="card-body">
                <h2 className='pb-3'>Account Overview</h2>
                <div className="row">
                  <div className="col-md-4 mr-5">
                    <div className="card mb-3" style={{ width: '20rem' }}>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between text-left">
                          <p className='my-auto font-weight-bold'>ACCOUNT DETAILS</p>
                          <button className='btn'><FiEdit2 /></button>
                        </li>
                        <li className="list-group-item">
                          <h6>RAPHAEL ALANEME</h6>
                          <a href="mailto:ialaneme@yahoo.com" className='nav-link text-left text-dark'>ialaneme@yahoo.com</a>
                          <a href="" className="nav-link text-dark pt-5 font-weight-bold">CHANGE PASSWORD</a>
                        </li>
                      </ul>
                    </div>

                    <div className="card" style={{ width: '20rem' }}>
                      <ul className="list-group list-group-flush">
                        < li className="list-group-item d-flex justify-content-between">
                          <p className='my-auto font-weight-bold'>NEWSLETTER PREFERENCES</p>
                          <button className='btn'><FiEdit2 /></button>
                        </li>
                        <li className="list-group-item">
                          You are currently not subscribed to any of our newsletters.
                          <a href="" className="nav-link text-dark pt-5 font-weight-bold">EDIT NEWSLETTER PREFERENCES</a>
                        </li>
                      </ul>
                    </div>
                  </div>


                  <div className="col-md-4 ml-5">
                    <div className="card mb-3" style={{ width: '18rem' }}>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between text-left">
                          <p className='my-auto font-weight-bold'>ADDRESS BOOK</p>
                          <button className='btn'><FiEdit2 /></button>
                        </li>
                        <li className="list-group-item">
                          <h6>Your default shipping address:</h6>
                          <p style={{ fontSize: '14px' }}>Ikenna Alaneme <br />   9, Alaneme street, Off Comfort oboh Street, Kirikiri Town, Lagos <br /> Kirikiri Prisons <br /> Apapa (Kiri kiri), Lagos</p>
                        </li>
                      </ul>
                    </div>

                    <div className="card" style={{ width: '18rem' }}>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                          <p className='my-auto font-weight-bold'>WALLET BALANCE</p>
                          <FaWallet className='mr-3 my-auto ml-2' />
                        </li>
                        <li className="list-group-item ">
                          <p>₦ 0.00</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div >
      </div >
    );
  }
}

export default UserProfile;
