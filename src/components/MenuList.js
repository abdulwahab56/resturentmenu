import React from "react";
import "../components/MenuList.css";
// import { menuData } from "../menuData";
const MenuList = ({ menuData }) => {
  return (
    <div className="menu-list">
      <h1 className="menu-style">Menu</h1>
      <div className="row">
        {menuData.map((menu, index) => {
          return (
            <div key={index}>
              <div className="list-view" key={index}>
                <img
                  src={menu?.["recipe"]["image"]}
                  alt={menu?.["recipe"]["label"]}
                  className="list-img"
                />

                <div className="menu">
                  <p className="menu-title">
                    {menu?.["recipe"]["label"]}
                    <p className="menu-price">
                      {" "}
                      <span className="price">$ 10</span>
                    </p>
                  </p>
                  {/* <p className="menu-descr">
                    {menu?.["recipe"]["healthLabels"]}
                  </p> */}
                </div>
              </div>
            </div>
          );
        })}
        {/* <button className="btn menu-btn">Order </button> */}
      </div>
    </div>
  );
};

export default MenuList;
