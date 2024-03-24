'use client'
import React from 'react';
import './AboutUs.css'


const AboutPage = () => {
  return (
    <>
    
    
    <div className="container mx-auto py-8">
      <section>
        <h1 className="text-5xl font-extrabold text-white mb-4">Company History</h1>
        <h1>
             BCA Digital History
                <div class="history">
                    <div class="year">2005</div>
                    <div class="description">
                    BCA Digital was established as part of BCA's digital transformation strategy.
                    </div>
                </div>
                <div class="history-item">
                    <div class="year">2010</div>
                    <div class="description">
                    Introduction of BCA Mobile Banking app, marking a significant milestone in digital banking services.
                    </div>
                </div>
                <div class="history-item">
                    <div class="year">2015</div>
                    <div class="description">
                    Launch of BCA Internet Banking platform, enhancing online banking experiences for customers.
                    </div>
                </div>
                <div class="history-item">
                    <div class="year">2020</div>
                    <div class="description">
                    Integration of AI and data analytics to provide personalized banking solutions to customers.
                    </div>
                </div>
        </h1>
      </section>

      <section className="mt-8">
        <h2 className="text-3xl font-bold text-white mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Team members */}
          
        <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
            <img
                src="/lany-budiati.jpg"
                alt="John Doe"
                className="rounded-full w-24 h-24 object-cover mb-4"
            />
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Lani Budiasti</h3>
            <p className="text-sm text-gray-600">CEO</p>
            <p className="mt-2">Oversee Bank Operations.Veteran on banking system</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
            <img
                src="/it.jpg"
                alt="John Doe"
                className="rounded-full w-24 h-24 object-cover mb-4"
            />
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Iman Sentosa</h3>
            <p className="text-sm text-gray-600">CTO</p>
            <p className="mt-2">Oversee Bank Technology Application and Marketing Management</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
            <img
                src="/budiman.jpg"
                alt="John Doe"
                className="rounded-full w-24 h-24 object-cover mb-4"
            />
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold">Nugroho Budiman</h3>
            <p className="text-sm text-gray-600">Legal and Litigation</p>
            <p className="mt-2">Oversee compliance from OJK and Bank Litigation Case</p>
          </div>
        </div>
    </div>      
    </section>

      <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Our Culture</h2>
                <div className="container">
            <div className="vision-mission">
                <h2>Vision</h2>
                <p>Being the primary choice digital bank for the community.</p>
            </div>
            <div className="vision-mission">
                <h2>Mission</h2>
                <ul className="mission-list">
                <li>Understand diverse customer needs and provide appropriate financial services to achieve optimal customer satisfaction, leveraging suitable technology.</li>
                <li>Add value to stakeholders.</li>
                </ul>
            </div>
            </div> 
    </section>
    </div>
    

    </>
   
  );
};

export default AboutPage;
