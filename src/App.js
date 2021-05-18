import Header from './common/header';
import { GlobalStyle } from './style';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Writer from './pages/writer';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/writer' component={Writer}></Route>
      <Route exact path='/detail/:id' component={Detail}></Route>
    </BrowserRouter>
  );
}

export default App;
