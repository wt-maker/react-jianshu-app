import { useEffect } from 'react';
import {connect} from 'react-redux';
import { detailAction } from './store'
import { DetailWrapper, Header, Content } from './style';
function Detail({title, content, getDetail}) {

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <DetailWrapper>
			<Header>{title}</Header>
			<Content dangerouslySetInnerHTML={{__html: content}}/>
		</DetailWrapper>
  )
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detailStore', 'title']),
  content: state.getIn(['detailStore', 'content']),
})

const mapDispatchToProps = (dispatch) => ({
  getDetail: () => dispatch(detailAction.get_article_detail())
})

export default connect(mapStateToProps, mapDispatchToProps)(Detail);