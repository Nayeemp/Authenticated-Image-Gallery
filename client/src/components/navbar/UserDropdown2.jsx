/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

function UserDropdown({ userUserDropdown }) {
  return (
    <div
      className={`absolute z-50 right-0 top-13 bg-white rounded-lg shadow text-base divide-y divide-gray-300 h ${userUserDropdown && 'hidden'}`}
    >

      <ul className="py-2 w-40" aria-labelledby="user-menu-button">

        <li>
          <Link
            to="/login"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-center"
          >
            Log in

          </Link>
        </li>

        <li>
          <Link
            to="/signup"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-center"
          >
            Sign Up

          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserDropdown;
