import React from 'react';

const Page = ({ background, children }) => {
  return (
    <div
      className={`bg-${background} bg-cover min-h-screen w-full bg-gray-400 p-20 flex justify-center items-center flex-col text-4xl`}
    >
      {children}
    </div>
  );
};

export default Page;
