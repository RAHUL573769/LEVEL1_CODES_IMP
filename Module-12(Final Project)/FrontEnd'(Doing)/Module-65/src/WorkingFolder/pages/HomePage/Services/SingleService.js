import React from 'react';

const SingleService = ({ service }) => {
    console.log(service)
    return (
        <div>
     <div

              className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="card-body items-center text-center">
                <div className="text-4xl text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="card-title text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
        </div>
    );
};

export default SingleService;