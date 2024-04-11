import React from "react";

import Navbar from "../../components/Header";
const Account = () => {
  return (
    <>
      <div className="account-page">
        <Navbar />

        <div className="account-bg">
          <div className="account-bg-overlay"></div>
          <section className="account-page-section">
            <div className="account-container">
              <div className="account-row">
                <div className="account-sidebar-item">
                  <button>My Account</button>
                </div>
              </div>

              <div className="account-row">
                <h3>My Account</h3>

                <div className="account-details-wrapper">
                  <div className="account-detail-heading">
                    <h3>ACCOUNT INFORMATION</h3>
                  </div>

                  <div className="account-detail-content">
                    <h4>CONTACT INFORMATION</h4>
                    <p>abhilash subhash</p>
                    <p>abhilashsubhash12345@gmail.com</p>
                  </div>
                </div>

                <div className="account-details-wrapper">
                  <div className="account-detail-heading">
                    <h3>ADDRESS BOOK</h3>
                    <p>Manage Addresses</p>
                  </div>

                  <div className="account-detail-content">
                    <h4>DEFAULT BILLING ADDRESS</h4>
                    <p>You have not set a default billing address.</p>

                    <p className="account-detail-content-link">Edit Address</p>
                  </div>

                  <div className="account-detail-content">
                    <h4>DEFAULT SHIPPING ADDRESS</h4>
                    <p>You have not set a default shipping address.</p>

                    <p className="account-detail-content-link">Edit Address</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="let-us-reach-wrapper">
              <p>Let us reach you</p>
              <div>
                <input className="" type="text" />
                <button>SUBMIT</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Account;
