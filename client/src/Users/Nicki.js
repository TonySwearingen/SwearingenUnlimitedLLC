import React from 'react';
import NickisImages from './NickisImages';
import apophis from '../Assets/apophis.jpg';
import Blue from '../Assets/Blue.jpg';
import DMRB from '../Assets/DMRB.jpg';
import Ember from '../Assets/Ember.jpg';
import Ember2 from '../Assets/Ember2.jpg';
import Envy from '../Assets/Envy.jpg';
import Valor from '../Assets/Valor.jpg';
import Zenith from '../Assets/Zenith.jpg';
import Zephyr from '../Assets/Zephyr.jpg';
import Zephyr2 from '../Assets/Zephyr2.jpg';



function Nicki() {

  // const [nicki, setNicki] = useState([]);
  // const [nickisProjects, setNickisProjects] = useState('');
  // const [imagePath, setImagePath] = useState('');

  
  // const displayProjects = [
  //   nickisProjects.name,
  //   nickisProjects.images
  // ]
  

  // const display = [
  //   nicki.name
  // ]

  //useEffects

  // useEffect(() => { 
  //   fetch('/users/2')
  //     .then((res) => res.json())
  //     .then((data) => setNicki(data))
  // }, [])

  // useEffect(() => { 
  //   fetch('/projects/5')
  //     .then((res) => res.json())
  //     .then((data) => setNickisProjects(data))
  // }, [])
  

  // useEffect(() => {
  //   fetch('/images/1')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setImagePath(data.image_url.url)
  //   })
  // }, [])

  // Functions
  

  return (
    <div>
      {/* {display} */}
      <h2>Digital Media Agency</h2>
      <p>Under Construction</p>
      <br/>
      <br/>
      {/* {displayProjects} */}
      <br/>
      <br/>
      <NickisImages />
      <br/>
      <br/>
      <h2>Nicki's Reptile Collection</h2>
      <img className='snakes' src={apophis} alt='nothing' />
      <img className='snakes' src={Blue} alt='nothing' />
      <img className='snakes' src={DMRB} alt='nothing' />
      <img className='snakes' src={Ember} alt='nothing' />
      <img className='snakes' src={Ember2} alt='nothing' />
      <img className='snakes' src={Envy} alt='nothing' />
      <img className='snakes' src={Valor} alt='nothing' />
      <img className='snakes' src={Zenith} alt='nothing' />
      <img className='snakes' src={Zephyr} alt='nothing' />
      <img className='snakes' src={Zephyr2} alt='nothing' />
    </div>
  );
}

export default Nicki;
