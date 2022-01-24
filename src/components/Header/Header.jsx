import { Button } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return <div>
       <Button type="primary">
          <NavLink to="">Home</NavLink>
        </Button>
        <Button type="primary">
          <NavLink to="login">Login</NavLink>
        </Button>
        <Button type="primary">
          <NavLink to="register">Register</NavLink>
        </Button>

  </div>;
}
