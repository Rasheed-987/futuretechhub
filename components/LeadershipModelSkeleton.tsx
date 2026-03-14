import React from "react";

const LeadershipModelSkeleton = () => {
  return (
    <div className="animate-pulse bg-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="mb-8 h-48 w-48 rounded-full bg-gray-200 md:mb-0 md:mr-12 md:h-64 md:w-64 lg:mr-24 lg:h-80 lg:w-80" />

          <div className="w-full max-w-lg flex-1 md:w-auto">
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="h-5 w-48 rounded bg-gray-300" />
                <div className="ml-auto h-5 w-5 rounded bg-gray-300" />
              </div>
              <div className="flex items-center">
                <div className="h-5 w-40 rounded bg-gray-300" />
                <div className="ml-auto h-5 w-5 rounded bg-gray-300" />
              </div>
              <div className="flex items-center">
                <div className="h-5 w-56 rounded bg-gray-300" />
                <div className="ml-auto h-5 w-5 rounded bg-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipModelSkeleton;