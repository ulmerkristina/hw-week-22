import React from 'react'
import Dictionary from './Dictionary';
import Practice from './Practice';

function Navigation() {
  return (
    <div>
        <nav className='navigation'>
          <ul className='navigation__list'>
            <li className='navigation__item'><a href="#" className='navigation__link'>Список слов</a></li>
            <li className='navigation__item'><a href="#" className='navigation__link'>Тренировка</a></li>
          </ul>
        </nav>
    </div>
  );
}


export default Navigation