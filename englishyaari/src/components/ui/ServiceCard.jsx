import React from 'react';

export function ServiceCard({
    title,
    description,
    icon,
    className = '',
    borderColor = 'border-[#16075D]',
}) {
    return (
        <div
            className={`rounded-s h-[207px] w-[200px] flex items-center border-4 shadow-custom ${borderColor}
            ${className}
            relative`}
        >
            <div
                className="absolute -top-7 left-16
             w-14 h-14 rounded-full bg-DarkBlue flex items-center justify-center mb-4"
            >
                <div className="text-white">{icon}</div>
            </div>

            <div className="relative flex justify-center flex-col">
                <h3 className="font-bold text-lg text-center mb-3 text-DarkBlue">
                    {title}
                </h3>

                <p className="text-sm px-2 leading-relaxed text-customPurple font-semibold">
                    {description}
                </p>
            </div>
        </div>
    );
}
