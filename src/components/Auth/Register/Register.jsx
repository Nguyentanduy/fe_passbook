import React from 'react';
import styles from './style.module.scss'
import cx from "classnames";

export default function Register() {
  return <div className={cx(styles.wrapper, styles.fadeInDown)}>
  <div id="formContent">
    {/* Tabs Titles */}
    <h2 className={styles.active}> Sign Up </h2>
    <h2 className={cx(styles.inactive, styles.underlineHover)}>Sign In </h2>
    {/* <h2 className="inactive underlineHover">Sign Up </h2> */}
    {/* Icon */}
    <div className={cx(styles.fadeIn, styles.first)}>
      {/* <img src="http://danielzawadzki.com/codepen/01/icon.svg" id="icon" alt="User Icon" /> */}
    </div>
    {/* Login Form */}
    <form>
      <input
        type="text"
        id="login"
        className={cx(styles.fadeIn, styles.second)}
        name="login"
        placeholder="username"
      />
      <input
        type="text"
        id="password"
        className={cx(styles.fadeIn, styles.third)}
        name="login"
        placeholder="password"
      />
      <input type="submit" className={cx(styles.fadeIn, styles.fourth)} />
    </form>
  </div>
</div>;
}
