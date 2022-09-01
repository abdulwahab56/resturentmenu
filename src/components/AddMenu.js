import React from "react";
import "../components/AddMenu.css";
import { BsCloudUpload } from "react-icons/bs";

const AddMenu = ({ close }) => {
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
        <form class="upload">
          <div class="upload__column">
            <h3 class="upload__heading">Recipe data</h3>
            <label>Title</label>
            <input value="" required name="title" type="text" />
            <label>URL</label>
            <input value="" required name="sourceUrl" type="text" />
            <label>Image URL</label>
            <input value="TEST23" required name="image" type="text" />
            <label>Description</label>
            <input value="TEST23" required name="Description" type="text" />
            <label>Price</label>
            <input value="23" required name="Price" type="number" />
            <label>Servings</label>
            <input value="" required name="servings" type="number" />
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
