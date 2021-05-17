import Header from './common/header';
import { GlobalStyle } from './style';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/detail';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/detail/:id' component={Detail}></Route>
    </BrowserRouter>
  );
}

export default App;
