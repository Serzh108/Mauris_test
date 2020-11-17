import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();

  return (
    <div className={styles.header}>
      {location.pathname === '/series' && (
        <NavLink to="/" className={styles.linkArrow}>
          <NavigateBeforeIcon fontSize="large"></NavigateBeforeIcon>
        </NavLink>
      )}

      <span className={styles.headerText}>Super film</span>
    </div>
  );
}
