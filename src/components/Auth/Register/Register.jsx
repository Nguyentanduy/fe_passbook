import React from "react";
import styles from "./style.module.scss";
import cx from "classnames";
import "antd/dist/antd.css";
import { DatePicker } from "antd";
// import { Redirect } from 'react-router'

export default function Register() {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div className={cx(styles.wrapper, styles.fadeInDown)}>
      <div id="formContent">
        {/* Tabs Titles */}
        <h2 className={styles.active}> Đăng ký </h2>
        <h2
          onClick={() => {
            // <Redirect to="/login"/>
          }}
          className={cx(styles.inactive, styles.underlineHover)}
        >
          {" "}
          Đăng nhập{" "}
        </h2>
        <div className={cx(styles.fadeIn, styles.first)}></div>
        {/* Login Form */}
        <form>
          <input
            type="email"
            id="email"
            className={cx(styles.fadeIn, styles.second)}
            name="email"
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            className={cx(styles.fadeIn, styles.third)}
            name="password"
            placeholder="Mật khẩu"
          />
          <input
            type="text"
            id="lastName"
            className={cx(styles.fadeIn, styles.fiveth)}
            name="lastName"
            placeholder="HỌ"
          />
          <input
            type="text"
            id="firstName"
            className={cx(styles.fadeIn, styles.fourth)}
            name="firstName"
            placeholder="TÊN"
          />
          <input
            type="text"
            id="address"
            className={cx(styles.fadeIn, styles.sixth)}
            name="address"
            placeholder="ĐỊA CHỈ"
          />
          <input
            type="number"
            id="idCard"
            className={cx(styles.fadeIn, styles.seventh)}
            name="idCard"
            min="0"
            placeholder="CMND/CCCD"
          />
          <div className={cx(styles.fadeIn, styles.dateOfBirth, styles.eighth)}>
            <div>NGÀY SINH</div>
            <DatePicker onChange={onChange} />
          </div>
          <input type="submit" className={cx(styles.fadeIn, styles.eighth)} />
        </form>
      </div>
    </div>
  );
}
