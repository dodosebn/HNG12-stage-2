import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
    </div>
  );
};

export default Loading;
