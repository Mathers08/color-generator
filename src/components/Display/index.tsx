import './Display.scss';
import { FC } from "react";
import { Color } from "../../types";

interface DisplayProps {
  color: Color;
}

const Display: FC<DisplayProps> = ({ color }) => {
  return (
    <div className="display">
      <div className="display__info">
        <div className="display__info-title">
          <h2 className="display__info-title-name">Your color:</h2>
          <span className="display__info-title-color" style={{ color: color.title }}>{color.title}</span>
        </div>
        <div className="display__info-square" style={{ backgroundColor: color.title }}></div>
      </div>
      <div className="display__settings">
        <h2 className="display__settings-title">Convert to:</h2>
        <ul className="display__settings-list">
          <li className="display__settings-list-item">rgb</li>
          <li className="display__settings-list-item">hex</li>
          <li className="display__settings-list-item">hsl</li>
        </ul>
      </div>
    </div>
  );
};

export default Display;