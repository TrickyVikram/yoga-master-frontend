import React from "react";

const Instructors = () => {
  const instructors = [
    { name: "John Doe", expertise: "Hatha Yoga", experience: "10 years", email: "help.yourassistant@gmail.com", image: "https://lh3.googleusercontent.com/a/ACg8ocL6Q-VCGYl5GxXYYJ-GvrdaBHweSrlZfKH8mzm4Pcfx-AfCNg=s96-c" },
    { name: "Jane Smith", expertise: "Ashtanga Yoga", experience: "8 years", email: "jane.smith@email.com", image: "https://i.ibb.co/J3ZYyK7/jane-smith.jpg" },
    { name: "Alex Johnson", expertise: "Meditation", experience: "12 years", email: "alex.johnson@email.com", image: "https://i.ibb.co/7YjLg8S/alex-johnson.jpg" },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-28">
      {instructors.map((instructor, index) => (
        <div key={index} className="max-w-xs">
          <div className="bg-white dark:bg-black dark:border-secondary dark:shadow-white border hover:-translate-y-1 hover:border-secondary cursor-pointer duration-200 rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img className="w-32 h-32 rounded-full mx-auto" src={instructor.image} alt={instructor.name} />
            </div>
            <div className="p-2">
              <h3 className="text-center dark:text-white text-xl text-gray-900 font-medium leading-8">{instructor.name}</h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>{instructor.expertise}</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Experience</td>
                    <td className="px-2 py-2">{instructor.experience}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td className="px-2 py-2">{instructor.email}</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center my-3">
                <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
};

export default Instructors;
