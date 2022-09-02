import React, { useEffect, useContext } from "react";
import "../components/MenuList.css";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";
import { menuContext } from "../App";
const MenuList = () => {
  const { menuList, setmenuList } = useContext(menuContext);
  useEffect(() => {
    async function getMenu() {
      try {
        const menu = await axios.get(`http://localhost:3333/menu`);
        setmenuList(menu?.data);
        console.log(menu?.data);
      } catch (error) {
        console.log("something in wrong");
      }
    }
    getMenu();
  }, []);

  const menuDel = async (id) => {
    await axios.delete(`http://localhost:3333/menu/${id}`);
    let newMenu = menuList.filter((item) => {
      return item.id !== id;
    });
    setmenuList(newMenu);
  };

  return (
    <div className="menu-list">
      <h1 className="menu-style">Menu</h1>
      <div className="row">
        {menuList.map((menu, index) => {
          return (
            <div key={index}>
              <div className="list-view" key={index}>
                <img src={menu.image} alt={menu.title} className="list-img" />
                {
                  <p className="menu-price">
                    {" "}
                    <span className="price">$</span>
                    {menu.price}
                  </p>
                }

                <div className="menu">
                  <div className="del">
                    <p className="menu-title">{menu.title}</p>
                    <MdOutlineDeleteOutline
                      className="menu-icon"
                      onClick={() => {
                        menuDel(menu.id);
                      }}
                    />
                  </div>

                  <p className="menu-descr">{menu.description}</p>
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
