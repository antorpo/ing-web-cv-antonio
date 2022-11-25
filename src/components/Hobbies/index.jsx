import React from "react";

export const Hobbies = ({ hobbies }) => {
  return (
    <div
      name="hobbies"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center my-10">
          <h1 className="font-bold text-4xl text-white">Hobbies</h1>
          <p className="text-light text-gray-500 text-xl">
            Actividades que hago frecuentemente
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
          {hobbies.map(({ id, hobbie, image }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-200 py-2 rounded shadow-[#6d6d6d]`}
            >
              <img src={image} alt="Hobbie img" className="w-20 mx-auto" />
              <p className="mt-4 text-bold">{hobbie}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
