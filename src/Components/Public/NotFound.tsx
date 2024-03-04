import React from 'react';

import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div id='notfound'>
      <div className="notfound">
        <div className="notfound-404"></div>
        <h1>404{/*  - Not Found*/}</h1>
        <h2>Oops! Page Not Be Found</h2>
        <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
        <p>Here are some helpful links:</p>
        <p className="mt-4">
          <Link to="/" className="text-blue-500 hover:underline">Go back to the homepage</Link>
        </p>
        <p className="mt-4">
          <a href="/ContactUs" className="text-blue-500 hover:underline">Contact Us</a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
