import React from 'react';
// import NickisImages from './NickisImages';
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
// import ProjectForm from './ProjectForm';



function Nicki({user}) {

  return (
    <div>
      {/* {display} */}
      <h2>Digital Media Agency</h2>
      <p>Under Construction</p>
      <br/>
      <br/>
      {/* <ProjectForm user={user}/> */}
      <br/>
      <br/>
      {/* <NickisImages /> */}
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
