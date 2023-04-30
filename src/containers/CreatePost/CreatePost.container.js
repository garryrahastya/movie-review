import React from "react";

import FormAddPost from "../../components/FormAddPost/FormAddPost.component";
import style from "./CreatePost.module.css"

const CreatePost = () => {
  return (
    <div className={style.createContainer}>
      <h1 className={style.titlepage}>Create Post</h1>
      <div className={style.formContainer}>
      <FormAddPost />
      </div>
    </div>
  );
};

export default CreatePost;
