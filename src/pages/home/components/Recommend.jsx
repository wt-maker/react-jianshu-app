import { connect } from 'react-redux';
import { RecommendWrapper, RecommentItem } from './style';

function Recommend({ recommendList }) {
  return (
    <RecommendWrapper>
      {
        recommendList.map(item => (
          <RecommentItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommentItem>
        ))
      }
    </RecommendWrapper>
  )
}
const mapStateToProps = (state) => ({
  recommendList: state.getIn(['homeStore', 'recommendList'])
})
export default connect(mapStateToProps)(Recommend);