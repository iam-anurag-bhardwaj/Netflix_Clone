import React from "react";
import { tabLabels } from "./constants";
import { Link } from "react-router-dom";
import "./tabs.css";

const Tabs = ({ activeTabName, onClickTab }) => {
  const { CANCLE_AT_ANY_TIME, PICK_YOUR_PRICE, WATCH_ANYWHERE } = tabLabels;

  const renderTabTitle = (tabTitle, isActive, icon, id) => (
    <div
      onClick={() => onClickTab(tabTitle)}
      id={id}
      className={`tab-item ${isActive && "tab-border"}`}
    >
      <i className={icon}></i>
      <p>{tabTitle}</p>
    </div>
  );

  return (
    <>
      <section className="tabs">
        <div className="container">
          {renderTabTitle(
            CANCLE_AT_ANY_TIME,
            activeTabName === CANCLE_AT_ANY_TIME,
            "fas fa-door-open fa-3x",
            "tab-1"
          )}
          {renderTabTitle(
            WATCH_ANYWHERE,
            activeTabName === WATCH_ANYWHERE,
            "fas fa-tablet-alt fa-3x",
            "tab-2"
          )}
          {renderTabTitle(
            PICK_YOUR_PRICE,
            activeTabName === PICK_YOUR_PRICE,
            "fas fa-tags fa-3x",
            "tab-3"
          )}
        </div>
      </section>
      {activeTabName === CANCLE_AT_ANY_TIME && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-1-content"
              className={`tab-content-item ${
                activeTabName === CANCLE_AT_ANY_TIME && "show"
              }`}
            >
              <div className="tab-1-content-inner">
                <div>
                  <p className="text-1g">
                    If you decide Netflix isn't for you - no problem. No
                    commitment. Cancle online anytime.
                  </p>
                  <Link to="/netflix-show" className="btn btn-lg">
                    Watch Free for 30 Days
                  </Link>
                </div>
                <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === WATCH_ANYWHERE && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-2-content"
              className={`tab-content-item ${
                activeTabName === WATCH_ANYWHERE && "show"
              }`}
            >
              <div className="tab-2-content-top">
                <p className="text-lg">
                  Watch TV shows and movies anytime, anywhere - personalized fo
                  you.
                </p>
                <Link to="/netflix-show" className="btn btn-lg">
                  Watch Free for 30 Days.
                </Link>
              </div>
              <div className="tab-2-content-bottom">
                <div>
                  <img
                    src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
                    alt=""
                  />
                  <p className="text-md"> Watch on your TV</p>
                  <p className="text-dark">
                    Smart TVs, PlayStation, Xbox, Chromecast, Apple TV and mamy
                    more.
                  </p>
                </div>
                <div>
                  <img
                    src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
                    alt=""
                  />
                  <p className="tect-md">
                    Watch instantly or doenload for later
                  </p>
                  <p className="text-dark">
                    Available on phone and tablet, wherever you go.
                  </p>
                </div>
                <div>
                  <img src="https://i.ibb.co/gDhnwWn/tab-2-3.png" alt="" />
                  <p className="text-md">Use any computer</p>
                  <p className="text-dark">Watch right on Netflix.xom</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {activeTabName === PICK_YOUR_PRICE && (
        <section className="tab-content">
          <div className="container">
            <div
              id="tab-3-content"
              className={`tab-content-item ${
                activeTabName === PICK_YOUR_PRICE && "show"
              }`}
            >
              <div className="tect-center">
                <p className="text-lg">
                  Choose one plan and watch everything on Netflix
                </p>
                <Link to="/netflix-show" className="btn btn-lg">
                  Watch Free for 30 Days.
                </Link>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Basis</th>
                    <th>Standard</th>
                    <th>Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monthly price after free month end on [Date]</td>
                    <td data-lable="Basis" >₹ 199</td>
                    <td data-lable="Standard">₹ 499</td>
                    <td data-lable="Premium">₹ 649</td>
                  </tr>
                  <tr>
                    <td> HD Available</td>
                    <td data-lable="Basis">
                      <i className="fas fa-times"></i>
                    </td>
                    <td data-lable="Standard">
                      <i className="fas fa-check"></i>
                    </td>
                    <td data-lable="Premium">
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Ultra HD Available</td>
                    <td data-lable="Basis">
                      <i className="fas fa-times"></i>
                    </td>
                    <td data-lable="Standard">
                      <i className="fas fa-times"></i>
                    </td>
                    <td data-lable="Premium">
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Screens you can Watch on at the same time</td>
                    <td data-lable="Basis">1</td>
                    <td data-lable="Standard">2</td>
                    <td data-lable="Premium">4</td>
                  </tr>
                  <tr>
                    <td>Watch on your Laptop, TV, Phone and Tablets</td>
                    <td data-lable="Basis">
                      <i className="fas fa-check"></i>
                    </td>
                    <td data-lable="Standard">
                      <i className="fas fa-check"></i>
                    </td>
                    <td data-lable="Premium">
                      <i data-lable="Premium" className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Unlimited movies and TV shows</td>
                    <td data-lable="Basis">
                      <i className="fas fa-check"></i>
                    </td>
                    <td data-lable="Standard">
                      <i className="fas fa-check"></i>
                    </td>
                    <td data-lable="Premium">
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Cancle Anytime</td>
                    <td data-lable="Basis">
                      <i className="fas fa-check"></i>
                    </td>
                    <td data-lable="Standard">
                      <i className="fas fa-check"></i>
                    </td>
                    <td data-lable="Premium">
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>First Month Free</td>
                    <td data-lable="Basis">
                      <i className="fas fa-check"></i>
                    </td>
                    <td data-lable="Standard">
                      <i className="fas fa-check"></i>
                    </td>
                    <td data-lable="Premium">
                      <i className="fas fa-check"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Tabs;
