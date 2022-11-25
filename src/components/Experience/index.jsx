import React from "react";

const Company = () => {

}

export const Experience = () => {

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
            <div
              id="plan"
              className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
            >
              <div id="title" className="w-full py-5 border-b border-gray-800">
                <h2 className="font-bold text-3xl text-white">Startup</h2>
                <h3 className="font-normal text-indigo-500 text-xl mt-2">
                  $9<sup>,99</sup>/month
                </h3>
              </div>
              <div id="content" className="">
                <div id="icon" className="my-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-500 text-sm pt-2">
                    Perfect individuals or startups
                  </p>
                </div>
                <div
                  id="contain"
                  className="leading-8 mb-10 text-lg font-light"
                >
                  <ul>
                    <li>10 hours of support</li>
                    <li>128MB of storage</li>
                    <li>2048MB bandwith</li>
                    <li>Subdomain included</li>
                  </ul>
                  <div id="choose" className="w-full mt-10 px-6">
                    <a
                      href="#"
                      className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                    >
                      Choose
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="plan"
              className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
            >
              <div id="title" className="w-full py-5 border-b border-gray-800">
                <h2 className="font-bold text-3xl text-white">Corporate</h2>
                <h3 className="font-normal text-indigo-500 text-xl mt-2">
                  $12<sup>,99</sup>/month
                </h3>
              </div>
              <div id="content" className="">
                <div id="icon" className="my-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  <p className="text-gray-500 text-sm pt-2">
                    Perfect for teams up to 12 people
                  </p>
                </div>
                <div
                  id="contain"
                  className="leading-8 mb-10 text-lg font-light"
                >
                  <ul>
                    <li>10 hours of support</li>
                    <li>1024MB of storage</li>
                    <li>4GB bandwith</li>
                    <li>Domain included</li>
                  </ul>
                  <div id="choose" className="w-full mt-10 px-6">
                    <a
                      href="#"
                      className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                    >
                      Choose
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="plan"
              className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
            >
              <div id="title" className="w-full py-5 border-b border-gray-800">
                <h2 className="font-bold text-3xl text-white">Enterprise</h2>
                <h3 className="font-normal text-indigo-500 text-xl mt-2">
                  $19<sup>,99</sup>/month
                </h3>
              </div>
              <div id="content" className="">
                <div id="icon" className="my-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <p className="text-gray-500 text-sm pt-2">
                    Perfect large scale team
                  </p>
                </div>
                <div
                  id="contain"
                  className="leading-8 mb-10 text-lg font-light"
                >
                  <ul>
                    <li>10 hours of support</li>
                    <li>10GB of storage</li>
                    <li>100GB bandwith</li>
                    <li>Domain included</li>
                  </ul>
                  <div id="choose" className="w-full mt-10 px-6">
                    <a
                      href="#"
                      className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                    >
                      Choose
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const Experience = () => {
//   const techs = [
//     {
//       id: 1,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 2,
//       src: css,
//       title: "CSS",
//       style: "shadow-blue-500",
//     },
//     {
//       id: 3,
//       src: javascript,
//       title: "JavaScript",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 4,
//       src: reactImage,
//       title: "React",
//       style: "shadow-blue-600",
//     },
//     {
//       id: 5,
//       src: tailwind,
//       title: "Tailwind",
//       style: "shadow-sky-400",
//     },
//     {
//       id: 6,
//       src: nextjs,
//       title: "Next JS",
//       style: "shadow-white",
//     },
//     {
//       id: 7,
//       src: graphql,
//       title: "GraphQL",
//       style: "shadow-pink-400",
//     },
//     {
//       id: 8,
//       src: github,
//       title: "GitHub",
//       style: "shadow-gray-400",
//     },
//   ];

//   return (
//     <div
//       name="experience"
//       classNameName="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
//     >
//       <div classNameName="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
//         <div>
//           <p classNameName="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
//             Experience
//           </p>
//           <p classNameName="py-6">Compañias y roles desempeñados</p>
//         </div>

//         <div classNameName="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
//           {techs.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               classNameName={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
//             >
//               <img src={src} alt="" classNameName="w-20 mx-auto" />
//               <p classNameName="mt-4">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
