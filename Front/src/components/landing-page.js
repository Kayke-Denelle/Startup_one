import { Link } from 'react-router-dom';
import React, { useState } from 'react';



 

const LandingPage = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
      <body className="bg-cor-0">
        <div className="landing-container" class="relative isolate overflow-hidden">
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-cor-2 to-cor-1 opacity-20"
              style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
            </div>
          </div>
          <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-cor-2 to-cor-1 opacity-20"
              style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
            </div>
          </div>
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
              <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <Link to="/about" className="block py-2 pr-4 pl-3 text-cor-4 border-b border-cor-1 hover:bg-cor-4 hover:text-cor-0 md:hover:bg-transparent md:border-0 md:hover:text-cor-1 md:p-0 transition ease-in-out">About</Link>
                  </li>
                  <li>
                    <Link to="/services" className="block py-2 pr-4 pl-3 text-cor-4 border-b border-cor-1 hover:bg-cor-4 hover:text-cor-0 md:hover:bg-transparent md:border-0 md:hover:text-cor-1 md:p-0 transition ease-in-out">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="block py-2 pr-4 pl-3 text-cor-4 border-b border-cor-1 hover:bg-cor-4 hover:text-cor-0 md:hover:bg-transparent md:border-0 md:hover:text-cor-1 md:p-0 transition ease-in-out">Contact</Link>
                  </li>
                  <li>
                    <Link to="/login" className="block py-2 pr-4 pl-3 text-cor-4 border-b border-cor-1 hover:bg-cor-4 hover:text-cor-0 md:hover:bg-transparent md:border-0 md:hover:text-cor-1 md:p-0 transition ease-in-out">Login</Link>
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
                    <img src={require('../Img/LogoVolansBlackNoBG.png')} alt="Volans Logo" />
                  </div>
                </div>
                <div class="relative">
                  <div class="lg:max-w-7xl lg:pr-5 z-40">
                    <p id="header-texto1" class="text-cor-4 flex w-fit px-2 py-2 uppercase rounded-md hover:bg-cor-2 transition ease-in-out">Comece agora mesmo sem nenhum custo inicial de assinatura.
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#010000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </p>
                    <h2 class="text-cor-4 text-5xl uppercase max-w-6xl font-light leading-snug text-g1 sm:text-6xl sm:leading-snug"><span class="text-cor-1 font-bold">Crie seus flashcards</span> e impulsione seus estudos</h2>
                    <p class="text-base text-cor-4">Explore flashcards interativos para facilitar a memorização e retenção de conteúdos. Descubra uma maneira divertida e eficaz de estudar e potencializar seu conhecimento!</p>
                    <div class="mt-10 flex flex-col items-center md:flex-row">
                      <a href="/" class="mb-3 inline-flex h-12 w-fit items-center justify-center rounded bg-cor-2 px-6 font-medium tracking-wide text-cor-4 shadow-md transition ease-in-out hover:bg-cor-3 focus:outline-none md:mr-4 md:mb-0 md:w-auto">Comece agora</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative isolate overflow-hidden bg-cor-2 py-24 sm:py-32">
            <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
              <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-cor-1 to-cor-3 opacity-20"
                style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
              </div>
            </div>
            <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
              <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-cor-1 to-cor-3 opacity-20"
                style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 class="text-cor-4 text-5xl uppercase max-w-6xl font-light leading-snug text-g1 sm:text-6xl sm:leading-snug"><span class="text-cor-4 font-bold">Fortaleça </span>sua base de conhecimento</h2>
                <p className="text-cor-4/70 mt-8 text-pretty text-lg font-medium sm:text-xl">Com o Volans, aprenda de forma eficaz com flashcards e repetição espaçada, fixando informações rapidamente para maximizar seu aprendizado.</p>
              </div>
              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col-reverse gap-1">
                    <dt className="text-base text-cor-4">Usuários registrados</dt>
                    <dd className="text-4xl font-semibold tracking-tight text-cor-0">2</dd>
                  </div>
                  <div div className="flex flex-col-reverse gap-1">
                    <dt className="text-base text-cor-0">Baralhos criados</dt>
                    <dd className="text-4xl font-semibold tracking-tight text-cor-0">10+</dd>
                  </div>
                  <div className="flex flex-col-reverse gap-1">
                    <dt className="text-base text-cor-0">Cartas criadas</dt>
                    <dd className="text-4xl font-semibold tracking-tight text-cor-0">5+</dd>
                  </div>
                  <div className="flex flex-col-reverse gap-1">
                    <dt className="text-base text-cor-0">Usuários premium</dt>
                    <dd className="text-4xl font-semibold tracking-tight text-cor-0">0</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
            <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
              <div className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-cor-2 to-cor-1 opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-base uppercase font-semibold leading-7 text-cor-1">Preços</h2>
              <p className="mt-2 text-cor-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Escolha o melhor plano para você</p>
            </div>
            <p className="mx-auto text-cor-4 mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-cor-5 sm:text-xl/8">Escolha o plano Free para começar ou o Premium para acesso total a recursos avançados e personalização.</p>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
              <div className="rounded-3xl rounded-t-3xl bg-cor-0/70 p-8 ring-1 ring-cor-2 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
                <h3 id="tier-hobby" className="text-base font-semibold leading-7 text-cor-2">Plano gratuito</h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-cor-4">R$0</span>
                  <span className="text-base text-cor-4/70">/mês</span>
                </p>
                <p className="mt-6 text-base leading-7 text-cor-4/70">O plano perfeito para quem está começando.</p>
                <ul className="mt-8 space-y-3 text-sm leading-6 text-cor-4/70 sm:mt-10">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-cor-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    3 Baralhos
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-cor-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    10 Cartas por baralho
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-cor-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    Limite Diário de Revisão
                  </li>
                </ul>
                <button className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-cor-2 ring-1 ring-inset ring-cor-2 hover:ring-cor-1 hover:text-cor-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cor-4 sm:mt-10 transition ease-in-out">Comece agora</button>
              </div>
              <div className="relative rounded-3xl bg-cor-4/70 p-8 shadow-2xl ring-1 ring-cor-4/10 sm:p-10">
                <h3 id="tier-enterprise" className="text-base font-semibold leading-7 text-cor-1">Plano Premium</h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span className="text-5xl font-semibold tracking-tight text-cor-0">R$19,99</span>
                  <span className="text-base text-cor-0/70">/mês</span>
                </p>
                <p className="mt-6 text-base leading-7 text-cor-0">O plano Premium oferece baralhos e cartas ilimitados, revisão sem limite diário e suporte em até 24h.</p>
                <ul className="mt-8 space-y-3 text-sm leading-6 text-cor-0">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-cor-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    Baralhos ilimitados
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-cor-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    Cartas ilimitadas
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-cor-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    Sem limite de revisão diário
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-cor-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                    </svg>
                    Suporte em até 24h
                  </li>
                </ul>
                <button className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-cor-1 ring-1 ring-inset ring-cor-1 hover:ring-cor-3 hover:text-cor-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:cor-0 sm:mt-10 transition ease-in-out">Comece agora</button>
              </div>
            </div>
          </div>
        </div>
        
        <footer class="bg-cor-0">
          <div class="container px-6 py-8 mx-auto">
            <div class="flex flex-col items-center text-center">
              <Link to="/" className="flex items-center">
                <img src={require('../Img/LogoVolansBlackNoBG.png')} alt="Volans Logo" class="w-auto h-16" />
              </Link>
              <p class="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                <button class="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                  <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z" fill="currentColor"></path>
                  </svg>
                  <span class="mx-1">View Demo</span>
                </button>
                <button class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Get started</button>
              </div>
            </div>
            <hr class="my-10 border-gray-200 dark:border-gray-700" />
            <div class="flex flex-col items-center sm:flex-row sm:justify-between">
              <p class="text-sm text-gray-500">© Copyright 2021. All Rights Reserved.</p>
              <div class="flex mt-3 -mx-2 sm:mt-0">
                <Link to="/" className="flex items-center" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </Link>
                <Link to="/" className="flex items-center" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </Link>
                <Link to="/" className="flex items-center" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    );
};

export default LandingPage;
