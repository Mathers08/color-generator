import { Colors, Display, Header } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <Display />
      <Colors type='Tints' />
      <Colors type='Shades' />
    </div>
  );
};

export default App;
