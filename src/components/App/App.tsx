import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { DataApi } from "../../utils/Api";
import { Layout } from "../Layout/Layout";
import { Books } from "../Books/Books";
import { BookInfo } from "../BookInfo/BookInfo";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { IBookItemFull } from "../../types/interface";
import { Preloader } from "../Preloader/Preloader";

function App() {
  const [isAllBooks, setAllBooks] = useState<IBookItemFull[]>([]);
  const [isValueInput, setValueInput] = useState<string[]>([]);
  const [isBooksCount, setBooksCount] = useState();
  const [isPlusBooksCount, setPlusBooksCount] = useState(Number);
  const [isInfoBook, setInfoBook] = useState<IBookItemFull>();
  const [isPreloader, setPreloader] = useState(false);
  const [isPreloaderTwo, setPreloaderTwo] = useState(false);

  const handleClickBtnSearch = (value: string[]) => {
    setPreloader(true);
    setValueInput(value);
    setAllBooks([]);
    setPlusBooksCount(0);
  };

  useEffect(() => {
    if (isPreloader || isPlusBooksCount) {
      DataApi.searhcBooks(isValueInput, isPlusBooksCount)
        .then((data) => {
          setAllBooks([...isAllBooks, ...data.items]);
          setBooksCount(data.totalItems);
          setPreloader(false);
          setPreloaderTwo(false);
        })
        .catch((err) => {
          console.log(`Код ошибки- ${err}`);
        });
    }
  }, [isPreloader, isPlusBooksCount]);

  function handleClickBook(id: string) {
    if (isAllBooks !== undefined) {
      isAllBooks.forEach((item) => {
        if (item.id === id) {
          setInfoBook({ ...item });
        }
      });
    }
  }

  const handleShowMoreBooks = (count: number) => {
    setPlusBooksCount(isPlusBooksCount + count);
    setPreloaderTwo(true);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Layout handleClickBtnSearch={handleClickBtnSearch} />}
        >
          <Route
            index
            element={
              <>
                {isPreloader ? (
                  <Preloader />
                ) : (
                  <Books
                    isAllBooks={isAllBooks}
                    isBooksCount={isBooksCount}
                    isPreloaderTwo={isPreloaderTwo}
                    handleClickBook={handleClickBook}
                    handleShowMoreBooks={handleShowMoreBooks}
                  />
                )}
              </>
            }
          />

          <Route
            path="book-info"
            element={<BookInfo isInfoBook={isInfoBook} />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
