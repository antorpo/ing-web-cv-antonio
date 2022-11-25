import React from "react";

export const Skill = ({ skills }) => {
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center my-10">
          <h1 className="font-bold text-4xl text-white">Skills</h1>
          <p className="text-light text-gray-500 text-xl">
            Tecnologías con las que he trabajado
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, name, percentage, color, image }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${color}`}
            >
              <img src={image} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
