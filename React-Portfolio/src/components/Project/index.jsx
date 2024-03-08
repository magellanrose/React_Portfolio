import { Link } from 'react-router-dom'
import coverImage1 from '../../../src/assets/screenshot.png';
import coverImage2 from '../../../../images/freelances.png';
import coverImage3 from '../../../../images/recipe.png';

// A single project component
function Project() {
  return (
    <>
    {/* div tag that contains an image of the deployed app, the title of the project, a link to the deployed app, and a link to the corresponding GitHub repo */}
      <div>
        <h1>Projects</h1>
        <div>
          <Link to='https://magellanrose.github.io/Always_Sunny_Project/'>Always Sunny deployed link</Link>
          <Link to='https://github.com/magellanrose/Always_Sunny_Project'>Github Repo</Link>
          <img src={coverImage1} className='imageHandler' />
        </div> <div>
          <Link to='https://magellanrose.github.io/Always_Sunny_Project/'>Always Sunny deployed link</Link>
          <Link to='https://github.com/magellanrose/Always_Sunny_Project'>Github Repo</Link>
          <img src={coverImage2} className='imageHandler' />
        </div> <div>
          <Link to='https://magellanrose.github.io/Always_Sunny_Project/'>Always Sunny deployed link</Link>
          <Link to='https://github.com/magellanrose/Always_Sunny_Project'>Github Repo</Link>
          <img src={coverImage3} className='imageHandler' />
        </div>
      </div>
    </>
  )
}








export default Project