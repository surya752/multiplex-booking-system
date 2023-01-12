import React from 'react';
import Footer from '../footer/footer';
import 'react-slideshow-image/dist/styles.css'

import { Slide } from 'react-slideshow-image';

const slideImages = [
  'Img/RRR.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

const Home =() =>{
    return(
        <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div >
            <img src="https://assets.thehansindia.com/h-upload/2022/03/26/1283652-whatsapp-image-2022-03-14-at-130148-9.webp" height="449px" width="1600px"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
              <img src="https://static.toiimg.com/photo/90518208.jpeg" height="449px" width="1600px"/>
            </div>
          </div>
          <div className="each-slide">
            <div >
              <img src="https://img.fresherslive.com/assets-images/news/about/origin/2020/06/08/telugu-movies-download.jpg" height="449px" width="1600px"/>
            </div>
          </div>
        </Slide>
      <Footer></Footer>
      </div>
           
        
    )
};
export default Home;