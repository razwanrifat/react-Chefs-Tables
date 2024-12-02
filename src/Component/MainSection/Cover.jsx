import React from 'react';

const Cover = () => {
    return (
        <div>
                <div
                    className="hero  min-h-96  max-w-7xl mx-auto"
                    style={{
                        backgroundImage: "url(https://media.istockphoto.com/id/1446478827/photo/a-chef-is-cooking-in-his-restaurants-kitchen.webp?s=1024x1024&w=is&k=20&c=Wu7klZ4YOK506jBk_B6cJCsLUgoKBAPJ-O6Qe8Q_AFU=)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-bold">Discover an exceptional cooking 
                        class tailored for you!</h1>
                        <p className="mb-5">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding 
                        problems to become an exceptionally well world-class Programmer
                        </p>
                        <button className="btn btn-success">Get Started</button>
                        </div>
                    </div>
                </div>

                <div className='p-4 m-3'>
                    <h1 className='teaxt 3xl font-bold text-center'>Our Recipes</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget 
                    urna volutpat curabitur elementum mauris aenean neque. </p>
                </div>
        </div>
    );
};

export default Cover;