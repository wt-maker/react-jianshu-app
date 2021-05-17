import { useEffect } from 'react';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';
import Topic from './components/Topic';
import NewsList from './components/NewsList';
import Recommend from './components/Recommend';
import { connect } from 'react-redux';
import { homeAction } from './store';

function Home({ getHomeData, changeScrollTopShow, showScroll }) {

  useEffect(() => {
    getHomeData();
    window.addEventListener('scroll', changeScrollTopShow);
    return(()=> {
      window.removeEventListener('scroll', changeScrollTopShow);
    })
  }, [])

  return (
    <HomeWrapper>
      <HomeLeft>
        <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
        <Topic />
        <NewsList />
      </HomeLeft>
      <HomeRight>
        <Recommend/>
      </HomeRight>
      {showScroll && <BackTop onClick={()=>window.scrollTo(0, 0)}>顶部</BackTop>}
    </HomeWrapper>
  )
}

const mapState = (state) => ({
	showScroll: state.getIn(['homeStore', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  getHomeData: () => dispatch(homeAction.get_home_info_action()),
  changeScrollTopShow: () => {
    if(document.documentElement.scrollTop > 100) {
      dispatch(homeAction.toggle_scroll_top_action(true))
    } else {
      dispatch(homeAction.toggle_scroll_top_action(false))
    }
  }
})

export default connect(mapState, mapDispatchToProps)(Home);