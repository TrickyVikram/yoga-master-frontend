import React from 'react';

const ClassCard = ({ className, image, availableSeats, price, totalStudents }) => {
  return (



    <div className="flex flex-col  p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105   "
   >
      {/* Image */}
      <img loading="lazy" className="h-48 w-full object-cover" src={image} alt={className} style={{ opacity: 1 }} />
      
      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 dark:text-white" style={{ opacity: 1 }}>
          {className}
        </h2>
        <p className="text-gray-600 mb-2" style={{ opacity: 1 }}>
          Available Seats: {availableSeats}
        </p>
        <p className="text-gray-600 mb-2" style={{ opacity: 1 }}>
          Price: ${price}
        </p>
        <p className="text-gray-600" style={{ opacity: 1 }}>
          Total Students: {totalStudents}
        </p>
        <div className="text-center mt-2">
          <button className="px-3 w-full py-1 bg-secondary rounded-xl text-white font-bold mt-2">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

const PopularClasses = () => {
  const classData = [
    {
        name: "Progressive Power Flow",
        image: "https://i.ibb.co/1q6TT6j/women-on-yoga-2021-08-26-15-44-27-utc.jpg",
        availableSeats: 268,
        price: "70",
        videoLink: "https://youtu.be/UCgvZ4VkLMQ",
        description: "Aliq is notm hendr erit a augue insu image pellen tes.",
        instructorName: "Watson T.",
        instructorEmail: "watson@taylor.com",
        totalEnrolled: 2,
      },
      {
        name: "Make a Peaceful Living",
        image: "https://i.ibb.co/xqCFZZS/yoga-relax-2021-09-24-03-25-39-utc.jpg",
        availableSeats: 782,
        price: "50",
        videoLink: "https://youtu.be/UCgvZ4VkLMQ",
        description: "A calming course to bring peace to your life.",
        instructorName: "Sara L.",
        instructorEmail: "sara@peaceful.com",
        totalEnrolled: 8,
      },
      {
        name: "Exercise Hacks for Women",
        image: "https://i.ibb.co/ygY8LvM/pretty-yoga-instructor-helping-her-student-in-a-yo-2021-08-26-20-17-29-utc.jpg",
        availableSeats: 515,
        price: "50",
        videoLink: "https://youtu.be/UCgvZ4VkLMQ",
        description: "Effective workout routines designed for women.",
        instructorName: "Emma D.",
        instructorEmail: "emma@fitness.com",
        totalEnrolled: 5,
      }
   
  ];

  return (
    <div className="md:w-[80%] mx-auto my-36">
    <h1 className="text-5xl font-bold text-center">
      Our <span className="text-secondary">Popular</span> Classes
    </h1>
    <div className="w-[40%] text-center mx-auto my-4">
      <p className="text-gray-500">
        Explore our Popular Classes. Here are some of the popular classes based on how many students enrolled.
      </p>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {classData.map((classItem, index) => (
        <ClassCard
          key={index}
          name={classItem.name}
          image={classItem.image}
          availableSeats={classItem.availableSeats}
          price={classItem.price}
          totalStudents={classItem.totalStudents}
        />
      ))}
    </div>


  </div>
  
  );
};

export default PopularClasses;
