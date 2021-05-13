import React from 'react';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style'

function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="nav-left active">首页</NavItem>
        <NavItem className="nav-left">下载APP</NavItem>
        <NavSearch />
        <NavItem className="nav-right">登录</NavItem>
        <NavItem className="nav-right">Aa</NavItem>
      </Nav>
      <Addition>
        <Button className="regist">注册</Button>
        <Button className="write">写文章</Button>
      </Addition>
    </HeaderWrapper>
  )
}

export default Header;