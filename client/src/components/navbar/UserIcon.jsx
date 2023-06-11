/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserDropdown from './UserDropdown';
import UserDropdown2 from './UserDropdown2';

function UserIcon() {
  const [userUserDropdown, setUserUserDropdown] = useState(true);
  const user = useSelector((state) => state.auth.user)

  const userUserDropdownHandler = () => {
    if (userUserDropdown) {
      setUserUserDropdown(false);
    } else {
      setUserUserDropdown(true);
    }
  }

  return (
    <div className="py-3 px-5">
      <div className="relative">
        <span className="text-2xl hover:cursor-pointer hover:text-lime-500" onClick={() => userUserDropdownHandler()}>
          <i className="fas fa-user " />
        </span>
        {user ? <UserDropdown userUserDropdown={userUserDropdown} /> : <UserDropdown2 userUserDropdown={userUserDropdown} />}

      </div>
    </div>
  )
}

export default UserIcon;
