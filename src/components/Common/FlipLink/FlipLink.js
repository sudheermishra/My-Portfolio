import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './FlipLink.module.scss';

const FlipLink = ({ children, to, href, target, onClick }) => {
  const content = (
    <div className={styles.flipContainer}>
      <div className={styles['text-wrapper']}>
        <span>{children}</span>
        <span className={styles['second-text']}>{children}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel="noopener noreferrer" onClick={onClick}>
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <NavLink to={to} onClick={onClick}>
        {content}
      </NavLink>
    );
  }

  return <div onClick={onClick}>{content}</div>;
};

export default FlipLink;
