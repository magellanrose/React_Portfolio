

function Contact() {
  return (
    <>
      <h1 className="text-center">Contact Me</h1>

      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="60680f30-c451-4c5a-9e6d-feb3b0e35922"></input>

        <input name= "name" type="text" placeholder="Enter your full name" />
        <input name="email" type="email" placeholder="Enter your email address" />
        <textarea name="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
        <input type="hidden" name="redirect" value="https://65df4b2c6fd2011e7134315f--heroic-peony-41c18f.netlify.app/"></input>
        <button>Send</button>
      </form>
    </>

  )
}


export default Contact