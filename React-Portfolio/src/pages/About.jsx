import coverImage1 from '../assets/IMG_2974.jpg';

// About Me section
function About(){
  return(
    <>
       <h1>About Me</h1>
    <p> Hello world! I'm Nicholas Vacca, a passionate and aspiring junior developer currently enrolled in a rigorous coding bootcamp program. My journey into the world of coding is driven by a genuine love for problem-solving and a desire to create meaningful and impactful solutions through technology.</p>
    <img src={coverImage1} className='imageHandler' />

    </>
   
   )
}


export default About