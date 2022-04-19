import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNav(props) {
    return (
        <nav className='Home-list'>
            <Link className='Home-nav__btn' to={`${props.nav1}`}>{props.btnText1}</Link>
            <Link className='Home-nav__btn' to={`${props.nav2}`}>{props.btnText2}</Link>
            <Link className='Home-nav__btn' to={`${props.nav3}`}>{props.btnText3}</Link>
            <Link className='Home-nav__btn' to={`${props.nav4}`}>{props.btnText4}</Link>
        </nav>
    )
}