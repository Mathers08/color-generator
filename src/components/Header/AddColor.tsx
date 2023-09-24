import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Color } from "../../types";
import { checkColorType } from "../../utils";

interface AddColorProps {
  addColor: (color: Color) => void;
}

const AddColor: FC<AddColorProps> = ({ addColor }) => {
  const [title, setTitle] = useState('');

  const onColorChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

  const onColorSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newColor: Color = {
      title,
      type: checkColorType(title)
    };

    if (newColor.title) {
      addColor(newColor);
      setTitle('');
    }

    console.log(newColor);
  };

  return (
    <form action="" onSubmit={onColorSubmit}>
      <input
        className="header__input"
        placeholder="Color name, rgb, hex, hsl..."
        value={title}
        onChange={onColorChange}
      />
      <button className="header__btn" type="submit">Pick</button>
    </form>
  );
};

export default AddColor;