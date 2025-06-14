import React from 'react';
import { ChefHat, Users, Clock, Heart, Star, Phone, Mail, MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-800">Cravzi</span>
            </div>
            <a 
              href="https://wa.me/918830232516" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Chat with us</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-cream-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-6 shadow-lg">
                <ChefHat className="h-16 w-16 text-orange-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Home-cooked food,<br />
              <span className="text-orange-500">one click away.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Connecting passionate home cooks with food lovers in your neighborhood. 
              Fresh, authentic, and made with love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSddXqgAhimyc2I1ZUgbVidLcuW_X1CYQ3LH5jCLOk9dZwATcg/viewform?usp=sharing&ouid=101482664821296069192"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>🍱</span>
                <span>I want to order tiffin</span>
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScxl8Gduk6Ab3UnS1hbU97n10AWwHUJu0RmGn_3_IB2fY1JKQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>👨‍🍳</span>
                <span>I want to cook with Cravzi</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How it Works</h2>
            <p className="text-xl text-gray-600">Simple steps to delicious homemade meals</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Customers */}
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="h-6 w-6 text-orange-500 mr-2" />
                For Food Lovers
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                  <p className="text-gray-700">Browse homemade meals from verified cooks in your area</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                  <p className="text-gray-700">Place your order and specify pickup time</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                  <p className="text-gray-700">Pick up fresh, hot meals directly from the cook</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                  <p className="text-gray-700">Enjoy authentic homemade food and share your review</p>
                </div>
              </div>
            </div>

            {/* For Cooks */}
            <div className="bg-green-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <ChefHat className="h-6 w-6 text-green-500 mr-2" />
                For Home Cooks
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                  <p className="text-gray-700">Share your daily menu with photos and availability</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                  <p className="text-gray-700">Receive orders from hungry customers nearby</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                  <p className="text-gray-700">Prepare extra portions of your family meals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">4</div>
                  <p className="text-gray-700">Earn money while sharing your love for cooking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cravzi */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Cravzi?</h2>
            <p className="text-xl text-gray-600">More than just food delivery</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Affordable & Healthy</h3>
              <p className="text-gray-600">Get nutritious homemade meals at prices that won't break the bank</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Empowering Housewives</h3>
              <p className="text-gray-600">Supporting local women entrepreneurs and their culinary talents</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No Delivery Fees</h3>
              <p className="text-gray-600">Pick up directly from cooks - save money and support local community</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Culturally Local</h3>
              <p className="text-gray-600">Authentic regional dishes made with traditional recipes and love</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600">Real stories from our community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Finally found authentic South Indian food that tastes just like home! Priya aunty's sambar is absolutely incredible."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 font-semibold">R</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Rahul K.</p>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"Cravzi helped me turn my passion for cooking into a source of income. I've met so many wonderful people in my neighborhood!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-semibold">S</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sunita M.</p>
                  <p className="text-sm text-gray-600">Home Cook</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"As a student, I can afford healthy meals without compromising on taste. The variety of dishes available is amazing!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-semibold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Ananya P.</p>
                  <p className="text-sm text-gray-600">College Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold">Cravzi</span>
              </div>
              <p className="text-gray-300 mb-4">
                Connecting passionate home cooks with food lovers in your neighborhood. 
                Fresh, authentic, and made with love.
              </p>
              <a 
                href="https://wa.me/918830232516" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-200 inline-flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat with us on WhatsApp</span>
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>cravziadmin@cravzi.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 8830232516</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Cravzi. All rights reserved. | Made with ❤️ for food lovers</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;