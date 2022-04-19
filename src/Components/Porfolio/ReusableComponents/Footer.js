import React from 'react'
import figma from './icons/Figma.png'
import gitHubLogo from './icons/GitHub.png'

export default function Footer(props) {

  const [isSpin, setSpin] = React.useState(false)

  const spin = () => {
    setSpin(true)
  }

  const style = {
    transform: isSpin ? `rotate(800deg)` : `rotate(0deg)`,
    transition: `transform 2s`
  }

  React.useEffect(() => {
    if (!isSpin) {
      return;
    }
    const timeoutID = window.setTimeout(() => {
      setSpin(false)
    }, 1000)
    return () => {
      window.clearTimeout(timeoutID)
    }
  }, [isSpin, 1000])


  return (
    <div className={`${props.thisAppName}-footer`}>

      <a
        className={`${props.thisAppName}-footer-btn`}
        href={`${props.thisAppDesign}`}>
        <img
          className={`${props.thisAppName}-footer-logo`}
          src={figma}
          alt="go to figma design file" />
      </a>


      <a
        className={`${props.thisAppName}-footer-btn`}
        href={`${props.thisAppGitRepository}`}>
        <img
          className={`${props.thisAppName}-footer-logo`}
          src={gitHubLogo}
          onMouseEnter={() => spin()}
          style={style}
          alt="Go to github" />
      </a>
    </div>
  );
}
        // onClick={props.thisAppVideoUrl}>
    // onClick={props.thisAppGitRepository}>