import './App.css';
import{
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import AboutPage from './pages/AboutPage'; 
import ArticlePage from './pages/ArticlePage'; 
import ArticleListPage from './pages/ArticleListPage'; 
import Navbar from './navbar';
import NotFoundPage from './pages/NotFoundPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} />
          <Route path="/articleslist" component={ArticleListPage} />
          <Route path="/article/:name" component={ArticlePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
