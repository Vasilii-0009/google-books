import { Link } from "react-router-dom";
import "./Books.css";
import { BooksItem } from "../BooksItem/BooksItem";
import { IBooksInfo } from "../../types/interface";
import { Preloader } from "../Preloader/Preloader";

export const Books = ({
  isAllBooks,
  isBooksCount,
  isPreloaderTwo,
  handleClickBook,
  handleShowMoreBooks,
}: IBooksInfo) => {
  const plusCount = 30;
  const handlePlusMoreBooks = () => {
    handleShowMoreBooks && handleShowMoreBooks(plusCount);
  };
  return (
    <>
      {isAllBooks && (
        <div className="books container">
          {isBooksCount && (
            <p className="books__count">Found {isBooksCount} books</p>
          )}

          <div className="books__box">
            {isAllBooks.map((item, index) => {
              return (
                <Link
                  to="book-info"
                  key={index}
                  className="books__item"
                  onClick={() => {
                    handleClickBook && handleClickBook(item.id);
                  }}
                >
                  {<BooksItem volumeInfo={item.volumeInfo} />}
                </Link>
              );
            })}
          </div>
          <div>{isPreloaderTwo && <Preloader />}</div>
          {isBooksCount && (
            <button
              className="books__btn"
              type="button"
              onClick={handlePlusMoreBooks}
            >
              more books
            </button>
          )}
        </div>
      )}
    </>
  );
};
