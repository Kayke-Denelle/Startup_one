import { Link } from 'react-router-dom';
import React, { useState } from 'react';



 

const LandingPage = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        
        <div className="landing-container">
            <nav className="px-2 sm:px-4 py-4">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src={require('../Img/LogoVolansBlackNoBG.png')} alt="Volans Logo" className="w-12 h-12" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-cor-4">Volans</span>
                    </Link>
                    <div className="flex items-center md:hidden">
                        <button
                            id="menu-toggle"
                            type="button"
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center p-2 ml-3 text-sm text-cor-4 rounded-md hover:bg-cor-2 focus:outline-none focus:ring-2 focus:ring-cor-2"
                        >
                            <span className="sr-only">Open Menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    {/* Menu móvel */}
                    <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <Link to="/about" className="block py-2 pr-4 pl-3 text-cor-4 border-b border-cor-1 hover:bg-cor-4 hover:text-cor-0 md:hover:bg-transparent md:border-0 md:hover:text-cor-1 md:p-0">About</Link>
                            </li>
                            <li>
                                <Link to="/services" className="block py-2 pr-4 pl-3 text-cor-4 border-b border-cor-1 hover:bg-cor-4 hover:text-cor-0 md:hover:bg-transparent md:border-0 md:hover:text-cor-1 md:p-0">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="block py-2 pr-4 pl-3 text-cor-4 border-b border-cor-1 hover:bg-cor-4 hover:text-cor-0 md:hover:bg-transparent md:border-0 md:hover:text-cor-1 md:p-0">Contact</Link>
                            </li>
                            <li>
                                <Link to="/login" className="block py-2 pr-4 pl-3 text-cor-4 border-b border-cor-1 hover:bg-cor-4 hover:text-cor-0 md:hover:bg-transparent md:border-0 md:hover:text-cor-1 md:p-0">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <div class="relative flex items-center n justify-center overflow-hidden z-50">          
        <div class="relative mx-auto h-full px-4 mt-10 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div class="flex flex-col items-center justify-between lg:flex-row py-16">
            <div class="relative hidden lg:mr-16 lg:block lg:w-1/2">
              <div class="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                <img src={require('../Img/LogoVolansBlackNoBG.png')} alt="Volans Logo"/>
              </div>
            </div>
            <div class="relative">
              <div class="lg:max-w-7xl lg:pr-5 z-40">
                <p id="header-texto1" class="flex w-fit px-2 py-2 uppercase rounded-md hover:bg-cor-2 transition ease-in-out">Começe agora mesmo sem nenhum custo inicial de assinatura. 
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#010000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
                <h2 class="text-azul-3 text-5xl uppercase max-w-6xl font-light leading-snug text-g1 sm:text-6xl sm:leading-snug"><span class="text-cor-1 font-bold">Crie seus flashcards</span> e impulsione seus estudos</h2>
                <p class="text-base text-gray-700">Explore flashcards interativos para facilitar a memorização e retenção de conteúdos. Descubra uma maneira divertida e eficaz de estudar e potencializar seu conhecimento!</p>
                <div class="mt-10 flex flex-col items-center md:flex-row">
                  <a href="/" class="mb-3 inline-flex h-12 w-fit items-center justify-center rounded bg-cor-2 px-6 font-medium tracking-wide text-cor-4 shadow-md transition ease-in-out hover:bg-cor-3 focus:outline-none md:mr-4 md:mb-0 md:w-auto">Começe agora</a>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>

      <div className="relative isolate overflow-hidden bg-cor-3 py-24 sm:py-32">
  <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" 
         style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
  </div>
  <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" 
         style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
  </div>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Work with us</h2>
      <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.</p>
    </div>
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
        <a href="/">Open roles <span aria-hidden="true">&rarr;</span></a>
        <a href="/">Internship program <span aria-hidden="true">&rarr;</span></a>
        <a href="/">Our values <span aria-hidden="true">&rarr;</span></a>
        <a href="/">Meet our leadership <span aria-hidden="true">&rarr;</span></a>
      </div>
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base text-gray-300">Offices worldwide</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">12</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base text-gray-300">Full-time colleagues</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">300+</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base text-gray-300">Hours per week</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">40</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="text-base text-gray-300">Paid time off</dt>
          <dd className="text-4xl font-semibold tracking-tight text-white">Unlimited</dd>
        </div>
      </dl>
    </div>
  </div>
</div>


<div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
    <div className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
  </div>
  <div className="mx-auto max-w-4xl text-center">
    <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
    <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Choose the right plan for you</p>
  </div>
  <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
  <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
    <div className="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
      <h3 id="tier-hobby" className="text-base font-semibold leading-7 text-indigo-600">Hobby</h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-5xl font-semibold tracking-tight text-gray-900">$29</span>
        <span className="text-base text-gray-500">/month</span>
      </p>
      <p className="mt-6 text-base leading-7 text-gray-600">The perfect plan if you’re just getting started with our product.</p>
      <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          25 products
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Up to 10,000 subscribers
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Advanced analytics
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          24-hour support response time
        </li>
      </ul>
      <button className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10">Get started today</button>
    </div>
    <div className="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
      <h3 id="tier-enterprise" className="text-base font-semibold leading-7 text-indigo-400">Enterprise</h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className="text-5xl font-semibold tracking-tight text-white">$99</span>
        <span className="text-base text-gray-400">/month</span>
      </p>
      <p className="mt-6 text-base leading-7 text-gray-400">For businesses that need extra features and support.</p>
      <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-400">
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          Unlimited products
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          More than 10,000 subscribers
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          All features
        </li>
        <li className="flex gap-x-3">
          <svg className="h-6 w-5 flex-none text-indigo-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
          12-hour support response time
        </li>
      </ul>
      <button className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white ring-1 ring-inset ring-gray-700 hover:ring-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 sm:mt-10">Get started today</button>
    </div>
  </div>
</div>


      
        </div>
    );
};

export default LandingPage;
