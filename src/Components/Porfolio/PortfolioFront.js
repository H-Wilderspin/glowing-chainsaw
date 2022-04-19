import React from 'react'
import { Link } from 'react-router-dom'
import MainNav from '../Home/MainNav';
import './portfolioFront.css'

function PortfolioFront() {
  return (
    <div className="Home-whole">
      <main className="Portfolio-container">

        <MainNav
          nav1="/"
          btnText1="Home"
          nav2="/blog"
          btnText2="Blog"
          nav3="/aboutme"
          btnText3="Author"
          nav4="/contactme"
          btnText4="Contact"
        />

        <h1 className='AboutMe-title'>My Solo Projects</h1>

        {/* <div className='Portfolio-thisWebsite'/> */}

        <div className='Portfolio-projects'>

          <Link className='Portfolio-project__btnQuiz' to="/portfolio/quiz"></Link>
          <Link className='Portfolio-project__btnMenu' to="/portfolio/menu"></Link>
          <Link className='Portfolio-project__btnNew' to="/portfolio/new"></Link>

        </div>

      </main>
    </div>
  );
}

export default PortfolioFront;