import { Colors, Display, Header } from "./components";
import { useState } from "react";
import { Color } from "./types";

const App = () => {
  const [color, setColor] = useState<Color>({ title: '', type: 'common' });

  return (
    <div>
      <Header color={color} setColor={setColor} />
      {color.title &&
        <>
          <Display color={color} />
          <Colors type="Tints" color={color} />
          <Colors type="Shades" color={color} />
        </>
      }
    </div>
  );
};

export default App;
