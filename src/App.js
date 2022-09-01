import { useEffect, useState } from "react";
import "./App.css";
import { recipe } from "./components/externalAPI";

import Header from "./components/Header";
import MenuList from "./components/MenuList";

function App() {
  const [menuList, setmenuList] = useState([]);
  const [query, setQuery] = useState(undefined);

  useEffect(() => {
    recipe(query)
      .then((res) => {
        setmenuList(res?.data?.hits);
        // console.log(res?.data?.hits);
      })
      .catch((err) => {
        console.log("something Wrong");
      });
  }, [query]);

  const searchData = (querystring) => {
    setQuery(querystring);
  };

  return (
    <div className="container">
      <Header searchData={searchData} />
      <MenuList menuData={menuList} />
    </div>
  );
}

export default App;
