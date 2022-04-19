import '../Home/home.css'
import React from 'react'
import MainNav from '../Home/MainNav';
import './contact.css'

export default function ContactMeForm() {
  const [formData, setFormData] = React.useState(
    { name: "", message: "" }
  )

  function handleChange(e) {
    setFormData(prevData => {
      return {
        ...prevData,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // send data to mongo and retrieve all to render to board
    // clear state/inputs
    console.log(formData)
  }


  return (
    <div className='Home-whole'>
      <div className='Contact-container'>
        <MainNav
          nav1="/"
          btnText1="Home"
          nav2="/portfolio"
          btnText2="Portfolio"
          nav3="/blog"
          btnText3="Blog"
          nav4="/aboutme"
          btnText4="Author"
        />

        <h2 className='AboutMe-title'>Message board</h2>
        <p>Not yet implemented</p>

        <form onSubmit={handleSubmit} className="ContactMe-FormElement">
          <input
            className="ContactMe-FormItem"
            type="text"
            name="name"
            placeholder='Your name'
            onChange={handleChange}
            value={formData.firstname}
          />
          <textarea
            className="ContactMe-FormItem ContactMe-TextArea"
            name='comments'
            placeholder='Be Nice ^_^; (or at least not too mean) '
            onChange={handleChange}
            value={formData.message}
          />
          <button
            className="ContactMe-FormItem"
          >Post to board (Disabled)</button>
          <p>Styled text element</p>
        </form>

      </div>
    </div>
  );
}
