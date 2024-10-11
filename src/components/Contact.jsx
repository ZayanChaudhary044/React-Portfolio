import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'contact_service', // Replace with your EmailJS service ID
      'contact_form', // Replace with your EmailJS template ID
      e.target,           // Form element
      'GWVIs2zyq1a-d3JXY'    // Replace with your EmailJS public key
    ).then((result) => {
      console.log('SUCCESS!', result.text);
      setSuccess(true);   // Set success state
    }, (error) => {
      console.log('FAILED...', error.text);
      setError(true);     // Set error state
    });

    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  
  return (
    <div className='bg-black text-white pt-32' id='contact'>
            <div className='container mx-auto px-10 md:px-16 lg:px-24'>
                <h2 className='text-3xl font-bold text-center mb-12'>Contact Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12 ">
          <div className="flex-1 pl-4 pb-10">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-600 to to-red-700 mb-6'>Enquiries</h3>
            <p>Feel free to pop me a message for collaborations</p>
            <div className='mb-4 mt-8 flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                    </svg>
                <a href="mailto:zayanchaudhary04@gmail.com">
                    :{" "} zayanchaudhary04@gmail.com
                </a>
            </div>
            <div className='mb-4 flex'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                    <span>:{" "}+44 7928 255 803</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form id='contact-form' className='space-y-4 bg-gray-800 rounded-lg p-4 mb-10' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className='block mb-2'>Name</label>
                    <input type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-yellow-400'
                    placeholder='Enter You Name'
                    required />
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input type="email"
                    name = "email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-yellow-400'
                    placeholder='Enter You Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" 
                    name = "message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-yellow-400'
                    rows="5"
                    placeholder='Enter You Message'
                    />
                </div>
                <button type="submit" className='bg-gradient-to-r from-yellow-600 to-red-700  text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
            {success && <p className='text-green-500 ml-44'>Message sent successfully!</p>}
            {error && <p className='text-red-500'>Failed to send the message. Try again!</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact