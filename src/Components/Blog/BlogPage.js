import '../Home/home.css'
import React from 'react'
import MainNav from '../Home/MainNav';
import './blog.css'

export default function BlogPage() {



  return (
    <div className='Home-whole'>
      <div className='Blog-container'>
        <MainNav
          nav1="/"
          btnText1="Home"
          nav2="/portfolio"
          btnText2="Portfolio"
          nav3="/aboutme"
          btnText3="Author"
          nav4="/contactme"
          btnText4="Contact"
        />

        <h1 className='AboutMe-title'>Posts</h1>

        <div className='Blog-elements'>
        </div>


        <a href='/' alt='go back' />
      </div>
    </div>
  );
}

