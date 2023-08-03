import { useEffect, useState } from 'react';

import background from '../assest/background.svg';

import '../css/MainContent.css';


export const SectionOne = () => {
  
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = background;
    image.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div
      className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7 rounded-xl w-full"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '550px',
        borderRadius: '20px'
      }}
    >
      {
        imageLoaded && (
          <div 
            className="col-span-1 md:col-span-2 lg:col-span-3 p-8 xl:pr-14 sm:pr-4">
            <p 
              className="w-full md:w-80 sm:w-56 text-5xl font-extrabold color-text mt-14">
              اختار يلي
              <span 
                className="color-span">
                بخلصك 
              </span>
              من مره وحده!
            </p>

            <p 
              className=" w-full md:w-80 sm:w-56 sm:mt-7 text-2xl text-content">
              ما تشيل هم كلمنا بنساعدك<br />
              احجز خدمة مضمونة بكبسة زر
            </p>

            <button
              type="button"
              className="text-xl bg-white text-black sm:mt-20 px-6 py-2 rounded-full">
              تواصل معنا
            </button>
          </div>
        )
      }
    </div>
  )
}