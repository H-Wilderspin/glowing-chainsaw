import '../Home/home.css'
import '../Author/author.css'
import React from 'react'
import MainNav from '../Home/MainNav';
import me from '../Author/me.jpg'

export default function AuthorPage() {
  const good = (
    { backgroundColor: "rgba(0, 255, 0, 0.08)", color: "rgba(0,240,0)" }
  )
  const ok = (
    { backgroundColor: "rgba(200, 299, 0, 0.08)", color: "rgba(200, 200, 0)" }
  )
  const needsWork = (
    { backgroundColor: "rgba(200, 0, 0, 0.08)", color: "rgba(250, 0, 0)" }
  )

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
    <div className='Home-whole'>
      <div className='Author-container'>
        <MainNav
          nav1="/"
          btnText1="Home"
          nav2="/portfolio"
          btnText2="Portfolio"
          nav3="/blog"
          btnText3="Blog"
          nav4="/contactme"
          btnText4="Contact"
        />
        <h1 className='AboutMe-title'>About me</h1>

        <div className='AboutMe-gridContainer'>
          <div className='AboutMe-Status'>

            <img src={me} className='AboutMe-ProfilePic' alt="Hazel Smiling" />
            <div className='AboutMe-NameFlexbox'>
              <h2>Hazel Wilderspin</h2>
              <h3>Nottingham, UK</h3>
            </div>


            <hr />
            <p>Currently engaged in full-time study and not seeking employment</p>
            <p>Willing to reconsider on completion of the 2022 Frontend Developer roadmap (seen right) but add me on socials !</p>

            <hr />
            <p>Mentor: Oliver Hathaway - BJSS Tech lead</p>
            <p>React Instructor: Bob Ziroll - Scrimba</p>
            <p>CSS Instructor: Kevin Powel - Scrimba</p>
            <hr />
          </div>

          <div className='AboutMe-Socials'>
            <a className='AboutMe-SocialsGIT' href='https://github.com/H-Wilderspin' onMouseEnter={() => spin()} style={style} alt="git hub icon" />
            <a className='AboutMe-SocialsLI' href='https://www.linkedin.com/in/hazel-wilderspin-2aa418153/' alt="Linked in icon" />
            <a className='AboutMe-SocialsFB' href='https://www.facebook.com/alisha.wilderspin' alt="facebook icon" />
            <a className='AboutMe-SocialsYT' href='#' alt="play video icon" />
          </div>

          <div className='AboutMe-ProgressChart'>
            <h2>My Coding Roadmap</h2>

            <p>HTML</p>
            <div className='AboutMe-RoadmapBlock'>
              <s style={good}> Semantic </s>
              <s style={good}> Forms </s>
              <s style={ok}> Validations </s>
              <s style={good}> Conventions </s>
              <s style={good}> Accessibility</s>
              <s style={ok}> SEO</s>
            </div>

            <p>CSS</p>
            <div className='AboutMe-RoadmapBlock'>
              <s style={good}> Layouts </s>
              <s style={good}> Styling </s>
              <s style={good}> Responsive </s>
              <s style={good}> Dynamic </s>
              <s style={good}> Media queries </s>
              <s style={good}> Animations </s>
            </div>

            <p>Javascript</p>
            <div className='AboutMe-RoadmapBlock'>
              <s style={good}> Syntax </s>
              <s style={good}> DOM manipulation </s>
              <s style={good}> API calls </s>
              <s style={good}> ES6 </s>
              <s style={good}> Hoisting </s>
              <s style={ok}> Prototype </s>
              <s style={good}> Strict </s>
              <s style={good}> Shadow DOM </s>
            </div>

            <p>Version control / Repo</p>
            <div className='AboutMe-RoadmapBlock'>
              <s style={good}> Git </s>
              <s style={good}> GitHub </s>
            </div>

            <p>Web Security</p>
            <div className='AboutMe-RoadmapBlock'>
              <s style={needsWork}> HTTPS </s>
              <s style={needsWork}> Content security </s>
              <s style={ok}> CORS </s>
              <s style={needsWork}> OWASP </s>
            </div>

            <p>Build tools / Pick a Framework</p>
            <div className='AboutMe-RoadmapBlock'>
              <s style={good}> Task runners (npm) </s>
              <s style={ok}> Module bundlers </s>
              <s style={ok}> Linters </s>
              <s style={ok}> Formatters </s>
              <s style={good}> React </s>
              <s style={ok}> Redux /MobX </s>
            </div>


            <p>Modern CSS / Web Components</p>
            <div className='AboutMe-RoadmapBlock'>
              <s style={good}> Styled Components </s>
              <s style={needsWork}> CSS modules </s>
              <s style={good}> Styled JSX </s>
              <s style={ok}> HTML Templates </s>
              <s style={needsWork}> Custom Elements </s>
              <s style={needsWork}> Shadow DOM</s>
            </div>


            <p>Testing and Quality Control</p>
            <div className='AboutMe-RoadmapBlock'>
              <s style={needsWork}> Unit tests </s>
              <s style={needsWork}> Integration  </s>
              <s style={needsWork}> Functional </s>
              <s style={needsWork}> Typescript </s>
            </div>

            <p>SSG / SSR</p>
            <div className='AboutMe-RoadmapBlock'>
              <s style={good}> React.js </s>
              <s style={needsWork}> Next.js </s>
              <s style={needsWork}> Angular / Vue </s>
              <s style={needsWork}> GatsbyJS </s>
            </div>

            <p>Fancy stuff</p>
            <div className='AboutMe-RoadmapBlock'>
              <s style={needsWork}> Mobile apps </s>
              <s style={needsWork}> Next.js </s>
              <s style={needsWork}> Angular / Vue </s>
              <s style={needsWork}> Desktop Apps </s>
              <s style={needsWork}> Electron </s>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
