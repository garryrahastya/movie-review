import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar.component";
import contexts from "../../contexts";
import { moviepost } from "../../constants";

const { BlogContext } = contexts;

function Root() {
  const [postList, setPostList] = useState(moviepost);

  return (
    <BlogContext.Provider value={{ postList, setPostList }}>
      <Navbar />
      <Outlet />
    </BlogContext.Provider>
  );
}

export default Root;
