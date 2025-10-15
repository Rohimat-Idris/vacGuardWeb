// pages/index.js
"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiDownload, FiClock, FiCalendar, FiBell, FiUserPlus, FiBarChart2, FiShield, FiUser, FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/navigation';




export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

useEffect(() => {
  console.log('Something');
}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Mother of two",
      content: "VacGuard has simplified our vaccination schedule. Never missed an appointment since we started using it!",
      avatar: "/avatar1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Pediatrician",
      content: "I recommend VacGuard to all my patients' parents. It's the most comprehensive immunization tracker I've seen.",
      avatar: "/avatar2.jpg"
    },
    {
      name: "Amina Diallo",
      role: "Working mom",
      content: "The reminders are a lifesaver! With three kids, I used to forget appointments. Now VacGuard keeps me organized.",
      avatar: "/avatar3.jpg"
    }
  ];

  const features = [
    {
      icon: <FiUserPlus className="w-8 h-8" />,
      title: "Child Profiles",
      description: "Create individual profiles for each child with their medical details and vaccination history."
    },
    {
      icon: <FiCalendar className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "Automatically generates vaccination schedules based on your child's age and medical guidelines."
    },
    {
      icon: <FiBell className="w-8 h-8" />,
      title: "Custom Reminders",
      description: "Get notifications via app, email or SMS so you never miss an important vaccination date."
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Vaccine Records",
      description: "Digitally store and access your child's vaccination records anytime, anywhere."
    },
    {
      icon: <FiBarChart2 className="w-8 h-8" />,
      title: "Progress Tracking",
      description: "Visual charts show your child's immunization progress and upcoming requirements."
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "History Log",
      description: "Maintain a complete history of all vaccinations with dates, locations, and reactions if any."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>VacGuard - Smart Immunization Tracker for Your Children</title>
        <meta name="description" content="Track your children's vaccinations, get reminders, and maintain digital records with VacGuard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
    {/* Navigation */}
<nav className="bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Logo and Links */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <FiShield className="h-8 w-8 text-blue-600" />
          <span className="text-3xl font-bold text-blue-600">VacGuard</span>
        </div>

        <div className="hidden sm:flex space-x-6 items-center">
          <a href="#" className="text-gray-900 border-b-2 border-blue-500 font-medium hover:text-blue-600">Home</a>
          <a href="#features" className="text-gray-500 hover:text-blue-600 hover:border-blue-500 border-b-2 border-transparent font-medium">About</a>
          <a href="#features" className="text-gray-500 hover:text-blue-600 hover:border-blue-500 border-b-2 border-transparent font-medium">Features</a>
          <a href="#how-it-works" className="text-gray-500 hover:text-blue-600 hover:border-blue-500 border-b-2 border-transparent font-medium">How It Works</a>
          <a href="#testimonials" className="text-gray-500 hover:text-blue-600 hover:border-blue-500 border-b-2 border-transparent font-medium">Testimonials</a>
          <a href="#footer" className="text-gray-500 hover:text-blue-600 hover:border-blue-500 border-b-2 border-transparent font-medium">Contact</a>
        </div>
      </div>

      {/* Search and Login */}
      <div className="hidden sm:flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>

        {/* Login Button */}
        <button onClick={() => router.push('/login')}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
          <FiUser className="mr-2 h-4 w-4 text-white" />
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
    <div className="pt-2 pb-3 space-y-1">
      <a href="#" className="bg-blue-50 text-blue-700 block pl-3 pr-4 py-2 border-l-4 border-blue-500 text-base font-medium">Home</a>
      <a href="#features" className="block pl-3 pr-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 text-base font-medium">About</a>
      <a href="#features" className="block pl-3 pr-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 text-base font-medium">Features</a>
      <a href="#how-it-works" className="block pl-3 pr-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 text-base font-medium">How It Works</a>
      <a href="#testimonials" className="block pl-3 pr-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 border-l-4 border-transparent hover:border-blue-500 text-base font-medium">Testimonials</a>

      {/* Mobile Search */}
      <div className="px-4 pt-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
        <FiSearch className="absolute left-6 top-[59.5%] transform -translate-y-1/2 text-gray-400 sm:hidden" />
      </div>

      {/* Mobile Login */}
      <div className="mt-4 px-4">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          Login
        </button>
      </div>
    </div>
  </div>
</nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Never Miss Your Child's <span className="text-blue-600">Vaccination</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                VacGuard helps parents track immunization schedules, set reminders, and maintain digital records for all their children in one place.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105">
                  Download for App
                </button>
                <button className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-50 md:h-auto aspect-square">
                <Image 
                  src="/hero.png" 
                  alt="VacGuard App Screenshot"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-blue-100 rounded-xl w-32 h-32 -z-10"></div>
              <div className="absolute -top-8 -right-8 bg-blue-200 rounded-xl w-24 h-24 -z-10"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful Features for Peace of Mind
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Everything you need to manage your children's immunization schedule in one place
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
                  <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How VacGuard Works
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Simple steps to ensure your child's immunization is always up-to-date
            </p>
          </div>

          <div className="mt-16">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-blue-200 transform -translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="space-y-8 md:space-y-0">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 mb-8 md:mb-0 order-1 md:order-1 text-right">
                    <h3 className="text-xl font-semibold text-gray-900">Create Child Profile</h3>
                    <p className="mt-2 text-gray-600">
                      Add your child's details including name, birth date, and any special medical conditions.
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center order-2">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <div className="flex-1 md:pl-12 mt-8 md:mt-0 order-3 md:order-3">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <Image 
                        src="/create account.avif" 
                        alt="Create Child Profile"
                        width={400}
                        height={300}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 mb-8 md:mb-0 order-1 md:order-3">
                    <h3 className="text-xl font-semibold text-gray-900">View Immunization Schedule</h3>
                    <p className="mt-2 text-gray-600">
                      VacGuard automatically generates a personalized vaccination schedule based on official guidelines.
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center order-2">
                    <span className="text-2xl font-bold">2</span>
                  </div>
                  <div className="flex-1 md:pl-12 mt-8 md:mt-0 order-3 md:order-1 text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <Image 
                        src="/contact.avif" 
                        alt="View Immunization Schedule"
                        width={400}
                        height={300}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 mb-8 md:mb-0 order-1 md:order-1 text-right">
                    <h3 className="text-xl font-semibold text-gray-900">Get Reminders</h3>
                    <p className="mt-2 text-gray-600">
                      Receive timely notifications before each vaccination is due, so you never miss an appointment.
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center order-2">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <div className="flex-1 md:pl-12 mt-8 md:mt-0 order-3 md:order-3">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <Image 
                        src="/getreminder.avif" 
                        alt="Get Reminders"
                        width={400}
                        height={300}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 mb-8 md:mb-0 order-1 md:order-3">
                    <h3 className="text-xl font-semibold text-gray-900">Record Vaccinations</h3>
                    <p className="mt-2 text-gray-600">
                      After each visit, update your child's records with vaccine details, dates, and any reactions.
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center order-2">
                    <span className="text-2xl font-bold">4</span>
                  </div>
                  <div className="flex-1 md:pl-12 mt-8 md:mt-0 order-3 md:order-1 text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <Image 
                        src="/record.jpg" 
                        alt="Record Vaccinations"
                        width={400}
                        height={300}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Trusted by Parents Worldwide
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-blue-100 mx-auto">
              Join thousands of parents who are keeping their children protected with VacGuard
            </p>
          </div>

          <div className="mt-16">
            <div className="relative max-w-3xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-opacity duration-500 ${activeTestimonial === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
                >
                  <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg">
                    <p className="text-lg italic">"{testimonial.content}"</p>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <Image 
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-blue-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-white' : 'bg-blue-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden">
            <div className="relative">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-300 rounded-full opacity-20"></div>
              <div className="relative z-10">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    Ready to protect your child's health?
                  </h2>
                  <p className="mt-4 max-w-2xl text-xl text-blue-100 mx-auto">
                    Download VacGuard today and never worry about missing a vaccination again.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105">
                      <div className="flex items-center">
                        <FiDownload className="mr-2" />
                        Download for App
                      </div>
                    </button>
                    <button className="bg-transparent hover:bg-blue-700 text-white border border-white px-8 py-4 rounded-lg text-lg font-semibold transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <FiShield className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold text-white">VacGuard</span>
              </div>
              <p className="mt-4 text-gray-400">
                The smart way to track your child's immunizations and keep them protected.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Product
              </h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Download</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Updates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Immunization Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm text-center">
              &copy; {new Date().getFullYear()} VacGuard. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}