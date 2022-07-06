import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Carouselitem from './Carousel_item';
const Carousel1 = () => {
    return ( <>
    
<Carousel
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={6000}
  centerMode={false}
  className=""
  containerClass="container-with-dots"
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
  
  <Carouselitem img={"https://cfx-wp-images.imgix.net/2017/11/DSC_0359.jpg?auto=compress%2Cformat&fit=crop&h=620&ixlib=php-3.3.0&w=930&wpsize=neve-blog&s=57befe97747f3f22a2e9af6ff5cfcc09"}/>
  <Carouselitem img={"https://images.unsplash.com/photo-1587750059638-e7e8c43b99fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&w=1000&q=80"}/>
  <Carouselitem img={"https://i.ytimg.com/vi/UcUpU87FVFI/maxresdefault.jpg"}/>
  <Carouselitem img={"https://d1e00ek4ebabms.cloudfront.net/production/4b0c56ef-0f1b-43ba-ad65-627cd8850bfb.jpg"}/>

</Carousel>
    
    
    </> );
}
 
export default Carousel1;