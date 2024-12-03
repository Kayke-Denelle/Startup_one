import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const LandingPage = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Geist+Mono:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className="bg-cor-0 relative isolate overflow-hidden transition ease-in-out duration-75">
          <div id="cover" className="landing-container">
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
                  <svg className="h-auto w-14 flex-none text-cor-4" version="1.1" viewBox="0 0 1080 1080" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path transform="translate(775,409)" d="m0 0h36l21 2 26 5 21 6 24 10 25 13 22 15 13 11 10 8 19 19 1 5 7-5h6l7 6 2 5-15 30-12 19-10 14-10 13-12 14-12 13-12 11-15 11-17 10-17 6-12 2-14-1-15-7-15-10-14-14-9-14-8-17-5-17-3-15-2-24 2-19 4-14 7-17 12-20 3-4-11 3-13 7-11 9-9 10-9 16-5 14-4 17-2 15-3 2-15-8-20-7-31-8-63-14-25-7-24-10-10-7v-3l26-15 18-10 26-13 30-13 31-11 28-8 31-6zm40 48m95 27-10 2-8 5-5 5-5 10-1 8 2 11 6 10 9 6 5 2 8 1 9-2 8-5 7-8 3-7 1-9-2-10-6-10-9-6-5-2z" />
                    <path transform="translate(315,91)" d="m0 0 32 2 38 5 38 8 28 8 31 11 30 13 20 10 21 12 19 12 17 12 12 9 16 13 11 9 15 14 8 7 21 21 7 8 12 14 8 9 11 14 14 18 13 19 8 11 14 22 5 8v4l-13 2h-8l-14-19-11-14-9-11-18-20-11-12-9-9-8-7-12-11-11-9-15-12-14-10-27-18-22-13-28-15-28-13-30-12-22-8-36-11-44-11-9-3-7-10-6-8-11-12-7-7-17-13-3-3z" />
                    <path transform="translate(361,387)" d="m0 0h40l24 4 22 6 25 10 17 8 19 11 21 14 19 14v4l-27 14-28 19-14 12-10 8-18 18-3-1-7-19-9-21-10-17-9-12-9-10-12-12-17-12-12-7-24-10-20-6-1-4 2-2 23-6z" />
                    <path transform="translate(49,438)" d="m0 0 10 2 18 6 31 13 35 16 29 14 74 36 20 10 19 10 40 20 19 10 15 8 1 4-1 1-10-1-69-14-53-12-45-12-35-11-25-10-16-8-12-8-15-13-9-10-10-15-8-17-5-14 1-4z" />
                    <path transform="translate(59,628)" d="m0 0 9 2 15 3 19 2 14 1h72l64-3 78-5h10l-1 5-19 10-25 12-37 16-27 10-31 10-25 6-18 3h-22l-17-4-16-8-9-7-8-7-11-14-8-13-8-15z" />
                    <path transform="translate(383,170)" d="m0 0 10 2 34 9 29 9 25 9 29 12 25 12 23 12 23 14 16 11 19 14 11 9 15 13 16 15 8 8 7 8 10 11 11 14 13 17 12 18-1 4-13 2h-10l-13-19-11-14-12-13-7-8-16-15-14-11-13-10-15-10-18-11-16-9-15-8-24-11-27-11-37-13-34-10-12-3-8-16-7-11-11-13-3-3z" />
                    <path transform="translate(518,516)" d="m0 0 5 1 14 8 19 8 20 6 25 5 49 7 34 5 13 4 3 1-1 3-24 6-35 11-53 18-22 8-5-1-10-7-17-7-24-6-24-4-31-4-1-4 14-15 7-8 12-12 14-11 5-4z" />
                    <path transform="translate(729,578)" d="m0 0 5 1-1 3-11 7-16 11-21 14-24 15-17 10-25 14-19 10-24 12-30 13-38 14-38 11-28 6h-5v-4l9-12 8-9 8-7 13-11 15-10 15-9 16-9 28-13 32-13 43-15 54-16z" />
                    <path transform="translate(61,529)" d="m0 0 6 2 25 10 30 10 50 14 49 12 46 10 72 15 5 2-1 4-54 5-23 2-53 3h-52l-17-2-21-7-16-8-11-8-12-11-8-10-8-14-5-12-3-11v-5z" />
                    <path transform="translate(336,654)" d="m0 0h5v4l-8 7-37 37-8 7-11 10-11 9-16 13-17 12-16 10-16 8-18 5-13 1-15-2-13-5-12-7-13-11-9-9-1-3 2-3 69-20 42-14 35-13 34-14 33-15z" />
                    <path transform="translate(771,616)" d="m0 0 4 1-4 17-9 27-13 28-12 20-14 20-12 14-7 8-11 12-9 9-8 7-12 10-16 8-15 5-12 2h-19l-12-2-15-5-5-3v-3l22-13 11-7 28-19 21-16 22-18 10-9 8-7 15-14 21-21 7-8 10-11 9-11 14-17z" />
                    <path transform="translate(751,595)" d="m0 0h3l-1 4-13 22-14 19-7 9-9 10-7 8-15 15-8 7-18 14-14 9-18 11-28 13-21 8-13 1h-15l-18-2-21-5-6-2v-3l50-25 23-11 22-12 26-14 25-14 27-16 24-15 36-24z" />
                    <path transform="translate(344,681)" d="m0 0 4 2-7 14-10 18-13 22-13 21-17 25-14 19-8 10-11 13-9 11-25 25-8 7-15 12-8 6-4-1-1-4v-13l-3-26-3-15 5-5 12-11 11-9 10-9 11-9 11-10 11-9 11-10 11-9 7-7 8-7 12-11 30-27 12-11z" />
                    <path transform="translate(430,240)" d="m0 0 16 4 35 11 30 12 29 14 20 11 14 9 17 12 13 10 14 12 16 15 7 8 11 12 13 17 7 10v4l-12 5-26-26-8-7-14-12-16-12-14-10-18-11-18-10-16-8-20-9-27-10-32-9-4-9-8-15-8-10-2-3z" />
                    <path transform="translate(421,608)" d="m0 0 16 2 49 8 16 4 2 3-10 7-39 26-12 9-13 10-13 11-8 7-10 9-17 17-7 8h-3v-19l3-16 5-16 7-17 10-19 14-21 9-12z" />
                    <path transform="translate(462,303)" d="m0 0 8 1 27 9 22 9 23 11 22 13 20 14 13 11 8 7 17 17 9 10 5 7-1 3-15 6-5-1-12-11-14-11-17-13-15-10-19-11-19-9-21-7-16-3-2-1-12-27-7-10z" />
                    <path transform="translate(788,649)" d="m0 0h3l1 3-5 33-6 25-7 21-9 20-12 20-13 16-14 14-15 11-15 9-21 9-12 4-4-1 1-4 23-23h2l2-4 12-12 7-8 9-10 9-11 14-18 11-16 11-17 11-20 9-21 7-19z" />
                    <path transform="translate(491,365)" d="m0 0 7 1 22 8 25 13 15 10 14 11 12 11 10 10-1 4-10 4-8 6-5-1-13-11-20-13-23-12-14-6-5-2-3-20-4-8z" />
                    <path transform="translate(348,724)" d="m0 0h4l3 14 4 9-1 4-14 20-12 14-9 11-10 10-7 8-11 11-8 7-6 5-2-1 1-5 12-16 12-17 17-26 14-24 10-20z" />
                    <path transform="translate(812,668)" d="m0 0 4 2 6 11 3 10 1 15-2 12-5 12-7 11-12 14-9 8-2 3h-3l1-6 7-15 7-22 6-28 4-26z" />
                  </svg>
                  <span className="ps-2 self-center text-xl font-semibold whitespace-nowrap dark:text-cor-4">Volans</span>
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
                  <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                      <a href="#about" className="cursor-pointer block py-2 pr-4 pl-3 text-cor-4 border-b border-cor-1 hover:bg-cor-1 hover:text-cor-0 md:py-1 md:hover:bg-transparent md:border-0 md:hover:text-cor-1 md:p-0 transition ease-in-out">Sobre</a>
                    </li>
                    <li>
                      <a href="#prices" className="cursor-pointer block py-2 pr-4 pl-3 text-cor-4 border-b border-cor-1 hover:bg-cor-1 hover:text-cor-0 md:py-1 md:hover:bg-transparent md:border-0 md:hover:text-cor-1 md:p-0 transition ease-in-out duration-300">Preços</a>
                    </li>
                    <li>
                      <a href="#footer" className="cursor-pointer block py-2 pr-4 pl-3 text-cor-4 border-b border-cor-1 hover:bg-cor-1 hover:text-cor-0 md:py-1 md:hover:bg-transparent md:border-0 md:hover:text-cor-1 md:p-0 transition ease-in-out duration-300">Contato</a>
                    </li>
                    <li>
                      <Link to="/login" className="cursor-pointer block py-2 pr-4 pl-3 text-cor-4 border-b border-cor-1 hover:bg-cor-1 hover:text-cor-0 md:py-1 md:hover:bg-transparent md:border-0 md:hover:text-cor-1 md:p-0 transition ease-in-out duration-300">Login</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div class="relative h-screen w-screen flex items-center justify-center overflow-hidden z-50">
              <div class="relative h-screen w-screen flex items-center justify-normal mx-auto px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                <div class="flex flex-col items-center justify-between lg:flex-row">
                  <div class="relative hidden lg:mr-16 lg:block lg:w-1/2">
                    <div class="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                      <svg className="h-auto w-96 flex-none text-cor-1" version="1.1" viewBox="0 0 1080 1080" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path transform="translate(775,409)" d="m0 0h36l21 2 26 5 21 6 24 10 25 13 22 15 13 11 10 8 19 19 1 5 7-5h6l7 6 2 5-15 30-12 19-10 14-10 13-12 14-12 13-12 11-15 11-17 10-17 6-12 2-14-1-15-7-15-10-14-14-9-14-8-17-5-17-3-15-2-24 2-19 4-14 7-17 12-20 3-4-11 3-13 7-11 9-9 10-9 16-5 14-4 17-2 15-3 2-15-8-20-7-31-8-63-14-25-7-24-10-10-7v-3l26-15 18-10 26-13 30-13 31-11 28-8 31-6zm40 48m95 27-10 2-8 5-5 5-5 10-1 8 2 11 6 10 9 6 5 2 8 1 9-2 8-5 7-8 3-7 1-9-2-10-6-10-9-6-5-2z" />
                        <path transform="translate(315,91)" d="m0 0 32 2 38 5 38 8 28 8 31 11 30 13 20 10 21 12 19 12 17 12 12 9 16 13 11 9 15 14 8 7 21 21 7 8 12 14 8 9 11 14 14 18 13 19 8 11 14 22 5 8v4l-13 2h-8l-14-19-11-14-9-11-18-20-11-12-9-9-8-7-12-11-11-9-15-12-14-10-27-18-22-13-28-15-28-13-30-12-22-8-36-11-44-11-9-3-7-10-6-8-11-12-7-7-17-13-3-3z" />
                        <path transform="translate(361,387)" d="m0 0h40l24 4 22 6 25 10 17 8 19 11 21 14 19 14v4l-27 14-28 19-14 12-10 8-18 18-3-1-7-19-9-21-10-17-9-12-9-10-12-12-17-12-12-7-24-10-20-6-1-4 2-2 23-6z" />
                        <path transform="translate(49,438)" d="m0 0 10 2 18 6 31 13 35 16 29 14 74 36 20 10 19 10 40 20 19 10 15 8 1 4-1 1-10-1-69-14-53-12-45-12-35-11-25-10-16-8-12-8-15-13-9-10-10-15-8-17-5-14 1-4z" />
                        <path transform="translate(59,628)" d="m0 0 9 2 15 3 19 2 14 1h72l64-3 78-5h10l-1 5-19 10-25 12-37 16-27 10-31 10-25 6-18 3h-22l-17-4-16-8-9-7-8-7-11-14-8-13-8-15z" />
                        <path transform="translate(383,170)" d="m0 0 10 2 34 9 29 9 25 9 29 12 25 12 23 12 23 14 16 11 19 14 11 9 15 13 16 15 8 8 7 8 10 11 11 14 13 17 12 18-1 4-13 2h-10l-13-19-11-14-12-13-7-8-16-15-14-11-13-10-15-10-18-11-16-9-15-8-24-11-27-11-37-13-34-10-12-3-8-16-7-11-11-13-3-3z" />
                        <path transform="translate(518,516)" d="m0 0 5 1 14 8 19 8 20 6 25 5 49 7 34 5 13 4 3 1-1 3-24 6-35 11-53 18-22 8-5-1-10-7-17-7-24-6-24-4-31-4-1-4 14-15 7-8 12-12 14-11 5-4z" />
                        <path transform="translate(729,578)" d="m0 0 5 1-1 3-11 7-16 11-21 14-24 15-17 10-25 14-19 10-24 12-30 13-38 14-38 11-28 6h-5v-4l9-12 8-9 8-7 13-11 15-10 15-9 16-9 28-13 32-13 43-15 54-16z" />
                        <path transform="translate(61,529)" d="m0 0 6 2 25 10 30 10 50 14 49 12 46 10 72 15 5 2-1 4-54 5-23 2-53 3h-52l-17-2-21-7-16-8-11-8-12-11-8-10-8-14-5-12-3-11v-5z" />
                        <path transform="translate(336,654)" d="m0 0h5v4l-8 7-37 37-8 7-11 10-11 9-16 13-17 12-16 10-16 8-18 5-13 1-15-2-13-5-12-7-13-11-9-9-1-3 2-3 69-20 42-14 35-13 34-14 33-15z" />
                        <path transform="translate(771,616)" d="m0 0 4 1-4 17-9 27-13 28-12 20-14 20-12 14-7 8-11 12-9 9-8 7-12 10-16 8-15 5-12 2h-19l-12-2-15-5-5-3v-3l22-13 11-7 28-19 21-16 22-18 10-9 8-7 15-14 21-21 7-8 10-11 9-11 14-17z" />
                        <path transform="translate(751,595)" d="m0 0h3l-1 4-13 22-14 19-7 9-9 10-7 8-15 15-8 7-18 14-14 9-18 11-28 13-21 8-13 1h-15l-18-2-21-5-6-2v-3l50-25 23-11 22-12 26-14 25-14 27-16 24-15 36-24z" />
                        <path transform="translate(344,681)" d="m0 0 4 2-7 14-10 18-13 22-13 21-17 25-14 19-8 10-11 13-9 11-25 25-8 7-15 12-8 6-4-1-1-4v-13l-3-26-3-15 5-5 12-11 11-9 10-9 11-9 11-10 11-9 11-10 11-9 7-7 8-7 12-11 30-27 12-11z" />
                        <path transform="translate(430,240)" d="m0 0 16 4 35 11 30 12 29 14 20 11 14 9 17 12 13 10 14 12 16 15 7 8 11 12 13 17 7 10v4l-12 5-26-26-8-7-14-12-16-12-14-10-18-11-18-10-16-8-20-9-27-10-32-9-4-9-8-15-8-10-2-3z" />
                        <path transform="translate(421,608)" d="m0 0 16 2 49 8 16 4 2 3-10 7-39 26-12 9-13 10-13 11-8 7-10 9-17 17-7 8h-3v-19l3-16 5-16 7-17 10-19 14-21 9-12z" />
                        <path transform="translate(462,303)" d="m0 0 8 1 27 9 22 9 23 11 22 13 20 14 13 11 8 7 17 17 9 10 5 7-1 3-15 6-5-1-12-11-14-11-17-13-15-10-19-11-19-9-21-7-16-3-2-1-12-27-7-10z" />
                        <path transform="translate(788,649)" d="m0 0h3l1 3-5 33-6 25-7 21-9 20-12 20-13 16-14 14-15 11-15 9-21 9-12 4-4-1 1-4 23-23h2l2-4 12-12 7-8 9-10 9-11 14-18 11-16 11-17 11-20 9-21 7-19z" />
                        <path transform="translate(491,365)" d="m0 0 7 1 22 8 25 13 15 10 14 11 12 11 10 10-1 4-10 4-8 6-5-1-13-11-20-13-23-12-14-6-5-2-3-20-4-8z" />
                        <path transform="translate(348,724)" d="m0 0h4l3 14 4 9-1 4-14 20-12 14-9 11-10 10-7 8-11 11-8 7-6 5-2-1 1-5 12-16 12-17 17-26 14-24 10-20z" />
                        <path transform="translate(812,668)" d="m0 0 4 2 6 11 3 10 1 15-2 12-5 12-7 11-12 14-9 8-2 3h-3l1-6 7-15 7-22 6-28 4-26z" />
                      </svg>
                    </div>
                  </div>
                  <div class="relative ">
                    <div class="lg:max-w-5xl lg:pr-5 z-40 md:px-10">
                      <Link to="/Login" id="header-texto1" class="group text-cor-4 text-sm sm:text-base flex w-fit px-2 py-2 uppercase rounded-md hover:bg-cor-2 hover:-translate-x-1 transition-all ease-in-out duration-300">Comece agora mesmo sem nenhum custo inicial de assinatura.
                        <svg class="text-cor-4 md:ml-2 w-7 group-hover:md:w-3 md:w-0 h-auto transition-all ease-in-out duration-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                      </Link>
                      <h2 class="text-cor-4 font-title text-4xl sm:text-5xl font-light uppercase tracking-tighter max-w-6xl leading-snug text-g1 sm:leading-snug">Crie seus flashcards</h2>
                      <p class="text-cor-4/70 mt-8 text-pretty text-lg font-medium sm:text-xl">Explore flashcards interativos para facilitar a memorização e retenção de conteúdos. Descubra uma maneira divertida e eficaz de estudar e potencializar seu conhecimento!</p>
                      <div class="mt-10 flex flex-col items-center md:flex-row">
                        <a href="/Login" class="mb-3 inline-flex h-12 w-fit items-center justify-center rounded bg-gradient-to-r from-cor-2 bg-cor-1 text-cor-4 px-6 font-medium tracking-wide shadow-md transition ease-in-out hover:bg-cor-3 scale-105 duration-300 focus:outline-none md:mr-4 md:mb-0 md:w-auto">Comece agora</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section id="about" className="relative isolate overflow-hidden bg-cor-2 py-24 sm:py-32">
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
                  <h2 class="text-cor-4 font-title text-4xl sm:text-5xl uppercase font-light text-balance max-w-6xl leading-snug text-g1 sm:leading-snug"><span class="text-cor-4 font-bold">Fortaleça </span>sua base de conhecimento</h2>
                  <p className="text-cor-4/70 mt-8 text-pretty text-lg font-medium sm:text-xl">Com o Volans, aprenda de forma eficaz com flashcards e repetição espaçada, fixando informações rapidamente para maximizar seu aprendizado.</p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                  <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col-reverse gap-1">
                      <dt className="text-base text-cor-4/70">Usuários registrados</dt>
                      <dd className="text-4xl font-bold tracking-tight text-cor-4">2</dd>
                    </div>
                    <div div className="flex flex-col-reverse gap-1">
                      <dt className="text-base text-cor-4/70">Baralhos criados</dt>
                      <dd className="text-4xl font-bold tracking-tight text-cor-4">10+</dd>
                    </div>
                    <div className="flex flex-col-reverse gap-1">
                      <dt className="text-base text-cor-4/70">Cartas criadas</dt>
                      <dd className="text-4xl font-bold tracking-tight text-cor-4">5+</dd>
                    </div>
                    <div className="flex flex-col-reverse gap-1">
                      <dt className="text-base text-cor-4/70">Usuários premium</dt>
                      <dd className="text-4xl font-bold tracking-tight text-cor-4">0</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>

            <section class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
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
              <div class="text-center pb-12">
                <h2 class="text-cor-4 font-title text-4xl sm:text-5xl font-light uppercase max-w-6xl leading-snug text-g1 sm:leading-snug">Conheça nossa <span class="text-cor-1 font-bold"> equipe</span></h2>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="w-full bg-cor-2 rounded-lg p-12 flex flex-col justify-center items-center">
                  <div class="mb-8">
                    <img class="rounded-full w-28 h-28" src={require('../Img/TeamImg/carlos.jpg')}/>
                  </div>
                  <div class="text-center">
                    <p class="text-xl text-cor-0 font-bold mb-2">Carlos Eduardo Duarte Torres</p>
                    <p class="text-base text-cor-1/70 font-normal">Engenheiro de Testes e Analista de Requisitos</p>
                  </div>
                </div>
                <div class="w-full bg-cor-2 rounded-lg p-12 flex flex-col justify-center items-center">
                  <div class="mb-8">
                    <img class="rounded-full w-28 h-28" src={require('../Img/TeamImg/eduardo.jpg')}/>
                  </div>
                  <div class="text-center">
                    <p class="text-xl text-cor-4 font-bold mb-2">Eduardo de Araújo Rey</p>
                    <p class="text-base text-cor-1/70 font-normal">Analista de Suporte e Manutenção e Especialista em Instalação e Deploy</p>
                  </div>
                </div>
                <div class="w-full bg-cor-2 rounded-lg p-12 flex flex-col justify-center items-center">
                  <div class="mb-8">
                    imagem
                  </div>
                  <div class="text-center">
                    <p class="text-xl text-cor-4 font-bold mb-2">Giovanni Aparecido Gasperini</p>
                    <p class="text-base text-cor-1/70 font-normal">Desenvolvedor Front-end e  Consultor de Usabilidade</p>
                  </div>
                </div>
                <div class="w-full bg-cor-2 rounded-lg p-12 flex flex-col justify-center items-center">
                  <div class="mb-8">
                    <img class="rounded-full w-28 h-28" src={require('../Img/TeamImg/kayke.jpg')}/>
                  </div>
                  <div class="text-center">
                    <p class="text-xl text-cor-4 font-bold mb-2">Kayke Denelle da Silva</p>
                    <p class="text-base text-cor-1/70 font-normal">Desenvolvedor Back-end e Analista de Viabilidade</p>
                  </div>
                </div>
                <div class="w-full bg-cor-2 rounded-lg p-12 flex flex-col justify-center items-center">
                  <div class="mb-8">
                    <img class="rounded-full w-28 h-28" src={require('../Img/TeamImg/leonardo.jpg')}/>
                  </div>
                  <div class="text-center">
                    <p class="text-xl text-cor-4 font-bold mb-2">Leonardo De Lima Sousa</p>
                    <p class="text-base text-cor-1/70 font-normal">Gestor do Projeto, Scrum Master e Analista de Business Intelligence (BI)</p>
                  </div>
                </div>
                <div class="w-full bg-cor-2 rounded-lg p-12 flex flex-col justify-center items-center">
                  <div class="mb-8">
                    <img class="rounded-full w-28 h-28" src={require('../Img/TeamImg/otavio.png')}/>
                  </div>
                  <div class="text-center">
                    <p class="text-xl text-cor-4 font-bold mb-2">Otávio Vitalino Apolonio</p>
                    <p class="text-base text-cor-1/70 font-normal">Desenvolvedor Front-end e Designer</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="prices" className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
              <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
                <div className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-cor-2 to-cor-1 opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
              </div>
              <div className="mx-auto max-w-4xl text-center">
                <p className="text-cor-4 font-title text-4xl sm:text-5xl font-light uppercase mt-2 text-balance tracking-tight">Escolha o <span class="text-cor-1 font-bold">melhor plano</span> para você</p>
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
                  <Link to="/Login" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-cor-2 ring-1 ring-inset ring-cor-2 hover:ring-cor-1 hover:text-cor-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cor-4 sm:mt-10 transition ease-in-out">Comece agora</Link>
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
                  <Link to="/Login" className="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-cor-1 ring-1 ring-inset ring-cor-1 hover:ring-cor-3 hover:text-cor-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:cor-0 sm:mt-10 transition ease-in-out">Comece agora</Link>
                </div>
              </div>
            </section>
          </div>

          <footer id="footer">
            <div class="container flex flex-col mx-auto">
              <div class="flex flex-col items-center w-full my-10">
                <span class="mb-5">
                  <svg className="h-auto w-20 flex-none text-cor-4" version="1.1" viewBox="0 0 1080 1080" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path transform="translate(775,409)" d="m0 0h36l21 2 26 5 21 6 24 10 25 13 22 15 13 11 10 8 19 19 1 5 7-5h6l7 6 2 5-15 30-12 19-10 14-10 13-12 14-12 13-12 11-15 11-17 10-17 6-12 2-14-1-15-7-15-10-14-14-9-14-8-17-5-17-3-15-2-24 2-19 4-14 7-17 12-20 3-4-11 3-13 7-11 9-9 10-9 16-5 14-4 17-2 15-3 2-15-8-20-7-31-8-63-14-25-7-24-10-10-7v-3l26-15 18-10 26-13 30-13 31-11 28-8 31-6zm40 48m95 27-10 2-8 5-5 5-5 10-1 8 2 11 6 10 9 6 5 2 8 1 9-2 8-5 7-8 3-7 1-9-2-10-6-10-9-6-5-2z" />
                    <path transform="translate(315,91)" d="m0 0 32 2 38 5 38 8 28 8 31 11 30 13 20 10 21 12 19 12 17 12 12 9 16 13 11 9 15 14 8 7 21 21 7 8 12 14 8 9 11 14 14 18 13 19 8 11 14 22 5 8v4l-13 2h-8l-14-19-11-14-9-11-18-20-11-12-9-9-8-7-12-11-11-9-15-12-14-10-27-18-22-13-28-15-28-13-30-12-22-8-36-11-44-11-9-3-7-10-6-8-11-12-7-7-17-13-3-3z" />
                    <path transform="translate(361,387)" d="m0 0h40l24 4 22 6 25 10 17 8 19 11 21 14 19 14v4l-27 14-28 19-14 12-10 8-18 18-3-1-7-19-9-21-10-17-9-12-9-10-12-12-17-12-12-7-24-10-20-6-1-4 2-2 23-6z" />
                    <path transform="translate(49,438)" d="m0 0 10 2 18 6 31 13 35 16 29 14 74 36 20 10 19 10 40 20 19 10 15 8 1 4-1 1-10-1-69-14-53-12-45-12-35-11-25-10-16-8-12-8-15-13-9-10-10-15-8-17-5-14 1-4z" />
                    <path transform="translate(59,628)" d="m0 0 9 2 15 3 19 2 14 1h72l64-3 78-5h10l-1 5-19 10-25 12-37 16-27 10-31 10-25 6-18 3h-22l-17-4-16-8-9-7-8-7-11-14-8-13-8-15z" />
                    <path transform="translate(383,170)" d="m0 0 10 2 34 9 29 9 25 9 29 12 25 12 23 12 23 14 16 11 19 14 11 9 15 13 16 15 8 8 7 8 10 11 11 14 13 17 12 18-1 4-13 2h-10l-13-19-11-14-12-13-7-8-16-15-14-11-13-10-15-10-18-11-16-9-15-8-24-11-27-11-37-13-34-10-12-3-8-16-7-11-11-13-3-3z" />
                    <path transform="translate(518,516)" d="m0 0 5 1 14 8 19 8 20 6 25 5 49 7 34 5 13 4 3 1-1 3-24 6-35 11-53 18-22 8-5-1-10-7-17-7-24-6-24-4-31-4-1-4 14-15 7-8 12-12 14-11 5-4z" />
                    <path transform="translate(729,578)" d="m0 0 5 1-1 3-11 7-16 11-21 14-24 15-17 10-25 14-19 10-24 12-30 13-38 14-38 11-28 6h-5v-4l9-12 8-9 8-7 13-11 15-10 15-9 16-9 28-13 32-13 43-15 54-16z" />
                    <path transform="translate(61,529)" d="m0 0 6 2 25 10 30 10 50 14 49 12 46 10 72 15 5 2-1 4-54 5-23 2-53 3h-52l-17-2-21-7-16-8-11-8-12-11-8-10-8-14-5-12-3-11v-5z" />
                    <path transform="translate(336,654)" d="m0 0h5v4l-8 7-37 37-8 7-11 10-11 9-16 13-17 12-16 10-16 8-18 5-13 1-15-2-13-5-12-7-13-11-9-9-1-3 2-3 69-20 42-14 35-13 34-14 33-15z" />
                    <path transform="translate(771,616)" d="m0 0 4 1-4 17-9 27-13 28-12 20-14 20-12 14-7 8-11 12-9 9-8 7-12 10-16 8-15 5-12 2h-19l-12-2-15-5-5-3v-3l22-13 11-7 28-19 21-16 22-18 10-9 8-7 15-14 21-21 7-8 10-11 9-11 14-17z" />
                    <path transform="translate(751,595)" d="m0 0h3l-1 4-13 22-14 19-7 9-9 10-7 8-15 15-8 7-18 14-14 9-18 11-28 13-21 8-13 1h-15l-18-2-21-5-6-2v-3l50-25 23-11 22-12 26-14 25-14 27-16 24-15 36-24z" />
                    <path transform="translate(344,681)" d="m0 0 4 2-7 14-10 18-13 22-13 21-17 25-14 19-8 10-11 13-9 11-25 25-8 7-15 12-8 6-4-1-1-4v-13l-3-26-3-15 5-5 12-11 11-9 10-9 11-9 11-10 11-9 11-10 11-9 7-7 8-7 12-11 30-27 12-11z" />
                    <path transform="translate(430,240)" d="m0 0 16 4 35 11 30 12 29 14 20 11 14 9 17 12 13 10 14 12 16 15 7 8 11 12 13 17 7 10v4l-12 5-26-26-8-7-14-12-16-12-14-10-18-11-18-10-16-8-20-9-27-10-32-9-4-9-8-15-8-10-2-3z" />
                    <path transform="translate(421,608)" d="m0 0 16 2 49 8 16 4 2 3-10 7-39 26-12 9-13 10-13 11-8 7-10 9-17 17-7 8h-3v-19l3-16 5-16 7-17 10-19 14-21 9-12z" />
                    <path transform="translate(462,303)" d="m0 0 8 1 27 9 22 9 23 11 22 13 20 14 13 11 8 7 17 17 9 10 5 7-1 3-15 6-5-1-12-11-14-11-17-13-15-10-19-11-19-9-21-7-16-3-2-1-12-27-7-10z" />
                    <path transform="translate(788,649)" d="m0 0h3l1 3-5 33-6 25-7 21-9 20-12 20-13 16-14 14-15 11-15 9-21 9-12 4-4-1 1-4 23-23h2l2-4 12-12 7-8 9-10 9-11 14-18 11-16 11-17 11-20 9-21 7-19z" />
                    <path transform="translate(491,365)" d="m0 0 7 1 22 8 25 13 15 10 14 11 12 11 10 10-1 4-10 4-8 6-5-1-13-11-20-13-23-12-14-6-5-2-3-20-4-8z" />
                    <path transform="translate(348,724)" d="m0 0h4l3 14 4 9-1 4-14 20-12 14-9 11-10 10-7 8-11 11-8 7-6 5-2-1 1-5 12-16 12-17 17-26 14-24 10-20z" />
                    <path transform="translate(812,668)" d="m0 0 4 2 6 11 3 10 1 15-2 12-5 12-7 11-12 14-9 8-2 3h-3l1-6 7-15 7-22 6-28 4-26z" />
                  </svg>
                </span>
                <div class="flex flex-col items-center gap-6">
                  <div class="flex mx-5 flex-wrap items-center justify-center gap-5 lg:gap-12 gap-y-3 lg:flex-nowrap">
                    <Link to="/" class="font-semibold text-cor-4 hover:text-cor-1 transition ease-in-out duration-300">Sobre</Link>
                    <Link to="/" class="font-semibold text-cor-4 hover:text-cor-1 transition ease-in-out duration-300">Preços</Link>
                    <Link to="/Login" class="font-semibold text-cor-4 hover:text-cor-1 transition ease-in-out duration-300">Login</Link>
                  </div>
                  <div class="flex items-center gap-2 sm:gap-8">
                    <Link to="https://github.com/Kayke-Denelle/Startup_one">
                      <svg class="h-auto w-10 text-cor-4 hover:text-cor-1 transition ease-in-out duration-300" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                      </svg>
                    </Link>
                  </div>
                  <p class="text-base font-normal leading-7 text-center text-cor-4/70">© 2023 Retainix. All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    );
};

export default LandingPage;