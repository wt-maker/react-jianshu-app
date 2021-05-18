import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const Writer = ({loginStatus}) => {

  if (loginStatus) {
    return (
      <div>
        写文章
      </div>
    )
  } else {
    return <Redirect to='/login' />
  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['loginStore', 'loginStatus'])
})
export default connect(mapStateToProps)(Writer);