import React from "react"

import logoapp from './logoapp.png';
import book1 from './book1.jpg';
import book2 from './book2.jpg';
import book3 from './book3.png';
import book4 from './book4.jpg';
import background from './background.jpg';

const book1_details = {
  author: 'Oprah Winfrey',
  imageUrl: book1,
};
const book3_details = {
  author: 'Diana Panton',
  imageUrl: book2,
};
const book2_details = {
  author: 'Paulo Coelho',
  imageUrl: book3,
};
const book4_details = {
  author: 'Caroline',
  imageUrl: book4,
};
const book_css = {
  imageSize: 100,
};

function Home() {
 

  return (
    <div className="App">
    <header className="app-bg">
  
   
  <img className="cover"
      src={background}
      alt={'Slideshow'}
    />
  
      <div className="container">
<div className="left-container-item">
    <img
      className="avatar"
      src={book1_details.imageUrl}
      alt={'Photo of ' + book1_details.author}
      style={{
        width: book_css.imageSize,
        height: book_css.imageSize
      }}
    />
    <h3>{book1_details.author}</h3>
  <div className="rating">
  <input type="radio" name="rating" id="rating-1" value="1" />
  <label htmlFor="rating-1">★</label>
  <input type="radio" name="rating" id="rating-2" value="2" />
  <label htmlFor="rating-2">★</label>
  <input type="radio" name="rating" id="rating-3" value="3" />
  <label htmlFor="rating-3">★</label>
  <input type="radio" name="rating" id="rating-4" value="4" />
  <label htmlFor="rating-4">★</label>
  <input type="radio" name="rating" id="rating-5" value="5" />
  <label htmlFor="rating-5">★</label>
  </div>
  </div>
  <div className="right-container-item">
   <img
      className="avatar"
      src={book2_details.imageUrl}
      alt={'Photo of ' + book2_details.author}
      style={{
        width: book_css.imageSize,
        height: book_css.imageSize
      }}
    />
    <h3>{book2_details.author}</h3>
  <div className="rating">
  <input type="radio" name="rating" id="rating-1" value="1" />
  <label htmlFor="rating-1">★</label>
  <input type="radio" name="rating" id="rating-2" value="2" />
  <label htmlFor="rating-2">★</label>
  <input type="radio" name="rating" id="rating-3" value="3" />
  <label htmlFor="rating-3">★</label>
  <input type="radio" name="rating" id="rating-4" value="4" />
  <label htmlFor="rating-4">★</label>
  <input type="radio" name="rating" id="rating-5" value="5" />
  <label htmlFor="rating-5">★</label>
  </div>
  </div>
  <div className="right-container-item">
   <img
      className="avatar"
      src={book4_details.imageUrl}
      alt={'Photo of ' + book4_details.author}
      style={{
        width: book_css.imageSize,
        height: book_css.imageSize
      }}
    />
    <h3>{book4_details.author}</h3>
  <div className="rating">
  <input type="radio" name="rating" id="rating-1" value="1" />
  <label htmlFor="rating-1">★</label>
  <input type="radio" name="rating" id="rating-2" value="2" />
  <label htmlFor="rating-2">★</label>
  <input type="radio" name="rating" id="rating-3" value="3" />
  <label htmlFor="rating-3">★</label>
  <input type="radio" name="rating" id="rating-4" value="4" />
  <label htmlFor="rating-4">★</label>
  <input type="radio" name="rating" id="rating-5" value="5" />
  <label htmlFor="rating-5">★</label>
  </div>
  </div>
  <div className="right-container-item">
   <img
      className="avatar"
      src={book3_details.imageUrl}
      alt={'Photo of ' + book3_details.author}
      style={{
        width: book_css.imageSize,
        height: book_css.imageSize
      }}
    />
    <h3>{book3_details.author}</h3>
  <div className="rating">
  <input type="radio" name="rating" id="rating-1" value="1" />
  <label htmlFor="rating-1">★</label>
  <input type="radio" name="rating" id="rating-2" value="2" />
  <label htmlFor="rating-2">★</label>
  <input type="radio" name="rating" id="rating-3" value="3" />
  <label htmlFor="rating-3">★</label>
  <input type="radio" name="rating" id="rating-4" value="4" />
  <label htmlFor="rating-4">★</label>
  <input type="radio" name="rating" id="rating-5" value="5" />
  <label htmlFor="rating-5">★</label>
  </div>
  </div>
  </div>
  <div className="container">
<div className="left-container-item">
    <img
      className="avatar"
      src={book1_details.imageUrl}
      alt={'Photo of ' + book1_details.author}
      style={{
        width: book_css.imageSize,
        height: book_css.imageSize
      }}
    />
    <h3>{book1_details.author}</h3>
  <div className="rating">
  <input type="radio" name="rating" id="rating-1" value="1" />
  <label htmlFor="rating-1">★</label>
  <input type="radio" name="rating" id="rating-2" value="2" />
  <label htmlFor="rating-2">★</label>
  <input type="radio" name="rating" id="rating-3" value="3" />
  <label htmlFor="rating-3">★</label>
  <input type="radio" name="rating" id="rating-4" value="4" />
  <label htmlFor="rating-4">★</label>
  <input type="radio" name="rating" id="rating-5" value="5" />
  <label htmlFor="rating-5">★</label>
  </div>
  </div>
  <div className="right-container-item">
   <img
      className="avatar"
      src={book2_details.imageUrl}
      alt={'Photo of ' + book2_details.author}
      style={{
        width: book_css.imageSize,
        height: book_css.imageSize
      }}
    />
    <h3>{book2_details.author}</h3>
  <div className="rating">
  <input type="radio" name="rating" id="rating-1" value="1" />
  <label htmlFor="rating-1">★</label>
  <input type="radio" name="rating" id="rating-2" value="2" />
  <label htmlFor="rating-2">★</label>
  <input type="radio" name="rating" id="rating-3" value="3" />
  <label htmlFor="rating-3">★</label>
  <input type="radio" name="rating" id="rating-4" value="4" />
  <label htmlFor="rating-4">★</label>
  <input type="radio" name="rating" id="rating-5" value="5" />
  <label htmlFor="rating-5">★</label>
  </div>
  </div>
  <div className="right-container-item">
   <img
      className="avatar"
      src={book4_details.imageUrl}
      alt={'Photo of ' + book4_details.author}
      style={{
        width: book_css.imageSize,
        height: book_css.imageSize
      }}
    />
    <h3>{book4_details.author}</h3>
  <div className="rating">
  <input type="radio" name="rating" id="rating-1" value="1" />
  <label htmlFor="rating-1">★</label>
  <input type="radio" name="rating" id="rating-2" value="2" />
  <label htmlFor="rating-2">★</label>
  <input type="radio" name="rating" id="rating-3" value="3" />
  <label htmlFor="rating-3">★</label>
  <input type="radio" name="rating" id="rating-4" value="4" />
  <label htmlFor="rating-4">★</label>
  <input type="radio" name="rating" id="rating-5" value="5" />
  <label htmlFor="rating-5">★</label>
  </div>
  </div>
  <div className="right-container-item">
   <img
      className="avatar"
      src={book3_details.imageUrl}
      alt={'Photo of ' + book3_details.author}
      style={{
        width: book_css.imageSize,
        height: book_css.imageSize
      }}
    />
    <h3>{book3_details.author}</h3>
  <div className="rating">
  <input type="radio" name="rating" id="rating-1" value="1" />
  <label htmlFor="rating-1">★</label>
  <input type="radio" name="rating" id="rating-2" value="2" />
  <label htmlFor="rating-2">★</label>
  <input type="radio" name="rating" id="rating-3" value="3" />
  <label htmlFor="rating-3">★</label>
  <input type="radio" name="rating" id="rating-4" value="4" />
  <label htmlFor="rating-4">★</label>
  <input type="radio" name="rating" id="rating-5" value="5" />
  <label htmlFor="rating-5">★</label>
  </div>
  </div>
  </div>
  
    </header>
  </div>
  )
}

export default Home;
