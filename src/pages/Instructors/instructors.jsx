import React from "react";

const Instructors = () => {
  const instructors = [
    { name: "John Doe", expertise: "Hatha Yoga", experience: "10 years" },
    { name: "Jane Smith", expertise: "Ashtanga Yoga", experience: "8 years" },
    { name: "Alex Johnson", expertise: "Meditation", experience: "12 years" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Meet Our Instructors</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex items-center gap-4 hover:shadow-2xl transition"
            >
              <img
                src={`https://via.placeholder.com/100?text=${instructor.name.charAt(
                  0
                )}`}
                alt={instructor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">{instructor.name}</h2>
                <p className="text-gray-600">{instructor.expertise}</p>
                <p className="font-medium">Experience: {instructor.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
