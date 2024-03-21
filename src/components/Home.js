import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom';
import { Icon, InlineIcon } from '@iconify/react';
import cubeOutline from '@iconify-icons/mdi/cube-outline';



const Home = () => {

    return (
        <Fragment>
        
        <div className='home'>
            <section>
             <div>
                 <span><Icon icon={cubeOutline} width='130' height='130' color='orange' /></span>
             </div>
             <h1>Quiz App</h1>
             <div className='button-container'>
                 <Link  to='/play'  className='play-button'>Joaca</Link>
             </div>
             <div className='button-container-two'>
                 <Link to='/about' className='play-button auth'>Despre</Link>
                 <Link to='/instructions'  className='play-button auth' >Instructiuni</Link>
             </div>
             </section>
        </div>
        
        </Fragment>
    )
}

export default Home
