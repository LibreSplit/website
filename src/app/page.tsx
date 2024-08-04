import React from 'react';
import { YoutubeIcon } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            A modern speedrun timer for Linux
          </h1>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Key Features</h2>
            <ul className="list-disc list-inside text-left max-w-md mx-auto lg:mx-0">
              <li>Based on Urn</li>
              <li>Auto splitting and load removal support via Lua scripts</li>
              <li>Free and open source</li>
            </ul>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-xl mx-auto">
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/wKaxAtcGCew?si=v27C_kh3u-RF5OxT" 
                title="Mirror's Edge Catalyst Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 flex items-center justify-center bg-[#3c3c3c] text-white">
              <YoutubeIcon className="mr-2" />
              <span>Mirror&apos;s Edge Catalyst Demo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;