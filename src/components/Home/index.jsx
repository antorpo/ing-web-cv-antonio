import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Rating } from "../../components";

export const Home = ({ developer }) => {
  const { image, fullname, role, about, languageScale, languages } = developer;
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-6xl font-bold text-white">
            {fullname}
          </h2>
          <h3 className="text-2xl sm:text-5xl font-bold text-white">{role}</h3>
          <p className="text-gray-500 py-4 max-w-md">{about}</p>

          <div className="pt-5">
            <h5 className="text-lg sm:text-3lg font-bold text-white">
              Languages
            </h5>

            <div>
              {languages.map(({ id, language, scale }) => (
                <div className="flex flex-row pt-5 pb-10">
                  <h6 className="text-lg sm:text-2lg font-bold text-slate-600">
                    {language}
                  </h6>
                  <Rating key={id} maximum={languageScale} scale={scale} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Link
              to="skills"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Skills
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={image}
            alt="Profile picture"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
