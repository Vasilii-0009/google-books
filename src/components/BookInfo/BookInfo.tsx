import { Link } from "react-router-dom";

import "./BookInfo.css";
import arrow from "../../images/arrow.svg";
import { IOneBookInfo } from "../../types/interface";

export const BookInfo = ({ isInfoBook }: IOneBookInfo) => {
  return (
    <>
      {isInfoBook && (
        <>
          <div className="book">
            <div className="book__box-img">
              <img
                className="book__img"
                src={
                  isInfoBook.volumeInfo.imageLinks
                    ? isInfoBook.volumeInfo.imageLinks.thumbnail
                    : ""
                }
                alt="обложка книги"
              />
            </div>

            <div className="book__box-info">
              <p className="book__categories">
                {isInfoBook.volumeInfo.categories}
              </p>
              <h3>{isInfoBook.volumeInfo.title}</h3>
              <p
                className="book__authors
              "
              >
                {isInfoBook.volumeInfo.authors}
              </p>
              <p className="book__description">
                {isInfoBook.volumeInfo.description}
              </p>
            </div>
          </div>
          <Link to="/" className="book__link">
            <img className="book__arrow" src={arrow} alt="стрелка назад" />
            Назад
          </Link>
        </>
      )}
    </>
  );
};
