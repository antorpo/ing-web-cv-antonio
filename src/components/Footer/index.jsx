import React from "react";

export const Footer = ({ year, email, username }) => {
  return (
    <footer className="footer footer-center w-full p-4 bg-gray-300 text-gray-800">
      <div className="text-center">
        <p>
          Copyright © {year} -{" "}
          <a href={`mailto:${email}`} className="font-semibold">
            {username}
          </a>
        </p>
      </div>
    </footer>
  );
};
