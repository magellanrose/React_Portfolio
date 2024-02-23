import { Link } from 'react-router-dom'
import coverImage1 from '../../../src/assets/screenshot.png';

function Project() {
  return (
    <>
      <div>
          <h1>Projects</h1>
        <div>
          <Link to='https://magellanrose.github.io/Always_Sunny_Project/'>Always Sunny deployed link</Link>
          <Link to='https://github.com/magellanrose/Always_Sunny_Project'>Github Repo</Link>
        <img src={coverImage1} className='imageHandler' />
          
        </div>
      </div>
    </>
  )
}








export default Project