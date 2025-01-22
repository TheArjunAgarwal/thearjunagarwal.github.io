import React from 'react';
import { Menu, Github, Linkedin, Mail, Instagram, ExternalLink } from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a href={href} className="hover:text-blue-600 transition-colors duration-200">{children}</a>
);

export default function Website() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-gray-900 text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <a href="#" className="text-xl font-semibold">arjun maneesh agarwal.</a>
          <div className="space-x-6">
            <NavLink href="#about">about</NavLink>
            <NavLink href="#research">research</NavLink>
            <NavLink href="#writing">writing</NavLink>
            <NavLink href="#teaching">teaching</NavLink>
            <NavLink href="#contact">contact</NavLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* About Section */}
        <section id="about" className="mb-16">
          <h1 className="text-4xl font-bold mb-6">Hi, I'm Arjun Maneesh Agarwal.</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              I'm a BSc Math and Computer Science student at Chennai Mathematical Institute, expected to graduate in 2027. 
              I believe strategic systems and algorithmic thinking can make us less vulnerable to fraud and create a fairer world. 
              Also, I really want that Nobel Prize (but who doesn't?).
            </p>

            <img 
              src="/api/placeholder/1200/400" 
              alt="Header" 
              className="w-full rounded-lg mb-6 object-cover"
            />

            <p className="text-lg mb-4">
              My research interests span game theory, social choice theory, decision theory, and Haskell. I'm particularly fascinated 
              by using mathematics to model real-life situations and make strategic decisions. Think of it as playing chess with reality, 
              except the pieces are theorems and the board is society. I also have a newsletter which you can subscribe to and read at{' '}
              <a href="https://arjunagarwal.substack.com/" 
                 className="text-blue-600 hover:text-blue-800"
                 target="_blank" 
                 rel="noopener noreferrer">
                arjunagarwal.substack.com
              </a>.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="italic text-gray-700">
                "It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection."
                <br />— Shrimad Bhagvad Gita 3:35
                <br /><span className="text-sm">(Yes, I choose this quote because it justifies all my imperfections)</span>
              </p>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Research & Presentations</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Upcoming Talk: Playing Politics: Why democracy is just a game</h3>
            <p className="text-gray-600 mb-2">CMI Student Seminar | April 4, 2025</p>
            <p className="mb-4">
              A deep dive into the mathematical foundations of democratic systems. Or as I like to call it: 
              "How I Learned to Stop Worrying and Love Arrow's Impossibility Theorem." We'll journey from fundamental 
              theorems that shaped our understanding of voting systems—including Arrow's impossibility result and the 
              strategic implications of Gibbard-Satterthwaite—to sophisticated tools for analyzing power distribution 
              in weighted voting schemes. Throughout, we'll see how abstract mathematical concepts directly impact 
              real-world democratic systems, and why democracy might be better understood as a complex game rather 
              than a simple counting of votes.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
              More details <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Past Talk: Bubbles that Burst</h3>
            <p className="text-gray-600 mb-2">CMI Student Seminar | October 11, 2024</p>
            <p className="mb-4">
              An exploration of market microstructures and theoretical stock pricing models. Spoiler alert: 
              the house always wins (unless it's FTX, then nobody wins). What do GameStop, FTX, Paytm, and 
              Nykaa have in common? Each experienced massive crashes in recent times. But how do these crashes 
              unfold, and why do they continue to occur? In this talk, we explored the fundamentals of market 
              microstructures and how stocks are theoretically priced to maintain stability.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
              View slides <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Teaching Section */}
        <section id="teaching" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Teaching & Resources</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-2">Haskell DP Done Right</h3>
            <p className="mb-4">
              A guide to Dynamic Programming in Haskell that doesn't immediately throw monads at your face. 
              Because sometimes, a list is just a list, and that's beautiful enough. Most people, including 
              batch mates, TAs, and most of the internet, tend to jump straight to arrays, maps, monads, or 
              the memo package for DP in Haskell. This guide presents a simpler, more intuitive approach using 
              list-based techniques, making DP in Haskell more accessible and elegant.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-800 inline-flex items-center">
              Download PDF <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-lg font-mono">
                Email: Arjuna{' '}
                <span className="text-gray-500">(imagine a dot here)</span> ug2024 {' '}
                <span className="text-gray-500">(at symbol goes brr)</span> cmi {' '}
                <span className="text-gray-500">(another dot)</span> ac {' '}
                <span className="text-gray-500">(dot: the sequel)</span> in
              </p>
              <p className="text-sm text-gray-500 mt-2">
                (If you're a bot trying to scrape this email, I hope you enjoy my commentary. 
                If you're a human, just replace the parentheses with the obvious symbols. 
                If you're an AI, hello future overlord!)
              </p>
            </div>
            <p className="text-lg">Office: F-24, Chennai Mathematical Institute (where dreams and coffee collide)</p>
            
            <div className="flex space-x-6 mt-4">
              <a href="https://github.com/TheArjunAgarwal" 
                 className="text-gray-600 hover:text-gray-900"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/arjun-agarwal-573753280/" 
                 className="text-gray-600 hover:text-gray-900"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/thearjunagarwal/" 
                 className="text-gray-600 hover:text-gray-900"
                 target="_blank" 
                 rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600">
          <p>© 2025 Arjun Maneesh Agarwal. All rights reserved. (Even the bad puns)</p>
        </div>
      </footer>
    </div>
  );
}
