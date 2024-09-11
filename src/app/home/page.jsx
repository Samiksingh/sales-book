//

import React from "react";

const FullDate = () => {
  const now = new Date();
  const fullDate = `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()}`;

  return (
    <div>
      <p>{fullDate}</p>
    </div>
  );
};


export const Frontpage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-20">
        <h1>Sales Book</h1>
        <p>Track sales and analytics</p>
        <div className="flex items-center justify-center">
          <FullDate />
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
