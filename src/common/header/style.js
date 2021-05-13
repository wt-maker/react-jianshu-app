import styled from 'styled-components'
import LogoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height:56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  display: block;
  position: absolute;
  top: 0;
  left: 100px;
  width:100px;
  height: 56px;
  background: url(${LogoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 950px;
  height: 100%;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  margin-right: 15px;
  color: #333;
  &.nav-left {
    float: left;
  }
  &.nav-right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }

`;

export const NavSearch = styled.input.attrs(
  {
    placeholder: '搜索'
  }
)`
  width: 160px;
  height: 38px;
  padding: 0px 20px;
  margin-top: 9px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 20px;
  line-height: 56px;
  background: #eee;
  color: #666;
`;

export const Addition = styled.div`
  position: absolute;
  top: 0px;
  right: 50px;
  width: 350px;
  height: 56px;
`;

export const Button = styled.button`
  border-radius: 20px;
  height: 38px;
  margin-top: 9px;
  margin-right: 15px;
  width: 100px;
  &.regist {
    border: 1px solid #ea6f5a;
    background: white;
  }
  &.write {
    border: none;
    background: #ea6f5a;
    color: white;
  }
`;