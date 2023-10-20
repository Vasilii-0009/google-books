import "./BooksItem.css";
import { IBookItem } from "../../types/interface";

export const BooksItem = ({ volumeInfo }: IBookItem) => {
  // change categories
  let resCategories;
  if (volumeInfo.categories) {
    if (volumeInfo.categories[0].indexOf("&") > 1) {
      const indesSymbol = volumeInfo.categories[0].indexOf("&");
      resCategories = volumeInfo.categories[0].slice(0, indesSymbol);
    } else {
      resCategories = volumeInfo.categories;
    }
  }

  // change title
  let resTitle;
  if (volumeInfo.title.length >= 55) {
    resTitle = `${volumeInfo.title.slice(0, 55)}...`;
  } else {
    resTitle = volumeInfo.title;
  }

  // change author
  let resAuthor = [];
  if (volumeInfo.authors === undefined) {
    resAuthor.push("");
  } else if (volumeInfo.authors.length === 1) {
    resAuthor.push(volumeInfo.authors);
  } else if (volumeInfo.authors.length > 1) {
    const lengthAutors = volumeInfo.authors.length - 1;
    for (let i = 0; i < volumeInfo.authors.length; i++) {
      if (i === lengthAutors) {
        resAuthor.push(`${volumeInfo.authors[i]}`);
      } else {
        resAuthor.push(`${volumeInfo.authors[i]}, `);
      }
    }
  }

  return (
    <>
      <img
        className="books__img"
        src={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : ""}
        alt="книга"
      />
      <div className="books__info">
        <p className="books__info-text books__info-categories">
          {resCategories}
        </p>
        <h3 className="books__info-text books__info-title">{resTitle}</h3>
        <p className="books__info-text books__info-authors">{resAuthor}</p>
      </div>
    </>
  );
};
