import React from "react";
import cx from "classnames";
import styles from "./style.module.scss";

export default function Login() {
  return (
    <div className={cx(styles.wrapper, styles.fadeInDown)}>
      <div id="formContent">
        {/* Tabs Titles */}
        <h2 className={styles.active}> Sign In </h2>
        <h2 className={cx(styles.inactive, styles.underlineHover)}>Sign Up </h2>
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
        {/* Remind Passowrd */}
        <div id="formFooter" className={cx(styles.formFooter)}>
          <a className={styles.underlineHover} href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
