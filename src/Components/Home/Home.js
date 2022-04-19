import './home.css'
import React from 'react'
import MainNav from './MainNav'
import icons from './ToolIcons.png'

export default function Home() {
  return (
    <div className='Home-whole'>
      <div className='Home-container'>

        <MainNav
          nav1="/portfolio"
          btnText1="Portfolio"
          nav2="/blog"
          btnText2="Blog"
          nav3="/aboutme"
          btnText3="Author"
          nav4="/contactme"
          btnText4="Contact"
        />

        <h1 className='Home-h1'>Greetings! This website was crafted for you by Hazel Wilderspin in React 18</h1>

        <button className='Home-main__cta'>Take the guided tour</button>

        <div className='Home-toolList'>
          <img className='Home-icon__img' src={icons}></img>
        </div>
      </div>
    </div>
  );
}
