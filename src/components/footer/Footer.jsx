import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.footer}>
      <nav>
        <ul>
          <li className={s.name}>React</li>
          <li>React_Next_TypeScript</li>
          <li>React_Next_TypeScript</li>
          <li>React_Next_TypeScript</li>
        </ul>
        <ul>
          <li className={s.name}>Redux</li>
          <li>Redux-Toolkit</li>
          <li>Redux-Toolkit</li>
          <li>Redux-Toolkit</li>
        </ul>
        <ul>
          <li className={s.name}>TypeScript</li>
          <li>React_Next_TypeScript</li>
          <li>React_Next_TypeScript</li>
          <li>React_Next_TypeScript</li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;