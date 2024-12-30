'use client';

import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main content with top padding for header */}
      <div className="space-y-24 pt-24">
        {/* Hero Section */}
        <div className="bg-white py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                About AlterMindAI
              </h1>
              <p className="mt-8 max-w-4xl mx-auto text-xl text-gray-500">
                Empowering businesses with cutting-edge AI solutions to transform their operations and drive innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div id="case-studies" className="bg-white py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">
                Use Cases
              </h2>
              
              <div className="space-y-16">
                {/* Use Case 1 */}
                <div className="p-8 bg-gray-50 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Retail & E-Commerce – Streamlining Customer Engagement
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Challenge:</h4>
                      <p className="text-gray-600">
                        A mid-sized retail business faces difficulties managing customer inquiries, tracking orders, and providing 24/7 support. The result is poor customer satisfaction and loss of potential sales.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Solution with Our Product:</h4>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>A conversational AI agent integrates with WhatsApp and the retailer&apos;s website to handle customer queries like product availability, order tracking, and return requests in multiple languages.</li>
                        <li>AI-driven lead management suggests personalized offers based on browsing and purchase history.</li>
                        <li>The tool analyzes customer feedback and generates actionable insights to improve product offerings.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Impact:</h4>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>40% reduction in customer response time.</li>
                        <li>Increased customer retention and satisfaction scores.</li>
                        <li>20% boost in sales from targeted offers and personalized recommendations.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Use Case 2 */}
                <div className="p-8 bg-gray-50 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Manufacturing – Optimizing Supply Chain and Vendor Management
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Challenge:</h4>
                      <p className="text-gray-600">
                        A small manufacturing unit struggles to keep track of raw material procurement schedules, vendor performance, and real-time production bottlenecks.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Solution with Our Product:</h4>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>AI agents evaluate vendor contracts, track on-time delivery rates, and recommend cost-effective alternatives based on performance metrics.</li>
                        <li>Predictive analytics tools forecast raw material needs based on historical production data and market trends.</li>
                        <li>Workflow automation assigns tasks and flags potential delays in the production process.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Impact:</h4>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>25% reduction in procurement costs through optimized vendor selection.</li>
                        <li>Improved production efficiency by minimizing raw material shortages.</li>
                        <li>Real-time visibility into supply chain performance for better decision-making.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Use Case 3 */}
                <div className="p-8 bg-gray-50 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Education – Enhancing Administrative Efficiency
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Challenge:</h4>
                      <p className="text-gray-600">
                        A chain of private coaching institutes spends excessive time managing student admissions, class scheduling, and fee collection.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Solution with Our Product:</h4>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>AI-powered automation simplifies admission workflows, from initial inquiries to enrollment.</li>
                        <li>Intelligent scheduling agents optimize class timetables based on instructor availability and student preferences.</li>
                        <li>AI chatbots handle routine administrative tasks, such as fee reminders and answering FAQs for parents.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-600 mb-2">Impact:</h4>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>Administrative workload reduced by 50%.</li>
                        <li>Streamlined operations ensure a smoother student experience.</li>
                        <li>Increased revenue through timely fee collection and reduced operational inefficiencies.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="bg-white py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                Our Leadership Team
              </h2>
              <p className="mt-8 text-lg leading-8 text-gray-600 text-center mb-16">
                Meet the hardworking folks driving innovation at AlterMindAI
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
                {/* Tuhin Rawat */}
                <div className="flex flex-col items-center">
                  <div className="relative w-64 h-64 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/tuhin-rawat.jpeg"
                      alt="Tuhin Rawat"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Tuhin Rawat</h3>
                  <p className="text-base text-indigo-600 mb-4">Founder & CEO</p>
                  <p className="text-gray-600 text-center max-w-sm">
                    Leading AlterMindAI&apos;s vision to revolutionize business operations through innovative AI solutions.
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Arkaparva Sinha */}
                <div className="flex flex-col items-center">
                  <div className="relative w-64 h-64 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/arka.jpeg"
                      alt="Arkaparva Sinha"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Arkaparva Sinha</h3>
                  <p className="text-base text-indigo-600 mb-4">Co-founder & CTO</p>
                  <p className="text-gray-600 text-center max-w-sm">
                    Driving technological excellence and innovation in AI solutions at AlterMindAI.
                  </p>
                  <div className="mt-4 flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 py-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
                Our Mission
              </h2>
              <div className="space-y-8">
                <p className="text-lg leading-8 text-gray-600">
                  At AlterMindAI, we are committed to democratizing artificial intelligence and making it accessible to businesses of all sizes. Our mission is to empower organizations with cutting-edge AI solutions that drive growth, efficiency, and innovation.
                </p>
                <p className="text-lg leading-8 text-gray-600">
                  We believe that AI should be a tool for progress, helping businesses make better decisions, automate processes, and create value for their customers. Through our expertise and dedication, we&apos;re building a future where AI technology serves as a catalyst for positive transformation across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 