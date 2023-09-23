import './Display.scss';

const Display = () => {
  return (
    <div className='display'>
      <div className='display__info'>
        <div className='display__info-title'>
          <h2 className='display__info-title-name'>Your color:</h2>
          <span className='display__info-title-color'>#9b59b6</span>
        </div>
        <div className='display__info-square'></div>
      </div>
      <div className='display__settings'>
        <h2 className='display__settings-title'>Convert to:</h2>
        <ul className='display__settings-list'>
          <li className='display__settings-list-item'>rgb</li>
          <li className='display__settings-list-item'>hex</li>
          <li className='display__settings-list-item'>hsl</li>
        </ul>
      </div>
    </div>
  );
};

export default Display;