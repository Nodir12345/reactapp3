import React from 'react'
import './messege.css'
export const Masege = () => {
  return (
    <div><div class="container1">
    <div class="contact-box">
      <div class="left"></div>
      <div class="right">
        <h2>Contact Us</h2>
        <input type="text" class="field" placeholder="Your Name"/>
        <input type="text" class="field" placeholder="Your Email"/>
        <input type="text" class="field" placeholder="Phone"/>
        <textarea placeholder="Message" class="field"></textarea>
        <button class="btn">Send</button>
      </div>
    </div>
  </div></div>
  )
}
