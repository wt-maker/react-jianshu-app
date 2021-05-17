import { NewsListWrapper, NewsItem, NewsContent, MoreNewsLlist } from './style';
import { connect } from 'react-redux';
import { homeAction } from '../store';
import { Link } from 'react-router-dom';

function NewsList({ articleList, getMoreArticleList }) {
  return(
    <NewsListWrapper>
    {
      articleList.map((item, index) => (
        <Link key={index} to={`/detail/${item.get('id')}`}>
          <NewsItem>
            <img src={item.get('imgUrl')} alt=''/>
            <NewsContent>
              <h3>{item.get('title')}</h3>
              <p>{item.get('desc')}</p>
            </NewsContent>
          </NewsItem>
        </Link>
      ))
    }
    <MoreNewsLlist onClick={getMoreArticleList}>
      更多文章
    </MoreNewsLlist>
    </NewsListWrapper>
  )
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['homeStore', 'articleList'])
})

const mapDispatchToProps = (dispatch) => ({
  getMoreArticleList: () => dispatch(homeAction.get_more_article_list_action())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);