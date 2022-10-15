import React from 'react';
import s from './Header.module.scss';


const Header = () => {
  return (
    <div className={s.header}>
      <h1>Колобарация с Python</h1>
      <p>
        Этот проект посвящен тому что-бы провести его вместе с питонистами и научится <br /> взаимодейтсвовать с "Back-end" частью веб приложения
      </p>
    </div>
  );
};

export default Header;