import React from "react";

const AppNavbar = () => {
  return (
    <div className="flex items-center justify-between py-8 font-medium">
      <div className="flex space-x-6">
        <h2 className="font-semibold text-lg">2Brothers Lounge</h2>
        <ul className="flex space-x-4">
          <li className="text-base font-poppins font-medium">
            <span>Menu</span>
          </li>
          <li className="text-base font-poppins font-medium">
            <span>Gallery</span>
          </li>
          <li className="text-base font-poppins font-medium">
            <span>Contacts</span>
          </li>
          <li className="text-base font-poppins font-medium">
            <span>About us</span>
          </li>
          <li className="text-base font-poppins font-medium">
            <span>Info</span>
          </li>
        </ul>
      </div>

      <div className="flex space-x-6">
        <p>28-30 Houndsditch London, EC3A 7DB </p>
        <p>+44 059 4734 7383</p>
      </div>
    </div>
  );
};
export default AppNavbar;
