import React, { useState } from 'react';

// Define your slide data
const slides = [
    { src: 'image1.jpg', alt: 'Slide 1' },
    { src: 'image2.jpg', alt: 'Slide 2' },
    { src: 'image3.jpg', alt: 'Slide 3' },
];

function Carousel() {
    // State to track the currently visible slide index
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = slides.length;

    // Logic to move to the previous slide
    const goToPrev = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    // Logic to move to the next slide
    const goToNext = () => {
        setActiveIndex((prevIndex) => 
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* ... Viewport and Slider Track structure from section 1 ... */}
            
            <div className="overflow-hidden rounded-xl shadow-2xl">
                <div 
                    id="slider-track"
                    className="flex transition-transform duration-500 ease-in-out" 
                    // 💡 Key Integration: Use state to calculate the translateX transformation
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }} 
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-96">
                            <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover"/>
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls with click handlers */}
            <button 
                onClick={goToPrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 m-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 z-10"
            >
                &lt;
            </button>
            <button 
                onClick={goToNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 m-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 z-10"
            >
                &gt;
            </button>
            
            {/* Navigation Dots (Optional) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button 
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === activeIndex ? 'bg-white' : 'bg-gray-400'
                        }`}
                    />
                ))}
            </div>

        </div>
    );
}

export default Carousel;