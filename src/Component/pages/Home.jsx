import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
    Carousel,
  } from "@material-tailwind/react";
  import { useState } from "react";
  import { articles } from "../articles/articlesdata";
const Home = () => {
 
  
  return (
      <>
        <div class="relative">
          <div className=" my-8">
                <img src="https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg" />
                <h1 className="absolute my-10 text-5xl text-white top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                      <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500  mx-6">UZURI</span> DIGITAL AGENCY
                    </a>
                </h1>
                <h1 className="  absolute  ml-28 my-64 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    <span className=" top-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                          
                    </span>
                .</h1>
                <h2 className="absolute   mb-4 text-xl  text-amber-400 top-16 left-1/2 -translate-x-1/2"> 
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                          UZURI est une agence de communication créative, localisée à Bruxelles, spécialisée dans la communication digitale et l’identité d’entreprise.
                          </span>
                  </h2>
                  <p className="absolute mx-8 italic text-green-100 bottom-36 right-5"> 
                        Comme dans toute bonne relation, tout commence par la connaissance de son interlocuteur. Qui est votre audience ? Quels sont ses besoins, ses désirs, ses douleurs ? La clé est de comprendre profondément ce qui fait vibrer votre cible. Nous créons un contenu qui la touche. Non pas un contenu qui vend, mais un contenu qui raconte, qui partage, qui émeut. C'est l'étincelle qui va allumer la flamme - que ce soit par des visuels accrocheurs,
                        des titres intrigants ou des accroches inattendues !<br/>
                        L'argent ne peut pas acheter l'amour, mais il peut certainement aider à propager votre message. Avec des annonces bien ciblées, nous pouvons atteindre ceux qui sont les plus susceptibles de tomber sous le charme de votre marque. Ajoutez de l'amour : c'est notre ingrédient secret. Quand on crée avec passion, cela se voit. Quand vous interagissez avec amour, cela se ressent.
                  </p>
                    
                    
                    
                  <div className="absolute  top-5 left-5 rounded-t-lg ">
                  </div>
                  <h3 className="absolute italic text-2xl text-green-300 bottom-5 right-30  mx-24">
                    Notre équipe de choc vous accompagne dans le lancement, la promotion et l’évolution de votre projet.
                  </h3>
            </div>
        </div>
            
    <div className="flex flex-row mb-16">
                    <div className=" basis-1/3 relative w-full xl:w-3/4 p-2 overflow-hidden">
                      <img className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"  src=" ../images/header.png" />
                      <h4 className=" absolute text-xl mb-2 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2  text-blue-300">
                        BRANDING
                      </h4>
                      <h4 className=" absolute text-lg my-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-blue-300">
                        Nous créons votre identité complète, du logo à la charte graphique initiale
                      </h4>
                    </div>
                    <div class=" basis-1/3 relative  w-full xl:w-3/4 p-2 overflow-hidden  ">
                      <img className="  w-full md:w-4/5 transform rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"  src=" ../images/header.png"/>
                      <h4 className=" absolute text-xl mb-12 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2  text-blue-300">
                          WEB</h4>
                          <h4 className=" absolute text-lg  top-1/2  -translate-x-1/2 -translate-y-1/2  text-blue-300"></h4>
                      <h2 className="absolute text-lg text-amber-400 bottom-36 left-1/2 -translate-x-1/2"></h2>
                      <h5 className="absolute text-lg text-blue-400  my-4  top-12 left-10 right-20"> Nous créons votre sit web ou votre e-shop avc des solutions les plus adaptées selo vos bésoins</h5 >
                      <h3 className="absolute text-lg text-green-300 bottom-24 right-32">  </h3>
                  </div>
    
                  
                    <div class="  basis-1/3 relative  w-full xl:w-3/4 p-2 overflow-hidden">
                          <img className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"  src=" ../images/header.png"/>
                          <h4 className=" absolute text-xl mb-2 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2  text-blue-300">
                              SOCIAL MEDIA
                              </h4>
                              <h4 className=" absolute text-lg  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-blue-300">
                                
                              </h4>
                          <p className="absolute text-3xl text-amber-400 bottom-36 left-1/3 -translate-x-1/2"></p>
                          <p className="absolute text-lg text-blue-300 top-12 left-12  right-28 my-4"> Nous créons votre présence sur les réseaux sociaux et nous gérons votre communication que se soit
                                sur instagramm, faceBoock, tick tock, youtube...</p>
                          <h5 className="absolute text-lg text-green-300 bottom-24 right-32"> </h5>
                    </div>
      </div>
      <div className="flex flex-row mb-16">
        <div className=" basis-1/3 mx-12 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg"
                  src="../images/profil.jpg"
                  alt="" />
              </div>
              <div className="p-6">
                <p className="text-base text-neutral-600 dark:text-neutral-200">
                  COO  Developer analyst.
                </p>
              </div>
      </div>  
      <div className=" basis-1/3 mx-4 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="rounded-t-lg"
              src="../images/profil.jpg"
              alt="" />
          </div>
          <div className="p-6">
            <p className="text-base text-neutral-600 dark:text-neutral-200">
              Design
            </p>
          </div>
      </div>
      <div className=" basis-1/3  mx-12 block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg"
            src="../images/profil.jpg"
            alt="" />
        </div>
        <div className="p-6">
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            Marketing
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
                                      <button
                                        className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                        type="button">
                                        Contact us
                                      </button>
                              </div>
</div>


          <div className="my-32 max-w-2xl ml-56">
              <form className=" bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                              <div className="mb-4">
                                      <label className="block text-blue-300 py-2 font-bold mb-2" for="emailaddress">
                                        Signup for our newsletter
                                      </label>
                                      <input
                                        className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                        id="emailaddress"
                                        type="text"
                                        placeholder="you@somewhere.com"
                                      />
                              </div>
                              <div className="flex items-center justify-between pt-4">
                                      <button
                                        className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                                        type="button">
                                        Sign Up
                                      </button>
                              </div>
              </form>
            </div>
    

    <div className="py-12 my-8 content-center   ">
          
          <div   className="h-76 grid grid-cols-3 gap-4 content-around py-4 mx-7 ">
            <img src="../images/pht3.jpg "  className="rotate-12 hover:rotate-45  h-auto max-w-xs mt-6 mb-6  rounded  object-contain  skew-y-12 " alt="image 1" />
            <img src="../images/pht3.jpg " className="-translate-y-6 -rotate-45  hover:rotate-90  hover:blur-lg max-w-xs mt-6 mb-6 rounded  object-contain   " alt="image 1"/>
            <img src="../images/pht3.jpg " className="translate-x-6 sepia  rotate-12 max-w-xs hover:rotate-45  backdrop-saturate-200 bg-white/30  mt-6 mb-6 ml-8   rounded  object-contain   skew-y-12 " alt="image 1"  />
          </div>
    </div>
</>
    );
  }
  
  export default Home;