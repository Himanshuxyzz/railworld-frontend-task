import React from "react";
import { useState, useEffect } from "react";

import Navbar from "../../components/Header";
import { AccountMenu } from "../../constants";

const Account = () => {
  const [selected, setSelected] = useState(() => {
    // Retrieve the selected menu option from localStorage, or default to the first option
    return (
      localStorage.getItem("selectedMenu") ||
      AccountMenu[0]["menuSettings"][0].settingName
    );
  });

  const handleMenuSelection = (selection) => {
    let text = selection.textContent;
    setSelected(text);
    // Save the selected menu option to localStorage
    localStorage.setItem("selectedMenu", text);
  };

  console.log(selected);

  return (
    <>
      <Navbar />

      <div className="account-page">
        <div className="account-bg">
          <div className="account-bg-overlay"></div>
          <section className="account-page-section">
            <div className="account-container">
              <div className="account-row">
                {AccountMenu[0]["menuSettings"].map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={`account-sidebar-item ${
                        data.settingName === selected ? "active" : ""
                      }`}
                    >
                      <button onClick={(e) => handleMenuSelection(e.target)}>
                        {data.settingName}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* <div className="account-row">
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
              </div> */}

              {/* Render selected component */}
              {AccountMenu[0]["menuSettings"]
                .find((menu) => menu.settingName === selected)
                ?.CompoNent()}
                
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

export const MyAccount = () => {
  return (
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
  );
};

export default Account;
