import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
         <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
         <img className='w-full md:max-w-[450px]' src={assets.aboutau} alt="" />
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Welcome to Auraa, your destination for premium anti-tarnish jewelry that blends elegance, quality, and affordability. Founded with a vision to redefine everyday luxury, Auraa offers beautifully crafted pieces that make you feel confident and radiant—without compromising your budget.
Each piece at Auraa is carefully designed to stand out and last, using high-grade materials and a special anti-tarnish coating to keep your shine alive.</p>
           <p> Whether you're dressing up for a celebration or adding charm to your daily style, Auraa is here to be a part of your story.
We believe that jewelry isn’t just an accessory—it’s an expression of who you are. Join the Auraa community and discover pieces that speak your vibe</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>At Auraa, our mission is to make premium, anti-tarnish jewelry accessible to everyone. We are committed to delivering high-quality, elegant pieces that not only elevate your style but also stand the test of time—without breaking the bank. Through thoughtful design, exceptional craftsmanship, and customer-first service, we aim to inspire confidence and celebrate individuality in every wearer.
We don’t just sell jewelry — we create timeless statements for modern lives.</p>
         </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Auraa, we combine premium quality with affordability, offering anti-tarnish jewelry that’s stylish, durable, and elegant. Our pieces are thoughtfully crafted to elevate your everyday look with lasting shine.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
         <b>Perfect for Gifting:</b>
         <p className='text-gray-600'>Every Auraa piece comes in premium packaging, making it ideal for birthdays, anniversaries, and surprises.</p>
        </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
         <b>Young & Passionate Brand:</b>
         <p className='text-gray-600'>Built by students with a vision to offer premium jewelry that speaks elegance and ambition.</p>
        </div>

      </div>

      <NewsletterBox />

    </div>
  )
}

export default About

