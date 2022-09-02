import { createContext, useState } from "react";
import "./App.css";
// import axios from "axios";

import Header from "./components/Header";
import MenuList from "./components/MenuList";

export const menuContext = createContext();

function App() {
  const [menuList, setmenuList] = useState([]);
  const [query, setQuery] = useState(undefined);

  const searchData = (querystring) => {
    setQuery(querystring);
  };

  return (
    <menuContext.Provider value={{ menuList, setmenuList }}>
      <div className="container">
        <Header searchData={searchData} />
        <MenuList />
      </div>
    </menuContext.Provider>
  );
}

export default App;
