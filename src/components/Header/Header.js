import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import styles from './Header.module.css';

export default function Header() {
  const location = useLocation();
  console.log('location = ', location.pathname);

  return (
    <div className={styles.header}>
      {location.pathname === '/series' && (
        <NavLink to="/" className={styles.linkArrow}>
          <NavigateBeforeIcon
            fontSize="large"
            style={
              {
                // fontSize: 30,
                // color: 'red',
              }
            }
          ></NavigateBeforeIcon>
        </NavLink>
      )}

      <span className={styles.headerText}>Super film</span>
    </div>
  );
}
