import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-9xl font-bold text-gray-300">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-2">Page not found</h2>
      <p className="text-gray-500 mt-2 mb-6">The page you're looking for doesn't exist.</p>
      <Link
       to={'/'}
        className="px-6 py-2 bg-gray-900 text-white rounded-lg  "
      >
         Back to home
      </Link>
    </div>
    );
};

export default ErrorPage;