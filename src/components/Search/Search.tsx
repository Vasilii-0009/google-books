import { useState, ChangeEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Search.css";
import search from "../../images/search.svg";
import { ISubmitForm } from "../../types/interface";

export const Search = ({ handleClickBtnSearch }: ISubmitForm) => {
  const [isValueInput, setValueInput] = useState(String);
  const [isValueSelect, setValueSelect] = useState(String);
  const [isValueCategoies, setValueCategories] = useState(String);
  const [isErrorMessage, setErrorMessage] = useState(false);
  const inputFocus = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValueInput !== "") {
      handleClickBtnSearch &&
        handleClickBtnSearch([isValueInput, isValueCategoies, isValueSelect]);
      navigate("/");
      setValueInput("");
      return;
    } else {
      setErrorMessage(true);
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setValueInput(value);
    setErrorMessage(false);
  };

  const handleChangeSelectSort = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setValueSelect(value);
  };

  const handleChangeSelectCategoris = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;

    setValueCategories(value);
  };

  //фокус в инпуте
  useEffect(() => {
    if (inputFocus.current) inputFocus.current.focus();
  }, [isValueSelect, isValueCategoies]);

  return (
    <header className="search container">
      <h1 className="search__title">Search for books</h1>

      <form onSubmit={onSubmit} className="search__box">
        <div className="search__box-input">
          <label className="search__label">
            <input
              onChange={handleChangeInput}
              value={isValueInput}
              ref={inputFocus}
              className="search__input"
              type="text"
              name="search"
              placeholder="name book"
            />

            <button className="search__btn" type="submit">
              <img className="search__img" src={search} alt="иконка поиска" />
            </button>
          </label>

          {isErrorMessage && (
            <span className="search__error">*Введите название книги </span>
          )}
        </div>

        <label className="search__label-categories">
          Categories
          <select
            className="search__select"
            onChange={handleChangeSelectCategoris}
          >
            <option value="all">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
        </label>

        <label className="search__label-categories">
          Sorting
          <select className="search__select" onChange={handleChangeSelectSort}>
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </label>
      </form>
    </header>
  );
};
