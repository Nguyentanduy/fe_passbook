import React from "react";
import cx from "classnames";
import styles from "./style.module.scss";
// import { Redirect } from 'react-router'
import { useNavigate } from 'react-router';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className={cx(styles.wrapper, styles.fadeInDown)}>
      <div id="formContent">
        {/* Tabs Titles */}
        <h2 className={styles.active}> Đăng nhập </h2>
        <h2 onClick={() =>{
          // <Redirect to="/register"/>
          navigate('/register')

        }} className={cx(styles.inactive, styles.underlineHover)}>Đăng ký</h2>
        {/* Icon */}
        <div className={cx(styles.fadeIn, styles.first)}>
        </div>
        {/* Login Form */}
        <form>
          <input
            type="email"
            id="email"
            className={cx(styles.fadeIn, styles.second)}
            name="email"
            placeholder="EMAIL"
          />
          <input
            type="text"
            id="password"
            className={cx(styles.fadeIn, styles.third)}
            name="password"
            placeholder="MẬT KHẨU"
          />
          <input type="submit" className={cx(styles.fadeIn, styles.fourth)} />
        </form>
        {/* Remind Passowrd */}
        <div id="formFooter" className={cx(styles.formFooter)}>
          <a className={styles.underlineHover} href="#">
            Quên mật khẩu?
          </a>
        </div>
      </div>
    </div>
  );
}
