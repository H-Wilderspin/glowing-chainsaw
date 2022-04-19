import './App.css';

import Home from './Components/Home/Home';
import PortfolioFront from './Components/Porfolio/PortfolioFront';
   import Quiz from './Components/Porfolio/Quiz/Quiz';
   import New from './Components/Porfolio/NewProject/New.js'
   import Menu from './Components/Porfolio/Menu/Menu';
      import PlaceOrder from './Components/Porfolio/Menu/PlaceOrder';
import BlogPage from './Components/Blog/BlogPage';
  import NewArticle from './Components/Blog/NewArticle';
import ContactMeForm from './Components/Contact/ContactMeForm';

import { Routes, Route } from 'react-router-dom'
import AuthorPage from './Components/Author/AuthorPage';

function App() {
  return (
    <div className="App">
      <main className='App-main'>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/portfolio" element={<PortfolioFront />} />
          <Route path="/portfolio/quiz" element={<Quiz />} />
          <Route path="/portfolio/menu" element={<Menu />} />
            <Route path="portfolio/menu/place-order" element={<PlaceOrder />} />
          <Route path="/portfolio/new" element={<New />} />
          <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/new-article" element={<NewArticle />} />
          <Route path="/contactme" element={<ContactMeForm />} />
          <Route path="/aboutme" element={<AuthorPage />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
