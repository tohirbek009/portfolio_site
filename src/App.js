import Sidebar from "./Components/Sidebar";
import styled from "styled-components";
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage'
import BlogPage from './Pages/BlogPage'
import ContactPage from './Pages/ContactPage'
import PortfolioPage from './Pages/PortfoliosPage'
import ResumePage from './Pages/ResumePage'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainContentStyled>
        <div className='lines'>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
          <div className='line-4'></div>
        </div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/about' component={AboutPage}/>
          <Route exact path='/resume' component={ResumePage}/>
          <Route exact path='/portfolios' component={PortfolioPage}/>
          <Route exact path='/blogs' component={BlogPage}/>
          <Route exact path='/contact' component={ContactPage}/>
        </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`



export default App;
