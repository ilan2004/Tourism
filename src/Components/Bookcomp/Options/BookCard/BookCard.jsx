import React from 'react'
import './BookCard.css'
// import content from '../room1/hotel1.html'
const BookCard = ({ card_title,card_des,room_img,}) => {
  return (
    <div class="offer">
<div class="container">
  <div class="card">
    <img src={room_img} alt="" class="card__img"/> 

 <div class="card__content">
    <div class="card__data">
      <h1 class="card__title">{card_title}</h1>
      <a href="#"class="show">View</a>
      <p class="card__description">{card_des}</p>
      <a href="#" class="card__button">Show prices</a>
      <a href="/room1/hotel1.html" class="card__vr">View in VR</a>
    </div>
  </div>
</div>
</div>
</div>
  )
}
export default BookCard;
