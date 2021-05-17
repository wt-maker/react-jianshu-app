import { TopicWrapper, TopicItem } from './style';
import { connect } from 'react-redux';

function Topic({ topicList }) {
  return(
    <TopicWrapper>
      {
      topicList.map(item => (
        <TopicItem key={item.get('title')}>
          <img src={item.get('imgUrl')}></img>
          {item.get('title')}
        </TopicItem>
        ))
      }
    </TopicWrapper>
  )
}

const mapStateToProps = (state) => ({
  topicList: state.getIn(['homeStore', 'topicList'])
})
export default connect(mapStateToProps, null)(Topic);