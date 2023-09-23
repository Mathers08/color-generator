import './Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <h1 className='header__text'>Pick the color:</h1>
      <button className="header__picker"></button>
      <input className="header__input" type="text" placeholder='Color name, rgb, hex, hsl...' />
      <button className="header__btn">Pick</button>
    </header>
  );
};

export default Header;