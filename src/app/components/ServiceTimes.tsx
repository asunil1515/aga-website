import React from 'react'


export const ServiceTimes = () => {
    return (
      <section className="py-20 bg-gray-100 text-center">
        <div className="text-black mt-6 flex text-lg flex-col items-center gap-4"> 
          <h2 className="text-3xl font-bold text-black">Service Times</h2>
           <p className="ml-3">Saturday Service: 7:00 pm - 9:00 pm</p>
            <p className="ml-5" >Sunday School: <span className="ml-8">9:15 am - 9:55 am</span></p>
           <p className="ml-9" >Sunday Service: <span className="ml-3">10:00 am - 12:00 pm</span></p>
        </div>
      </section>
    );
  };
  
