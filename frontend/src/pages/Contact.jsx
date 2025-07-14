import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'}text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
          <img className='w-full md:max-w-[480px]' src={assets.contact1} alt="" />
         <div className='flex flex-col justify-center items-start gap-4'>
  <p className='font-semibold text-xl text-gray-700'>Contact Us</p>

  <p className='text-gray-600'>
    📧 <span className='font-medium'>Email:</span> auraa.enquiry@gmail.com
  </p>

  <p className='text-gray-600'>
    📸 <span className='font-medium'>Instagram:</span> 
    <a href='https://instagram.com/auraastore0' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline ml-1'>
      @auraastore0
    </a>
  </p>

  <p className='text-gray-600'>
    💬 <span className='font-medium'>WhatsApp:</span> 
    <a href='https://wa.me/919958219402' target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline ml-1'>
      Chat with us
    </a>
  </p>

  <p className='text-sm text-gray-500 italic'>
    We usually respond within 24–48 hours. Thanks for your patience!
  </p>
</div>
      </div>

         <NewsletterBox/>
       
    </div>
  )
}

export default Contact

