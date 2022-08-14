import React from 'react';

function NotFound () {

    return (
        <div className="scroll-smooth bg-neutral-900 w-full h-screen flex flex-col justify-center items-center p-5">
            <a href="/">

            </a>
            <a href="/" className="mt-10 md:mt-16 text-xl md:text-5xl text-white text-center hover:text-gray-300 transition-colors duration-500 font-black">Такой страницы не существует</a>
        </div>
    );
}

export default NotFound;