import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  NavSearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { action } from './store'
import { loginAction } from '../../pages/login/store';

function Header(props) {

  const {
    focused,
    handleInputFocus,
    handleInputBlur,
    list,
    handleMouseEnter,
    handleMouseLeave,
    mouseIn,
    currentPage,
    changePage,
    loginStatus,
    logout
  } = props;

  let spinRef = React.createRef();

  const getSearchInfoArea = () => {
    
    if ( list && list.size > 0) {
      const newList = list.toJS();
      const currentList = [];
      for (var i=(currentPage-1)*10; i<currentPage*10; i++) {
        if(newList[i]){
          currentList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
        }
      }

      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>热门搜索</SearchInfoTitle>
          <SearchInfoSwitch onClick={() => changePage(currentPage+1, spinRef)}>
            <span ref={(icon) => {spinRef = icon}} className="iconfont spin">&#xe790;</span>换一批
          </SearchInfoSwitch>
          <SearchInfoList>
            {currentList}
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }

  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <Nav>
        <NavItem className="nav-left active">
          <span className="iconfont zoom">&#xe693;</span>首页
        </NavItem>
        <NavItem className="nav-left">
          <span className="iconfont zoom">&#xe624;</span>下载APP
        </NavItem>
        <NavSearchWrapper>
          <CSSTransition in={(focused || mouseIn)} timeout={200} classNames="slide">
            <NavSearch
              className={(focused || mouseIn)? "focused": ""}
              onFocus={()=>handleInputFocus(list)}
              onBlur={handleInputBlur}
            />
          </CSSTransition>
          <span className={(focused || mouseIn)? "focused iconfont zoom": "iconfont zoom"}>&#xe604;</span>
          {(focused || mouseIn) && getSearchInfoArea()}
        </NavSearchWrapper>
        {
          !loginStatus? (
            <Link to="/login">
              <NavItem className="nav-right">登录</NavItem>
            </Link>
          ): (
            <NavItem className="nav-right" onClick={logout}>登出</NavItem>
          )
        }
        
        <NavItem className="nav-right"><span className="iconfont zoom">&#xe636;</span></NavItem>
      </Nav>
      <Addition>
        <Button className="regist">注册</Button>
        <Link to="/writer">
          <Button className="write"><span className="iconfont zoom">&#xe601;</span>写文章</Button>
        </Link>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => ({
  focused: state.get('headerStore').get('focused'),
  list: state.get('headerStore').get('list'),
  mouseIn: state.get('headerStore').get('mouseIn'),
  totalPage: state.get('headerStore').get('totalPage'),
  currentPage: state.get('headerStore').get('currentPage'),
  loginStatus: state.getIn(['loginStore', 'loginStatus'])
})

const mapDispatchToProps = (dispatch) => ({
  handleInputFocus: (list) => {
    dispatch(action.search_focus_action());
    if (list.size === 0) {
      dispatch(action.get_list());
    }
  },
  handleInputBlur: () => dispatch(action.search_blur_action()),
  handleMouseEnter: () => dispatch(action.search_mouse_enter_action()),
  handleMouseLeave: () => dispatch(action.search_mouse_leave_action()),
  changePage: (currentPage, spin) => {
    let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
    if (originAngle) {
      originAngle = parseInt(originAngle, 10);
    } else {
      originAngle = 0;
    }
    spin.style.transform = `rotate(${originAngle+360}360deg)`;
    dispatch(action.change_page(currentPage))
  },
  logout: () => dispatch(loginAction.change_logout_action())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);