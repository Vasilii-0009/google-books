import "./Layout.css";
import { Outlet } from "react-router-dom";
import { Search } from "../Search/Search";
import { Footer } from "../Footer/Footer";
import { ISubmitForm } from "../../types/interface";

export const Layout = ({ handleClickBtnSearch }: ISubmitForm) => {
  return (
    <>
      <Search handleClickBtnSearch={handleClickBtnSearch} />
      <main className="main container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
