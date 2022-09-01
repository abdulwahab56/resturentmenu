import React, { useState } from "react";
import "./Header.css";
import { FiEdit } from "react-icons/fi";

import { CgSearchLoading } from "react-icons/cg";
import AddMenu from "./AddMenu";

const Header = ({ searchData }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div>
          <span className="logo">Resturent</span>
        </div>

        <form
          className="search"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="search__field"
            placeholder="Search over 1,000,000 menu..."
            onChange={(e) => {
              searchData(e.target.value);
            }}
          />
          <button className="btn search__btn">
            <CgSearchLoading className="btn-icon" />
            <span>Search</span>
          </button>
        </form>
        <div>
          <button
            className="add--btn"
            onClick={() => {
              setOpen(true);
            }}
          >
            <FiEdit className="header-icon" />
            <span>ADD MENU</span>
          </button>
          {open && <AddMenu close={setOpen} />}
        </div>
      </div>
    </>
  );
};

export default Header;
