
import {Link} from 'react-router-dom'
import React, { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'
import { FaInstagram ,FaLinkedin,FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaGit} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

function App() {
  const section0Ref = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const email = "mnajma179@gmail.com";
  const subject = "";
  const body = "";
  return (
   
<>
<div
      class=" bg-gradient-to-t relative  overflow-hidden  dark:bg-slate-900"
    >
      <nav class="w-full fixed top-0 z-10 dark:bg-slate-900 px-10">
        <div class="container mx-auto  py-5 flex items-center  ">
          <div class="flex items-center gap-2 ">
            <span class="text-2xl font-bold  text-indigo-900 dark:text-white"
              >My Protfolio.</span>
          
          </div>
          <ul
            class="hidden md:flex space-x-10 ml-96 text-gray-600 dark:text-gray-100  text-base  uppercase"
          >
            <li class="hover:text-gray-500">
              <a href="#" onClick={() => scrollToSection(section0Ref)}>home</a>
            </li>
            <li class="hover:text-gray-500 ">
              <a href="#about" onClick={() => scrollToSection(section1Ref)}>about</a>
            </li>
            <li class="hover:text-gray-500">
              <a href="#Skills" onClick={() => scrollToSection(section2Ref)}>Skills</a>
            </li>
            <li class="hover:text-gray-500">
              <a href="#Projects" onClick={() => scrollToSection(section3Ref)}>Projects</a>
            </li>
          
            <li class="hover:text-gray-500">
              <a href="#contact" onClick={() => scrollToSection(section4Ref)}>contact</a>
            </li>
          </ul>
          
          </div>
       </nav>
       <div ref={section0Ref}class="px-10">
      <div
        class="l:container mx-auto pt-20 flex flex-col-reverse lg:flex-row items-center lg:gap-40"
      >
        {/* <!-- left --> */}
        <div class="relative ">
          
          <div class="h-full w-full hidden lg:flex  p-10 overflow-hidden">
            <img  src="./123.png" alt="" className='w-96  rounded-full animate-[wiggle_8s_ease-in-out_infinite]'/>
          </div>
        </div>
      {/* <!-- right --> */}
        <div class=" text-white lg:ml-0">
        <span className="block text-7xl  font-custom font-semibold	">I'm Najma</span>
        <span className="block mt-2 text-base font-custom ">------Web Develober</span>
        <p className="block mt-4 text-sm">I'm web Web Developer based in Hargaisa,Somaliland</p>
        <p className="block text-sm">and i'm very passionate and dedicated to my work..</p> 
        <button className="mt-10 bg-violet-700 font-custom  text-white  w-full p-2 rounded-2xl">Say Hello</button>
          
          
        </div>
      </div>
    </div>
    {/* --About */}
    <div ref={section1Ref} className="px-10 mt-20 text-white duration-300 ">
      <h1 className='text-center font-semibold  text-4xl  '>About Me
      </h1>      
        <p className='text-xs text-gray-300  text-center'>My introduction</p>

    <div className=' container mx-auto py-0 flex flex-col-reverse lg:flex-row items-center lg:gap-52 sm:gap-20 mt-20'>
      <div className='dark:bg-slate-950 p-12 rounded-xl '>
       <div className=' flex gap-4 text-black'>
        
        <div className='  border-spacing-1 bg-white p-3 shadow-slate-200 rounded-lg   '> 
          <h2 className=' font-semibold '>Experience</h2> 
           <p className='text-xs   '>2+Years</p>
           </div>
         
       <div className=' border-spacing-1 bg-white p-3 shadow-slate-200 rounded-lg'> 
         <h2 className=' font-semibold '>Copleted</h2> 
          <p className=' text-xs'>2+projects</p>
          </div>

        <div className=' border-spacing-1 bg-white p-3 shadow-slate-200 rounded-lg'> 
          <h2 className=' font-semibold '>Experience</h2> 
           <p className='text-xs'>2+Years</p>
           </div>

       </div>
       <p className="block  text-sm mt-10">I'm web Web Developer based in Hargaisa,Somaliland</p>
        <p className="block text-sm">and i'm very passionate and dedicated to my work..</p> 
        <button className="mt-5 dark:bg-slate-100 text-black p-2 rounded-2xl font-semibold">Download cv</button>
          </div>

          <div class="relative w-80">
          
          <div class="h-full rounded-lg   overflow-hidden">
            <img src="./122.png" alt="" />
          </div>
        </div>    </div>      
         </div>
         {/* ---Skills */}
         <div ref={section2Ref} className='px-10 mt-20  '>
       
          <div className='container  rounded-xl mx-auto p-10   mt-20  '>
          <h1  className='text-center font-semibold  text-3xl text-white '>Skills
          </h1>        <p className='text-xs  text-center text-white mt-2'>My technical level</p>
            <div className=' lg:flex justify-center  mt-10  lg:mr-20 font-semibold   text-black'>
              <div className=' flex gap-5 sm:mt-5 bg-white p-5 rounded-xl'>
                <div className=' '>
                <FaHtml5 className=' w-12 h-12'/>
                <p>HTML</p>
                </div>
              <div className='ml-2'>
                <FaCss3Alt className=' w-12 h-12'/>
                <p className='ml-2'>CSS</p>
              </div>
              <div>
                <RiTailwindCssFill className=' w-12 h-12 ml-5'/>
                 <p>Tailwindcss</p>
              </div>
             
                </div>
              <div className='lg:ml-20 sm:mt-5 flex gap-5 bg-white p-5 rounded-xl'>
                <div className='ml-5'>
                <IoLogoJavascript className=' w-12 h-12'/>
                            <p >JavaScript</p>

                </div>
                <div className=''>
                  <FaReact className=' w-12 h-12'/>
                     <p>React</p>
                </div>
            <div>
             <SiMongodb className=' w-12 h-12'/>
              <p>MongoDb</p>
             </div>
             
              </div>
              <div className='lg:ml-20 sm:mt-5 flex gap-5 bg-white p-5 rounded-xl'>
                <div> 
                  <FaNodeJs className=' w-12 h-12'/>
                  <p>Node Js</p>
                  </div>
                  <div className='ml-5'>
                    <SiExpress className=' w-12 h-12'/>
              <p>Express Js</p></div>
              <div>
                <FaGit className=' w-12 h-12'/>
              <p className='ml-4'>Git</p></div>
              </div>
            </div>
            {/* <div className=' bg-gray-200 p-6 flex gap-6 ml-10'>   
              <p>React</p>
              <p>MongoDb</p>
              <p>Node Js</p>
              <p>Express Js</p>

            </div> */}
          </div>
    </div>
    {/* projects */}   
     <h1 ref={section3Ref} className='text-center font-semibold  text-4xl mr-10 mt-20 text-white '>projects</h1>

    <div  className='container   rounded-xl mx-auto p-10  ml-10  lg:flex flex-wrap gap-20' >

    <div class="  max-w-sm rounded-lg overflow-hidden shadow-lg w-72 bg-white    ">
  <img class="w-full h-40 " src="./str.png" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
    This is a project made to practice JavaScript.    </p>
  </div>
  <div class="px-6 ">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
  </div>
  <div className='p-5'>
  <button className='  bg-black text-white p-1 rounded-full w-20 '>
    <a href={'https://najmamoh.github.io/starter/'}>Demo</a>
    
    </button>
  <button className='ml-10  bg-black text-white p-1 rounded-full w-20'>Source</button>
</div>
</div>

<div class="max-w-sm rounded-xl overflow-hidden w-72  shadow-lg bg-white sm:mt-10 lg:mt-0 ">
  <img class="w-full h-40 " src="./Cap.png" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
    This is a project made to practice JavaScript.    </p>
  </div>
  <div class="px-6 b-2">
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">HTML</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">JavaScript</span>
  </div>
  <div className='p-5'>
  <button className='  bg-black text-white p-1 rounded-full w-20 '>    <a href={' https://najmamoh.github.io/weatherApp/'}>Demo</a>
  </button>
  <button className='ml-10  bg-black text-white p-1 rounded-full w-20'>Source</button>
</div>
</div>
<div class="max-w-sm rounded-xl overflow-hidden w-72 shadow-lg sm:mt-10 lg:mt-0 bg-white    ">
  <img class=" w-full h-40 " src="./new.png" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
    This is a project made to practice JavaScript.    </p>
  </div>
  <div class="px-6 ">
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REACT</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">CSS</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Express JS</span>
  </div>
  <div className='p-5'>
  <button className='  bg-black text-white p-1 rounded-full w-20 '>Demo</button>
  <button className='ml-10  bg-black text-white p-1 rounded-full w-20'>Source</button>
</div>
</div>

<div class="max-w-sm rounded-xl overflow-hidden w-72 shadow-lg sm:mt-10 lg:mt-0 bg-white    ">
  <img class=" w-full h-40 " src="./p.png" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
    This is a project made to practice JavaScript.    </p>
  </div>
  <div class="px-6 ">
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">REACT</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Tailwindcss</span>
  </div>
  <div className='p-5'>
  <button className='  bg-black text-white p-1 rounded-full w-20 '>Demo</button>
  <button className='ml-10  bg-black text-white p-1 rounded-full w-20'>Source</button>
</div>
</div>

</div>
    {/* contacts */}
    <div ref={section4Ref} class="bg-white mt-20 py-20">
      <div class="container mx-auto">
        {/* <!-- top --> */}
        <div class="flex    items-center lg:px-10">
          <div className='mr-10 hidden lg:flex flex-col'>
          <h1 class=" dark:text-blue-900  font-bold lg:text-5xl sm:text-3xl ">CONTACT</h1>
        <p className='font-semibold lg:ml-8'>Feel free to reach out!</p>
        </div>
        <div className='font-semibold w-full   dark:bg-slate-300 p-10 rounded-xl sm:text-sm lg:text-xl shadow-xl lg:ml-60 lg:mt-10 flex flex-col gap-2 '>
       <div className='flex'>
        <FaInstagram className='mt-2 ' icon="fa-brands fa-instagram" />
<p className='ml-2'><a href='https://www.instagram.com/nagma_mohamd?igsh=MXNndXltc2p1MnRkOA=='>najma_Mohamed</a> </p>
</div>

<div className='flex'>
<MdOutlineMailOutline className='mt-2' icon="fa-brands fa-instagram"/>
  <p className='ml-2'>
   <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`} >mnajma179@gmail.com</a> 
    </p>
</div>
<div className='flex'>
  <FaLinkedin className='mt-2' icon="fa-brands fa-instagram"/>
  <p className='ml-2'> <a href='https://www.linkedin.com/in/najma-mohamed-322118203/'>Najma Mohamed</a></p>
</div>
<div className='flex'>
<FaSquareGithub className='mt-2'/>
  <p className='ml-2'><a href='https://github.com/najmamoh'>github.com/najmamohe</a></p>
</div>
{/* <FontAwesomeIcon icon={fas.faHouse} /> */}

        </div>
        </div>
        
      </div>
    </div>
    
    
    
    </div>

</>










  );
}

export default App;
