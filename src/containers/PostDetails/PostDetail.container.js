import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contexts from "../../contexts";
import style from "./PostDetail.module.css";

const { BlogContext } = contexts;

function PostDetail() {
  const { postID } = useParams();
  const { postList } = useContext(BlogContext);

  const selectedPost = postList.find((post) => post.id === postID);

  useEffect(() => {
    if (!selectedPost) {
      const timeout = setTimeout(() => {
        window.location.replace("/");
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [selectedPost]);

  return (
    <div className={style["post-card"]}>
      {!selectedPost && (
        <div>
          <h1>Page Not found...</h1>
          <p>Redirect to homepage in 5 seconds...</p>
        </div>
      )}
      {selectedPost && (
        <>
          <div
            className={style["post-image"]}
            style={{ backgroundImage: `url(${selectedPost.image})` }}
          >
            <div className={style["post-details"]}>
              <h1>{selectedPost?.movieName}</h1>
              <p>
                <strong>Released: </strong> {selectedPost?.releaseYear}
              </p>
              <br />
              <p>
                <strong>Review Description:</strong>
              </p>
              <p> {selectedPost?.review}</p>
              <br />
              <p>
                <strong>Rating:</strong> {selectedPost?.rating}
                <FontAwesomeIcon icon={faStar} className={style.icon} />
              </p>
              <p>
                <strong>Post Created At:</strong> {selectedPost?.createdAt}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PostDetail;
