import React from 'react';
import { Link } from 'react-router-dom';

const Herohome = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/src/images/student.avif"
          />
          
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
          <h4 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-gray-900">
            Welcome to our Student Enquiry Portal! Whether you have questions
            about courses, admissions, or general inquiries, providing your
            details here ensures personalized and prompt assistance
            
          </h4>
          <Link to="/demo-project/courses"
            className="mt-4 text-indigo-500 inline-flex items-center text-lg font-bold"
          >
            Explore More
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            </Link>
          
        </div>
      </div>
      

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  style={{ width: '150px', height: '150px' }}
                  src="https://img.freepik.com/free-photo/young-man-happy-expression-business-desk-company-concept-ai-generated_1194-589229.jpg?size=626&ext=jpg&ga=GA1.1.75649200.1688809125&semt=sph/400x500"
                />
                <p className="leading-relaxed">
                  A senior software developer in the student assistance portal
                  leads technical initiatives, ensures code quality, and drives
                  innovation for an enhanced user experience.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Ethan Reynolds
                </h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  style={{ width: '150px', height: '150px' }}
                  src="https://img.freepik.com/free-photo/student-attractive-girl-by-table_144627-7969.jpg?t=st=1708750908~exp=1708754508~hmac=bfea4d07a794956bb48479a3e6dc5ddf82358347b693729885c5e9849085bbc6&w=996"
                />
                <p className="leading-relaxed">
                  A senior software developer in the student assistance portal
                  leads technical initiatives, ensures code quality, and drives
                  innovation for an enhanced user experience.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Sowndarya
                </h2>
                <p className="text-gray-500">UI Developer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  style={{ width: '150px', height: '150px' }}
                  src="https://img.freepik.com/free-photo/smiling-man-sitting-office_23-2147785102.jpg?t=st=1708751037~exp=1708754637~hmac=f5bd3834f7562827ae6a74c1ab2e09783fc6a5f8e0f4bf8463e74f86e3068af2&w=360"
                />
                <p className="leading-relaxed">
                  A Chief Technology Officer (CTO) leads technology strategy,
                  overseeing innovation, development, and implementation to
                  align with organizational goals and drive technical excellence.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Oliver Harris
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1M+
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1M
              </h2>
              <p className="leading-relaxed">Subscribes</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1000+
              </h2>
              <p className="leading-relaxed">Downloads</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                1000+
              </h2>
              <p className="leading-relaxed">Courses</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Herohome;
