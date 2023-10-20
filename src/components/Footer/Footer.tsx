import "./Footer.css";

export const Footer = () => {
  const Year = new Date().getFullYear();
  return (
    <footer className="footer container">{`Все права защищены © 2022-${Year}`}</footer>
  );
};
