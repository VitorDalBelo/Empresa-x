
import logo from '../images/logoReact.png'
import banner from '../images/banner.jpg'
import naruto from '../images/paisagem.jpeg'


import React,{useState} from 'react';
export const Banner = (props)=>{
  let [open,setOpen] = useState(false)
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active bolinha" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="bolinha" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="bolinha" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={banner}class="d-block w-100 carouselimg" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={naruto}class="d-block w-100 carouselimg" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={logo} class="d-block w-100 carouselimg" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;