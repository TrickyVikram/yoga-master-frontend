import React from 'react';
import image1 from "../../../assets/gallary/image1.png";
import image2 from "../../../assets/gallary/image2.png";


const Gallary = () => {
  return (
    <div className="md:w-[80%] mx-auto my-28">
      {/* Section Title */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-center">Our Gallery</h1>
      </div>
      {/* Image Container */}
      <div className='image_Container border border-black-500'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <div className="mb-4 md:mb-0">
            <img src={image1} alt="Gallery Image 1" className="md:h-[770px]  object-cover w-full mx-auto rounded-sm border border-black" />
          </div>
          {/* Remaining Images - 3 Grid Layout */}
          <div className="grid grid-cols-2 gap-4 col-span-2">
            <img src={image2} alt="Gallery Image 2" className="w-full h-auto object-cover rounded-sm border border-black" />
            <img src={image2} alt="Gallery Image 3" className="w-full h-auto object-cover rounded-sm border border-black" />
            <img src={image2} alt="Gallery Image 4" className="w-full h-auto object-cover rounded-sm border border-black" />
            <img src={image2} alt="Gallery Image 5" className="w-full h-auto object-cover rounded-sm border border-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
