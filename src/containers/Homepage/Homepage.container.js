import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contexts from "../../contexts";
import style from "./Homepage.module.css";

const { BlogContext } = contexts;

const Homepage = () => {
  const { postList } = useContext(BlogContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = postList.filter((post) =>
    post.movieName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={style.container}>
      <h1>Welcome to Movie list and review</h1>
      <div className={style.searchBox}>
        <input
          type="text"
          placeholder="Search by movie name..."
          value={searchTerm}
          onChange={handleSearch}
          className={style.searchInput}
        />
      </div>
      {filteredPosts.length > 0 ? (
        <div className={style.cardList}>
          {filteredPosts.map((post) => (
            <div className={style.card} key={post.id}>
              <div className={style.cardImage}>
                <img src={post.image} alt="movielogo" />
              </div>
              <div className={style.cardBody}>
                <h2>{post.movieName}</h2>
                <br />
                <p>
                  <strong>Released:</strong> {post.releaseYear}
                </p>
                <p>
                  <strong>Rating:</strong> {post.rating}
                  <FontAwesomeIcon icon={faStar} className={style.icon} />
                </p>
              </div>
              <Link to={`/posts/${post.id}`} className={style.linkTo}>
                Read More...
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No movies found. Create a movie review by clicking <strong>Create Post</strong>.</p>
      )}
    </div>
  );
};

export default Homepage;
