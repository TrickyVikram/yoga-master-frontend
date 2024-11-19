

// const Classes = ({ classesData }) => { }



import React from 'react';

const Classes = () => {
  const classesData = [
    {
      id: '662c7741b220b8d4599f2f1d',
      image: 'https://i.ibb.co/864425K/yoga-practice-indoors-2021-08-30-02-28-57-utc.jpg',
      title: 'Exercise Hacks for Women',
      instructor: 'Marry Hun',
      availableSeats: 516,
      price: 50,
    },
    {
      id: '662c7741b220b8d4599f2f1c',
      image: 'https://i.ibb.co/L89HLkw/group-of-young-people-doing-yoga-on-a-yoga-mat-2021-09-02-14-56-30-utc.jpg',
      title: 'Exercise Hacks for Women',
      instructor: 'Ema Aliq',
      availableSeats: 516,
      price: 50,
    },
    {
      id: '662c7741b220b8d4599f2f1e',
      image: 'https://i.ibb.co/02jMrCN/Guided-Mindfulness-Meditations.jpg',
      title: 'Guided Mindfulness ',
      instructor: 'Your Assistant',
      availableSeats: 20,
      price: 10,
    },
    {
      id: '662c7741b220b8d4599f2f19',
      image: 'https://i.ibb.co/1q6TT6j/women-on-yoga-2021-08-26-15-44-27-utc.jpg',
      title: 'Progressive Power Flow',
      instructor: 'Watson T.',
      availableSeats: 781,
      price: 70,
    },
    {
      id: '662c7741b220b8d4599f2f1a',
      image: 'https://i.ibb.co/ygY8LvM/pretty-yoga-instructor-helping-her-student-in-a-yo-2021-08-26-20-17-29-utc.jpg',
      title: 'Exercise Hacks for Women',
      instructor: 'Teylor Len',
      availableSeats: 515,
      price: 50,
    },
    {
      id: '662c7741b220b8d4599f2f12',
      image: 'https://i.ibb.co/xqCFZZS/yoga-relax-2021-09-24-03-25-39-utc.jpg',
      title: 'Make a Peaceful Living',
      instructor: 'Marry Hun',
      availableSeats: 782,
      price: 80,
    },
  ];

  return (
    <div>
      {/* Section Title */}
      <div className="mt-20 pt-3">
        <h1 className="text-4xl font-bold text-center text-dark-primary">Classes</h1>
      </div>

      {/* Classes Grid */}
      <div className="my-16 w-[90%] gap-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
        {classesData.map((classItem) => (
          <div
            key={classItem.id}
            className="relative hover:-translate-y-2 duration-150 hover:ring-[2px] hover:ring-secondary w-64 h-[350px] mx-auto bg-white dark:bg-slate-600 rounded-lg shadow-lg overflow-hidden cursor-pointer"
          >
            <div className="relative h-48">
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300"></div>
              <img
                src={classItem.image}
                alt="Course Image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="px-6 py-2">
              <h3 className="text-[16px] font-bold">{classItem.title}</h3>
              <p className="text-gray-500 text-xs">Instructor: {classItem.instructor}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600 text-xs">
                  Available Seats: <span className="text-secondary">{classItem.availableSeats}</span>
                </span>
                <span className="text-green-500 font-semibold">${classItem.price}</span>
              </div>
              <a href={`/class/${classItem.id}`}>
                <button className="px-4 py-2 mt-4 w-full mx-auto text-white disabled:bg-red-300 bg-secondary duration-300 rounded hover:bg-red-700">
                  View
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
