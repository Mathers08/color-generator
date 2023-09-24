import './Header.scss';
import { FC } from "react";
import { Color } from "../../types";
import AddColor from "./AddColor.tsx";
import { checkColorType } from "../../utils";

interface HeaderProps {
  color: Color;
  setColor: (color: Color) => void;
}

const Header: FC<HeaderProps> = ({ color, setColor }) => {
  const addColor = (color: Color) => {
    setColor({
      title: color.title,
      type: checkColorType(color.title)
    });
  };

  return (
    <header className="header">
      <h1 className="header__text">Pick the color:</h1>
      <button className="header__picker" style={{ backgroundColor: color.title }}></button>
      <AddColor addColor={addColor} />
    </header>
  );
};

export default Header;