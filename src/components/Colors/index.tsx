import './Colors.scss';
import { FC } from "react";

interface ColorsProps {
  type: string;
}

const Colors: FC<ColorsProps> = ({ type }) => {
  return (
    <div className='colors'>
      <h2 className="colors__title">{type}:</h2>
      <div className="colors__list">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="colors__list-item">
            <div className="colors__list-item-block"></div>
            <div className="colors__list-item-text">rgb(245, 238, 248)</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;