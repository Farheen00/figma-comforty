import React from "react";

import Image from "next/image";
 
export default function ClientsReviews(){
  return (
    <div className="w-[890px] sm:w-auto sm:mx-0 bg-[#F0F2F3]">
      <section className=" body-font  sm:left-0">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-base md:text-xl lg:text-2xl font-semibold font-[Inter] text-left px-4 lg:px-6 mt-6 md:mt-10">
            What clients say about us
          </h1>

          <div className="flex flex-wrap -m-4 ">
            {/* Review 1 */}
            <div className="p-6 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 bg-white p-6  flex-col sm:flex-row">
                <div className="flex-grow  mt-6 sm:mt-0 sm:ml-6">
                  <div className="flex gap-4">
                    <div className="h-36 w-[2px] bg-[#029FAE] mt-0 flex-shrink-0 "></div>
                    <p className="leading-relaxed text-sm sm:text-base break-words">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus sit amet mi nec massa tincidunt blandit et eu sem.
                      Maecenas laoreet ultrices diam dignissim posuere. Aenean
                      ultrices dui at ipsum sagittis, pharetra lacinia dui
                      faucibus. In ac bibendum ex. Aenean dolor massa, euismod
                      sit amet suscipit et“
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <Image
                        src='/reviewpic1.png'
                        width={60}
                        height={60}
                        alt="reviews"
                        className="rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <p className="font-medium font-[Inter] text-[#272343] text-base">
                          Kristin Watson
                        </p>
                        <p className="text-sm text-[#9A9CAA]">
                          Fashion Designer
                        </p>
                      </div>
                    </div>
                    <Image
                      src='/Group.png'
                      width={50}
                      height={50}
                      alt="client icon"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="p-6 lg:w-1/2 md:w-full">
              <div className="flex border-2 rounded-lg border-gray-200 bg-white p-6 flex-col sm:flex-row">
                <div className="flex-grow  mt-6 sm:mt-0 sm:ml-6">
                  <div className="flex gap-4">
                    <div className="h-36 w-[2px] bg-[#029FAE] mt-0 flex-shrink-0 "></div>
                    <p className="leading-relaxed text-sm sm:text-base break-words">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vivamus sit amet mi nec massa tincidunt blandit et eu sem.
                      Maecenas laoreet ultrices diam dignissim posuere. Aenean
                      ultrices dui at ipsum sagittis, pharetra lacinia dui
                      faucibus. In ac bibendum ex. Aenean dolor massa, euismod
                      sit amet suscipit et“
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <Image
                        src='/Group.png'
                        width={60}
                        height={60}
                        alt="reviews"
                        className="rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <p className="font-medium font-[Inter] text-[#272343] text-base">
                          Esther Howard
                        </p>
                        <p className="text-sm text-[#9A9CAA]">
                          Fashion Designer
                        </p>
                      </div>
                    </div>
                    <Image
                      src='/Group.png'
                      width={50}
                      height={50}
                      alt="client icon"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

