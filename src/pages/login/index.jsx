import { LoginWrapper, Input, Button, LoginBox } from './style';
import { useState } from 'react';
import { connect } from 'react-redux';
import { loginAction } from './store'
import { Redirect } from 'react-router';

function Login({ status, loginSubmit}) {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  console.log(status);
  if (!status) {
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="请输入用户名" type="input" value={userName} onChange={(e) => setUserName(e.target.value)} />
          <Input placeholder="请输入密码" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={()=>loginSubmit(userName, password)}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  } else {
    return <Redirect to='/'/>
  }
}

const mapStateToProps = (state) => ({
  status: state.getIn(['loginStore', 'loginStatus'])
})

const mapDispatchToProps = (dispatch) => ({
  loginSubmit: (userName, password) => dispatch(loginAction.change_login_action(userName, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);