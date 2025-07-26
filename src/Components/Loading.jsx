import React from 'react';

function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <div className="flex space-x-1">
        <div
          className="w-8 h-8 bg-black rounded-full animate-bounce"
          style={{ animationDelay: "-0.3s" }}
        ></div>
        <div
          className="w-8 h-8 bg-black rounded-full animate-bounce"
          style={{ animationDelay: "-0.15s" }}
        ></div>
        <div
          className="w-8 h-8 bg-black rounded-full animate-bounce"
        ></div>
      </div>
    </div>
  );
}

export default Loading;
