import { Link } from 'react-router-dom'
import coverImage1 from '../../../src/assets/screenshot.png';

function Project() {
  return (
    <>
      <div>
        <div>
          <h1>Always Sunny App</h1>
          <Link to='https://magellanrose.github.io/Always_Sunny_Project/'>Always Sunny deployed link</Link>
          <Link to='https://github.com/magellanrose/Always_Sunny_Project'>Github Repo</Link>
        <img src={coverImage1} />
          
        </div>
      </div>
    </>
  )
}
// An image of the deployed application (either a short animated GIF or screenshot)
// The title of the project

// A link to the deployed application

// A link to the corresponding GitHub repository








export default Project