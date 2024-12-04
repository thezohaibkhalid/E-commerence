import React, { useState } from "react";

export default function Carousel() {
  const slides = [
    {
      title: "01 - Bed Room",
      description: "Inner Peace",
      image:
        "https://s3-alpha-sig.figma.com/img/f89a/66d9/4961c3801f4c07439f27b13468e5e545?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VaWiKR4~fUTro-ts52df3tIcVZazkjnfCSIU03lsur5IlnB95PqJE-r5YXPbMatFVkT1MoAVs6X9uf0tAtnkaJuF47r~g~7SFhojUsxOopoQ6~GBVRePm-FxkMuX6ZEJEsGkyhzBYJu5nFQ6ksTa0PQUfe9gPtmM8mCjoPD3x-sI5evjEA2TTYAfHf8Jtr-g4mmk2trvWWItt7C0KdsCDDjz9VL8jaTzUNk8nVGRsI5sOAnCh6wOTzJSmzetGkRaRhK~YcMv8uzFRgRloSWAzkhcRjTY0Tbypb3wUkPY3304z7S9pG7NNIpDjRFcJMlIj0HcxGCe1so6ulPaOU1fyw__",
    },
    {
      title: "02 - Living Room",
      description: "Inner Peace",
      image:
        "https://s3-alpha-sig.figma.com/img/f89a/66d9/4961c3801f4c07439f27b13468e5e545?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VaWiKR4~fUTro-ts52df3tIcVZazkjnfCSIU03lsur5IlnB95PqJE-r5YXPbMatFVkT1MoAVs6X9uf0tAtnkaJuF47r~g~7SFhojUsxOopoQ6~GBVRePm-FxkMuX6ZEJEsGkyhzBYJu5nFQ6ksTa0PQUfe9gPtmM8mCjoPD3x-sI5evjEA2TTYAfHf8Jtr-g4mmk2trvWWItt7C0KdsCDDjz9VL8jaTzUNk8nVGRsI5sOAnCh6wOTzJSmzetGkRaRhK~YcMv8uzFRgRloSWAzkhcRjTY0Tbypb3wUkPY3304z7S9pG7NNIpDjRFcJMlIj0HcxGCe1so6ulPaOU1fyw__",
    },
    {
      title: "03 - Bed Room",
      description: "Inner Peace",
      image:
        "https://s3-alpha-sig.figma.com/img/7065/5e8b/25a06a33769af9bf5fe8f8ed81ce75d8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cwBGly5JxcCSZLRfRGp6D0Xn4qa2XvkVbyD~PcfEBB8h0jQ8o0RP28LU4UiMV8eckT7C2AK5nlpSDewPRheymhgb6JlSOX5xktk0L8YwLeiw85PwWLnia2nzilkDrsYZrnF1vjUfDbBSWplcCzk266Ay0uiZqqyXC--IxCZ1h2-wdeNvIBA-VGVQiE0oXSpvHNtyiD7CeLH4Bb-gOUNaoYXY17urgFLoZUqrAbnuGd5py~lQk0JZ4LIoL06MOCRWlH2k8iRevCjAmaZh6233Fj8ObVQCk2DrzsnHSQcKnPck-3AdnlYYaFf9kuPdMXF-Bof-L0VA-iJkZwSo7IJd6A__",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const calculateOffset = (index) => {
    const totalSlides = slides.length;
    return ((index - currentIndex + totalSlides) % totalSlides) - Math.floor(totalSlides / 2);
  };

  return (
    <div className="bg-[#fcf7f2] py-10 px-6 lg:h-[670px] md:h-[670px] h-auto mt-16">
      <div className="w-[90%] mx-auto flex">
        {/* Header Section */}
        <div className="mb-8 w-[25%] flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800">
            50+ Beautiful rooms inspiration
          </h1>
          <p className="text-gray-600 mt-4">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="bg-[#af833b] text-white px-6 py-2 mt-6 rounded-lg">
            Explore More
          </button>
        </div>

        <div className="relative w-[75%] mx-auto h-[582px]">
      {/* Carousel Wrapper */}
      <div className="flex items-center justify-center relative h-full overflow-hidden">
        {slides.map((slide, index) => {
          const offset = calculateOffset(index);

          // Adjust the style based on the offset
          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-in-out ${
                offset === 0
                  ? "z-20 scale-100 opacity-100"
                  : offset === -1 || offset === 1
                  ? "z-10 scale-75 opacity-70"
                  : "z-0 scale-50 opacity-50"
              }`}
              style={{
                transform: `translateX(${offset * 110}%)`,
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`object-cover rounded-lg shadow-lg ${
                  offset === 0 ? "h-[582px]" : "h-[450px]"
                }`}
              />
              <div
                className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-70 p-4 rounded-md ${
                  offset === 0 ? "" : "hidden"
                }`}
              >
                <h3 className="text-gray-800 font-semibold">{slide.title}</h3>
                <p className="text-[#af833b] font-bold">{slide.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-30"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-30"
      >
        →
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-[#af833b]" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}
