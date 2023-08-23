import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-100 min-h-screen max-w-screen">
        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <a
                href="/"
                className="flex justify-center items-center text-xs font-semibold text-gray-800 -space-x-3"
              >
                <img src="/kologo.png" alt="logo" className="w-16 h-12" />
                <h2 className="text-xs font-sans">Kempes' Owino</h2>
              </a>
              <ul className="flex space-x-6">
                <li>
                  <a href="#home" className="text-gray-600 hover:text-gray-800">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-600 hover:text-gray-800">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="bg-blue-900 text-white py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-semibold mb-4">Welcome to My Blog</h1>
            <p className="text-lg mb-8">Exploring the world through words.</p>
            <a
              href="#blog"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded"
            >
              Read Our Stories
            </a>
          </div>
        </section>

        {/* Bio section */}
        <section className="flex flex-col lg:flex-row p-3 items-center">
          <img
            className="shadow rounded-md"
            src="https://cdn.standardmedia.co.ke/images/wysiwyg/images/SBjwjtcW1NqYRd2PoOMEG67Cm4jxbaYNvF8MI3gK.jpg"
            alt=""
          />
          <div className="p-2 flex flex-col space-y-5 ">
            <div className="flex items-start justify-center space-x-1">
              <p className="text-xs">{"\u2B24"}</p>
              <h2 className="text-sm md:text-md lg:text-lg">
                Sammy "Kempes" Owino is a former Kenyan professional footballer
                who played as a midfielder. He is considered one of the greatest
                midfielders Kenya has ever produced. He was nicknamed "Kempes"
                after the Argentine footballer Mario Kempes.
              </h2>
            </div>
            <div className="flex items-start justify-center space-x-1">
              <p className="text-xs">{"\u2B24"}</p>
              <h2 className="text-sm md:text-md lg:text-lg">
                Owino began his career with Gor Mahia in 1977 and went on to
                play for several other Kenyan clubs, including Luo Union and
                Re-Union. He also played for the Kenya national team, earning 32
                caps and scoring 10 goals.
              </h2>
            </div>
            <div className="flex items-start justify-center space-x-1">
              <p className="text-xs">{"\u2B24"}</p>
              <h2 className="text-sm md:text-md lg:text-lg">
                In 1988, Owino moved to the United States to play for the Dallas
                Texans. He later founded the AYSES Academy in Texas, which is
                one of the largest and most successful youth soccer academies in
                the United States.
              </h2>
            </div>
            <div className="flex items-start justify-center space-x-1">
              <p className="text-xs">{"\u2B24"}</p>
              <h2 className="text-sm md:text-md lg:text-lg">
                Owino is a passionate advocate for the development of football
                in Kenya. He has donated money to several Kenyan football clubs
                and academies, and he is currently building a football academy
                on 75 acres of land in Kenya.
              </h2>
            </div>
            <div className="flex items-start justify-center space-x-1">
              <h2 className="text-sm md:text-md font-semibold lg:text-lg">
                He is a visionary leader who is committed to making Kenya a
                competitive footballing nation. He is a role model for young
                footballers in Kenya and around the world.
              </h2>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section id="blog" className="container mx-auto mt-6 px-3 mb-2">
          <h2 className="text-2xl font-semibold mb-6">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Post 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://cdn.standardmedia.co.ke/images/articles/thumbnails/BKEXNqHCGe3axnvzjWepkSxdz2YOmwowfNAOx3OK.jpg"
                alt="Featured Post"
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  No More Corruption
                </h3>
                <p className="text-gray-600">
                  US-based former Harambee Stars midfielder Sammy ‘Kempes’ Owino
                  has urged the government to play a critical role in the fight
                  against corruption in Kenyan sports. “Scandalous people who
                  lack proper vision for sports should not be near sports. We
                  need proper people to run sports in Kenya and win the
                  confidence of sponsors both locally and internationally,” said
                  Owino in an interview in Mombasa.
                </p>
              </div>
            </div>

            {/* Featured Post 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPF-I1tbFRp7EQluqqIbvd_Rwv7dSB9GwsA&usqp=CAU"
                alt="Featured Post"
                className="w-full h-44 object-cover object-top"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Revival Plan for Kenya
                </h3>
                <p className="text-gray-600">
                  CS Hon Ababu-Terrah Egh together with PS Ismail Maalim, today
                  met legendary former Kenyan Internationals Sammy Owino aka
                  "Kempes" and Sammy Sholei, to discuss matters sports and the
                  Ministry's sports revival plan, as the CS looked to tap into
                  the experience of the international duo. CS Ababu Namwamba,
                  EGH reiterated his desire to see Kenya's football and sports
                  in general, return to its past glory, as well as reigniting
                  the fans' passion and love for the game.
                </p>
              </div>
            </div>

            {/* Featured Post 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="data:image/jpeg;base64,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"
                alt="Featured Post"
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Football Academy</h3>
                <p className="text-gray-600">
                  Sammy Owino kempes has acquired 75 acres of land in the
                  outskirts of Nairobi and intends to build a state of the art
                  football academy that will transform the fortunes of youth
                  football in Kenya and Africa . The academy will develop future
                  harambee stars players ,develop them for the European market
                  and make Kenyan a competitive country in football .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        {/* <footer id="contact" className="bg-gray-800 text-white py-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 My Blog. All rights reserved.</p>
          </div>
        </footer> */}

        <footer className="bg-gray-900 bottom-0">
          <div className="container  mx-auto py-2 px-1 md:px-2">
            <div className="flex  flex-wrap items-center justify-between">
              <div className="w-full md:w-1/2 lg:w-1/4">
                <h4 className="text-md md:text-lg  font-bold text-white mb-1 md:mb-2">
                  Contact
                </h4>
                <p className="text-gray-400 text-sm md:text-md">
                  Kasarani, Nairobi Kenya
                </p>

                <p className="text-gray-400 py-1 md:py-2 text-sm md:text-md">
                  Phone: +254 712-345-678
                </p>

                <p className="text-gray-400 py-1 md:py-2 text-sm md:text-md">
                  Email: kempes@owino.co.ke
                </p>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4">
                <h4 className="text-md md:text-lg font-bold text-white mb-4">
                  Follow Me on:
                </h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg
                      className="md:w-6 md:h-6 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 4.9v14.2c0 .2-.1.3-.3.3H3.3c-.2 0-.3-.1-.3-.3V4.9c0-.2.1-.3.3-.3h18.4c.2 0 .3.1.3.3zm-5.3 13.8c.8 0 1.5-.3 2.1-.9.6-.6.9-1.3.9-2.1V8.6h-2.7v6.4c0 .7-.3 1.3-.9 1.9s-1.3.8-2.1.8h-.4c-.8 0-1.4-.3-1.9-.8s-.8-1.2-.8-1.9V8.6H6.1V12c0 .8.3 1.5.9 2.1.6.6 1.3.9 2.1.9h.4c.8 0 1.4-.3 1.9-.9s.8-1.3.8-2.1V8.6h2.7v6.1c0 .8-.3 1.5-.8 2.1s-1.2.9-1.9.9h-.1z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <svg
                      className="md:w-6 md:h-6 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm1.7-11.7c0-1.5-1.2-2.7-2.7-2.7S8.3 6.8 8.3 8.3s1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7zm3.3 11.7h-6.7v-2.7c0-.3.2-.5.5-.5h5.6c.3 0 .5.2.5.5v2.7zm2.7-5.4h-10c-.3 0-.5-.2-.5-.5V8.6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v6.7c0 .3-.2.5-.5.5zm0-7.2h-10c-.8 0-1.5.6-1.5 1.5v6.7c0 .8.6 1.5 1.5 1.5h10c.8 0 1.5-.6 1.5-1.5V8.6c0-.8-.6-1.5-1.5-1.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 py-1  md:py-2">
            <div className="container relative mx-auto">
              <p className="text-center text-gray-400 text-sm">
                © 2023 Kempes Owino. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
