import './Colors.scss';
import { FC } from "react";
import { hexToRgb, hslToRgb, rgbShades, rgbTints, rgbToHex, rgbToHsl } from "../../utils";
import { Color } from "../../types";

interface ColorsProps {
  type: string;
  color: Color;
}

const Colors: FC<ColorsProps> = ({ type, color }) => {
  let colorBlocks;
  if (color.type === "hex") {
    colorBlocks = type === 'Tints' ? rgbTints(hexToRgb(color.title)) : rgbShades(hexToRgb(color.title));
  } else if (color.type === "hsl") {
    colorBlocks = type === 'Tints' ? rgbTints(hslToRgb(color.title)) : rgbShades(hslToRgb(color.title));
  } else {
    colorBlocks = type === 'Tints' ? rgbTints(color.title) : rgbShades(color.title);
  }
  console.log(colorBlocks);

  return (
    <div className="colors">
      <h2 className="colors__title">{type}:</h2>
      <div className="colors__list">
        {colorBlocks && colorBlocks.map((c: string) => (
          <div key={c} className="colors__list-item">
            <div className="colors__list-item-block" style={{ backgroundColor: c }}></div>
            <div className="colors__list-item-text">
              {color.type === 'hex' ? rgbToHex(c) : (color.type === 'hsl' ? rgbToHsl(c) : c)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;