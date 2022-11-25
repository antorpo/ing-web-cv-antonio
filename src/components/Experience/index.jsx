import React from "react";

const Company = ({ experience }) => {
  const { company, jobTitle, duration, description, image, web } = experience;
  return (
    <div className="rounded-lg text-center overflow-hidden w-full hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
      <div className="w-full py-5 border-b border-gray-800">
        <h2 className="font-bold text-3xl text-white">{company}</h2>
        <h3 className="font-normal text-indigo-500 text-xl mt-2">{jobTitle}</h3>
        <h4 className="font-normal text-indigo-200 text-xl mt-2">{duration}</h4>
      </div>
      <div>
        <div className="my-5">
          <img src={image} className="w-40 mx-auto rounded-full" alt="Company" />
        </div>
        <div className="leading-8 mb-10 text-lg font-light">
          <p>{description}</p>
          <div className="w-full mt-10 px-6">
            <a
              href={web}
              className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Web
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Experience = ({ companies }) => {
  return (
    <div
      name="experience"
      className="antialiased bg-gradient-to-b from-black to-gray-800 w-full h-full text-gray-400 md:h-screen font-inter p-10"
    >
      <div className="container px-4 mx-auto">
        <div>
          <div className="text-center my-10">
            <h1 className="font-bold text-4xl text-white">Experience</h1>
            <p className="text-light text-gray-500 text-xl">
              Compañías y roles desempeñados
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
            {companies.map((company) => (
              <Company key={company.id} experience={company} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
