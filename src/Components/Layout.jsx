import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="absolute w-screen h-screen bg-gray-900">{children}</div>
  );
};

export default Layout;
