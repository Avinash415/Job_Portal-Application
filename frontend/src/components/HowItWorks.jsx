
import React from 'react';
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4 overflow-hidden">How does it work?</h3>
        <p className="text-gray-600">Follow these simple steps to get started on our platform</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Card 1 */}
        <div className="bg-indigo-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <div className="icon  text-4xl text-red-500 mb-4 animate-bounce">
            <LuUserPlus />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">Create an Account</h4>
          <p className="text-gray-600">
            Sign up for a free account as a job seeker or employer. Set up your profile in minutes to start posting jobs or applying for jobs. Customize your profile to highlight your skills or requirements.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-indigo-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <div className="icon text-4xl text-red-500 mb-4 animate-bounce">
            <VscTasklist />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">Post or Browse Jobs</h4>
          <p className="text-gray-600">
            Employers can post detailed job descriptions, and job seekers can browse a comprehensive list of available positions. Utilize filters to find jobs that match your skills and preferences.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-indigo-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
          <div className="icon text-4xl text-red-500 mb-4 animate-bounce">
            <BiSolidLike />
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-3">Hire or Get Hired</h4>
          <p className="text-gray-600">
            Employers can shortlist candidates and extend job offers. Job seekers can review job offers and accept positions that align with their career goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
