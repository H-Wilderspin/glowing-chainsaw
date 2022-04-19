import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {

    return (
        <div className={`${props.thisAppName}-header`}>

            <Link className={`${props.thisAppName}-logo`} to={`${props.navigateToEndpoint}`}>{props.thisAppLogoText}</Link>

            <div className={`${props.thisAppName}-btns`}>
                <button className={`${props.thisAppName}-btn`} onClick={props.appBtn1Function}>{props.appBtn1Name}</button>
                <button className={`${props.thisAppName}-btn`} onClick={props.appBtn2Function}>{props.appBtn2Name}</button>
                <button className={`${props.thisAppName}-btn`} onClick={props.appBtn3Function}>{props.appBtn3Name}</button>
            </div>

            <Link className={`${props.thisAppName}-back`} to="/portfolio">Return to Portfolio</Link>

        </div>
    );
}
