import styled from 'styled-components'
import LogoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height:56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
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
  width: 850px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
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
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }

`;

export const NavSearchWrapper = styled.div`
  position: relative;
  float: left;
  .zoom {
    position: absolute;
    top: 13px;
    right: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    &.focused {
      background: #969696;
    }
  }

`;

export const NavSearch = styled.input.attrs(
  {
    placeholder: '搜索'
  }
)`
  width: 180px;
  height: 38px;
  padding: 0px 35px 0 20px;
  margin-top: 9px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 20px;
  line-height: 56px;
  background: #eee;
  color: #666;
  &.focused {
    width: 240px;
  }

  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-out;
  }
  &.slide-exit-active {
    width: 180px; 
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0px;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  background: #fff;
`;

export const SearchInfoTitle = styled.div`
  float: left;
  margin-top: 20px;
  font-size: 13px;
`;

export const SearchInfoSwitch = styled.div`
  float: right;
  margin-top: 20px;
  font-size: 13px;
  .spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoList = styled.div`
  float: left;
  width: 240px;
  margin-top: 10px;
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 10px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
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
  width: 90px;
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