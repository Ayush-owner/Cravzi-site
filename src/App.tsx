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
      <section className="pt-16 pb-20 animated-gradient-hero relative overflow-hidden">
        {/* Floating Ingredient Icons */}
        <svg className="absolute left-8 top-12 w-12 h-12 animate-float-slow opacity-70 z-10" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="28" fill="#FF6347"/><ellipse cx="32" cy="32" rx="16" ry="8" fill="#fff3"/><ellipse cx="32" cy="38" rx="10" ry="4" fill="#fff5"/></svg> {/* Tomato */}
        <svg className="absolute right-12 top-24 w-10 h-10 animate-float-medium opacity-70 z-10" viewBox="0 0 64 64" fill="none"><rect x="20" y="20" width="24" height="24" rx="12" fill="#FFA500"/><rect x="28" y="16" width="8" height="16" rx="4" fill="#7CFC00"/></svg> {/* Carrot */}
        <svg className="absolute left-1/2 bottom-8 w-14 h-14 animate-float-fast opacity-60 z-10" style={{transform: 'translateX(-50%)'}} viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="40" rx="18" ry="10" fill="#F5DEB3"/><rect x="24" y="28" width="16" height="8" rx="4" fill="#DEB887"/></svg> {/* Bread */}
        {/* New Floating Food Items */}
        <svg className="absolute left-1/4 top-32 w-10 h-10 animate-float-medium opacity-70 z-10" viewBox="0 0 64 64" fill="none"><path d="M32 8c8 0 16 8 16 16s-8 16-16 16S16 32 16 24 24 8 32 8z" fill="#FFD93B"/><path d="M32 24l8 8-8 8-8-8 8-8z" fill="#FF6F61"/></svg> {/* Pizza Slice */}
        <svg className="absolute right-1/4 top-10 w-9 h-9 animate-float-slow opacity-60 z-10" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="40" rx="12" ry="8" fill="#F7C1D9"/><ellipse cx="32" cy="36" rx="6" ry="3" fill="#fff"/><circle cx="32" cy="32" r="4" fill="#F49AC2"/></svg> {/* Cupcake */}
        <svg className="absolute left-20 bottom-24 w-8 h-8 animate-float-fast opacity-60 z-10" viewBox="0 0 64 64" fill="none"><path d="M32 48c-8-4-12-12-12-20 0-4 4-8 12-8s12 4 12 8c0 8-4 16-12 20z" fill="#7ED957"/><ellipse cx="32" cy="36" rx="6" ry="2" fill="#4CAF50"/></svg> {/* Leafy Green */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full p-6 shadow-lg">
                <ChefHat className="h-16 w-16 text-orange-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Home-cooked food,<br />
              <span className="text-white drop-shadow-lg">one click away.</span>
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
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 w-full sm:w-auto justify-center"
              >
                <span>🍱</span>
                <span>I want to order tiffin</span>
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScxl8Gduk6Ab3UnS1hbU97n10AWwHUJu0RmGn_3_IB2fY1JKQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 w-full sm:w-auto justify-center"
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
            <div className="bg-orange-50 rounded-2xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Users className="h-6 w-6 text-orange-500 mr-2" />
                For Food Lovers
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-300 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1 shadow-md">
                    {/* Magnifying Glass Icon */}
                    <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                  </div>
                  <p className="text-gray-700">Browse homemade meals from verified cooks in your area</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-orange-300 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1 shadow-md">
                    {/* Clock Icon */}
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <p className="text-gray-700">Place your order and specify pickup time</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-green-300 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1 shadow-md">
                    {/* Bag Icon */}
                    <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 7V6a6 6 0 1 1 12 0v1"/><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 11a4 4 0 0 1-8 0"/></svg>
                  </div>
                  <p className="text-gray-700">Pick up fresh, hot meals directly from the cook</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-200 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1 shadow-md">
                    {/* Star Icon */}
                    <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 0 0 .95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 0 0-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 0 0-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 0 0-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 0 0 .95-.69l1.286-3.967z"/></svg>
                  </div>
                  <p className="text-gray-700">Enjoy authentic homemade food and share your review</p>
                </div>
              </div>
            </div>

            {/* For Cooks */}
            <div className="bg-green-50 rounded-2xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <ChefHat className="h-6 w-6 text-green-500 mr-2" />
                For Home Cooks
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-green-300 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1 shadow-md">
                    {/* Menu/Photo Icon */}
                    <svg className="w-6 h-6 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M4 10h16"/><circle cx="8.5" cy="7.5" r="1.5"/></svg>
                  </div>
                  <p className="text-gray-700">Share your daily menu with photos and availability</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-300 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1 shadow-md">
                    {/* Order/Notification Icon */}
                    <svg className="w-6 h-6 text-yellow-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V7a8 8 0 1 0-16 0v5c0 6 8 10 8 10z"/></svg>
                  </div>
                  <p className="text-gray-700">Receive orders from hungry customers nearby</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-orange-300 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1 shadow-md">
                    {/* Pot/Meal Icon */}
                    <svg className="w-6 h-6 text-orange-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="8" rx="8" ry="4"/><path d="M4 8v6c0 2.21 3.58 4 8 4s8-1.79 8-4V8"/></svg>
                  </div>
                  <p className="text-gray-700">Prepare extra portions of your family meals</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-200 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1 shadow-md">
                    {/* Money/Heart Icon */}
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"/></svg>
                  </div>
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

          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 w-80 max-w-full">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Affordable & Healthy</h3>
              <p className="text-gray-600">Get nutritious homemade meals at prices that won't break the bank</p>
            </div>

            <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 w-80 max-w-full">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Empowering Housewives</h3>
              <p className="text-gray-600">Supporting local women entrepreneurs and their culinary talents</p>
            </div>

            <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 w-80 max-w-full">
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
            <div className="bg-orange-50 rounded-2xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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

            <div className="bg-green-50 rounded-2xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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

            <div className="bg-blue-50 rounded-2xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
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
                className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
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