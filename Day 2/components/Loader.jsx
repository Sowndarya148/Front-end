import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <img
                className="w-20 h-20 animate-spin"
                src="https://www.svgrepo.com/show/448500/loading.svg"
                alt="Loading icon"
            />
        </div>
    );
};

export default Loader;
