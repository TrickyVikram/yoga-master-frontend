import React from "react";

const Classes = () => {
  const classList = [
    { title: "Beginner Yoga", description: "A perfect start for beginners.", time: "9:00 AM" },
    { title: "Advanced Yoga", description: "Challenge yourself with advanced poses.", time: "11:00 AM" },
    { title: "Meditation", description: "Relax and rejuvenate your mind.", time: "6:00 PM" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Our Classes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classList.map((classItem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{classItem.title}</h2>
              <p className="text-gray-600 mb-4">{classItem.description}</p>
              <p className="font-medium">Time: {classItem.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
