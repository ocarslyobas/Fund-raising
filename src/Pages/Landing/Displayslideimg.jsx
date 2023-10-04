import React from 'react';
import './landing.css';
import Carousel from 'react-bootstrap/Carousel';
import Buttonmodal from '../Landing/Buttonmodal';
import { aboutpic, aboutpic2, homepic } from '../../Assets/photos/assets';


const displayslideimg = ()=>{

    return(
      <div className='carouselslides'>
          <Carousel id="slideimg-container">
            <Carousel.Item interval={3000}>
              <img
                className="slideimg"
                src={homepic}
                alt="First slide"
              />
              <Carousel.Caption>
                <Buttonmodal/>
                <h3 className='hlara'>Donate to save LARA</h3>
                <p className='plara'>Lara is a 10 years old kid from senegal that was diagnosed of having
                   acute renal failure.
                   He needs the sum of <span className='laradonationamount'>2 million naira</span> to correct the condition.
                   Click the donate button to help save Lara.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000}>
              <img
                className="slideimg"
                src={aboutpic}
                alt="Second slide"
                
              />
              <Carousel.Caption>
                <Buttonmodal/>
                <h3 className='hlara'>Donate to save LARA</h3>
                <p className='plara'>Lara is a 10 years old kid from senegal that was diagnosed of having
                   acute renal failure.
                   He needs the sum of <span className='laradonationamount'>2 million naira</span> to correct the condition.
                   Click the donate button to help save Lara.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item interval={3000}>
              <img
                className="slideimg"
                src={aboutpic2}
                alt="Third slide"
              />
              <Carousel.Caption>
                <Buttonmodal/>
                <h3 className='hlara'>Donate to save LARA</h3>
                <p className='plara'>
                  Lara is a 10 years old kid from senegal that was diagnosed of having
                  acute renal failure.
                  He needs the sum of <span className='laradonationamount'>2 million naira</span> to correct the condition.
                  Click the donate button to help save Lara.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </div>
      
    )

}
export default displayslideimg;