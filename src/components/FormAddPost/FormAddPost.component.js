import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import contexts from "../../contexts/";
import style from "./FormAddPost.module.css";

const { BlogContext } = contexts;

const FormAddPost = () => {
  const [id, setId] = useState("");
  const [movieName, setMovieName] = useState("");
  const [image, setImage] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [createdAt, setCreatedAt] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [isMovieNameValid, setIsMovieNameValid] = useState(true);
  const [isImageValid, setIsImageValid] = useState(true);
  const [isReleaseYearValid, setIsReleaseYearValid] = useState(true);
  const [isReviewValid, setIsReviewValid] = useState(true);
  const [isRatingValid, setIsRatingValid] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  const { setPostList } = useContext(BlogContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isFormValid = true;

    if (!movieName) {
      setIsMovieNameValid(false);
      isFormValid = false;
    } else {
      setIsMovieNameValid(true);
    }

    if (!releaseYear) {
      setIsReleaseYearValid(false);
      isFormValid = false;
    } else {
      setIsReleaseYearValid(true);
    }

    if (!review) {
      setIsReviewValid(false);
      isFormValid = false;
    } else {
      setIsReviewValid(true);
    }

    if (!rating) {
      setIsRatingValid(false);
      isFormValid = false;
    } else {
      setIsRatingValid(true);
    }

    if (!image) {
      setIsImageValid(false);
      isFormValid = false;
    } else {
      setIsImageValid(true);
    }

    if (isFormValid) {
      setPostList((prevState) => [
        ...prevState,
        {
          id: uuidv4(),
          movieName: movieName,
          releaseYear: releaseYear,
          review: review,
          rating: rating,
          createdAt: createdAt,
          image: image,
        },
      ]);
      setId("");
      setMovieName("");
      setImage("");
      setReleaseYear("");
      setReview("");
      setRating("");
      setCreatedAt(new Date().toISOString().slice(0, 10));
      setShowNotification(true);
    } else {
      setTimeout(() => {
        setIsMovieNameValid(true);
        setIsImageValid(true);
        setIsReleaseYearValid(true);
        setIsReviewValid(true);
        setIsRatingValid(true);
      }, 2000);
    }
  };

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label htmlFor="movieName">Movie Name:</label>
      <input
        type="text"
        id="movieName"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        className={`${style.input} ${!isMovieNameValid && style.invalid}`}
      />
      {!isMovieNameValid && (
        <div className={style.warning}>Please fill in the movie name!</div>
      )}

      <label htmlFor="image">Image:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className={`${style.input} ${!isImageValid && style.invalid}`}
      />
      {!isReleaseYearValid && (
        <div className={style.warning}>Please fill in the Image!</div>
      )}

      <label htmlFor="releaseYear">Release Year:</label>
      <input
        type="text"
        id="releaseYear"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)}
        className={`${style.input} ${!isReleaseYearValid && style.invalid}`}
      />
      {!isReleaseYearValid && (
        <div className={style.warning}>Please fill in the release year!</div>
      )}

      <label htmlFor="review">Review Description:</label>
      <textarea
        id="review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className={`${style.input} ${!isReviewValid && style.invalid}`}
      />
      {!isReviewValid && (
        <div className={style.warning}>
          Please fill in the review description!
        </div>
      )}

      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className={`${style.input} ${!isRatingValid && style.invalid}`}
      />
      {!isRatingValid && (
        <div className={style.warning}>Please fill in the rating!</div>
      )}

      <label htmlFor="createdAt">Created At:</label>
      <input
        type="date"
        id="createdAt"
        value={createdAt}
        onChange={(e) => setCreatedAt(e.target.value)}
        className={style.input}
      />

      <button className={style.button} type="submit">
        Submit
      </button>
      {showNotification && (
        <div className={style.notification} onClick={handleNotificationClose}>
          Data successfully submitted!
        </div>
      )}
    </form>
    
  );
};

export default FormAddPost;
