import React from 'react';

const Card = ({ title, description, imageUrl, linkUrl, linkText = 'Learn More' }) => {
  return (
    <div className="
      border border-gray-200 rounded-lg p-6 m-4
      max-w-xs shadow-lg flex flex-col items-center text-center
      bg-white transition-transform duration-300 hover:scale-105
    ">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="
            w-full h-36 object-cover rounded-md mb-4
          "
        />
      )}
      <h3 className="
        text-2xl font-semibold mb-2 text-gray-800
      ">{title}</h3>
      <p className="
        text-base text-gray-600 mb-5
      ">{description}</p>
      {linkUrl && (
        <a
          href={linkUrl}
          className="
            inline-block px-6 py-2 bg-blue-600 text-white
            rounded-md hover:bg-blue-700 transition-colors duration-300
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
          "
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

export default Card;