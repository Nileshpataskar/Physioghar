import React from 'react'

const StickyPhone = () => {
    return (
        <a
            href="tel:+918329567219"
            className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all z-50 animate-pulse hover:animate-none group"
            aria-label="Call us"
        >
            <div className="absolute inset-0 bg-primary rounded-full opacity-0 group-hover:opacity-20 scale-0 group-hover:scale-125 transition-all duration-700"></div>
            <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
            </svg>
        </a>
    )
}

export default StickyPhone