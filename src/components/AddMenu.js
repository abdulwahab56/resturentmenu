import React, { useContext, useState } from "react";
import "../components/AddMenu.css";
import { BsCloudUpload } from "react-icons/bs";
import axios from "axios";
import { menuContext } from "../App";

const AddMenu = ({ close }) => {
  const { menuList } = useContext(menuContext);
  const [addMenu, setAddMenu] = useState({
    title: "",
    image: "",
    description: "",
    price: "",
  });

  function textAdd(e) {
    setAddMenu({
      ...addMenu,
      [e.target.name]: e.target.value,
    });
    console.log(addMenu);
  }
  async function handelSubmit(e) {
    // e.preventDefault();

    async function getMenu() {
      try {
        if (menuList.find((la) => la.title === addMenu.title)) {
          return alert("alredy have item");
        }
        await axios.post(`http://localhost:3333/menu`, addMenu);
      } catch (error) {
        console.log("something in wrong");
      }
    }
    getMenu();
  }

  return (
    <>
      <div
        onClick={() => {
          close(false);
        }}
        class="overlay"
      ></div>
      <div class="add-recipe-window">
        <button
          onClick={() => {
            close(false);
          }}
          class="btn--close-modal"
        >
          &times;
        </button>
        <form class="upload" onSubmit={(e) => handelSubmit(e)}>
          <div class="upload__column">
            <h3 class="upload__heading">Recipe data</h3>
            <label>Title</label>
            <input
              required
              name="title"
              type="text"
              onChange={(e) => textAdd(e)}
            />
            <label>Image URL</label>
            <input
              required
              name="image"
              type="url"
              onChange={(e) => textAdd(e)}
            />
            <label>Description</label>
            <input
              required
              name="description"
              type="text"
              onChange={(e) => textAdd(e)}
            />
            <label>Price</label>
            <input
              required
              name="price"
              type="number"
              onChange={(e) => textAdd(e)}
            />
          </div>

          <button class="btn upload__btn">
            <BsCloudUpload className="upload-icon" />

            <span>Add Menu</span>
          </button>
        </form>
        <div />
      </div>
    </>
  );
};

export default AddMenu;
