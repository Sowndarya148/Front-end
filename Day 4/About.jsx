
import React from 'react'
import Footer from '../../components/ui/Footer'
import Navbar from '../../components/ui/Navbar'

function About() {
  return (
    <div>
      <Navbar />
     <div id="about" class="relative bg-white overflow-hidden mt-16">
    <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div class="pt-1"></div>

            <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div class="sm:text-center lg:text-left">
                    <h1 class="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                        About 
                    </h1>

                    <p>
                    The Student Assistance Portal streamlines and enhances the educational journey by providing a centralized platform for students to inquire about courses, admissions, 
                    and general information. It ensures personalized and prompt assistance, fostering a seamless experience for students seeking guidance
                     and support.Our dedicated developers, including senior software developers and UI designers, are committed to crafting innovative solutions for the Student Assistance Portal. With a focus on user experience and 
                     cutting-edge technology, they drive the platform's excellence, ensuring a robust and student-friendly digital environment.
                    </p>
                </div>
            </main>
        </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3 lg:mr-8 lg:mb-8">
    <img class="h-32 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://img.freepik.com/free-photo/look-this-group-young-people-casual-clothes-working-modern-office_146671-16519.jpg?t=st=1708756781~exp=1708760381~hmac=af69ed3dfa63e809c1edc03fae7e4bcfaf6bf7d4bdced253ea26576bf929d599&w=996" alt=""/>
</div>


</div>
<Footer />
    </div>
  )
}

export default About
