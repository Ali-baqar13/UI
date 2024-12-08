import React from 'react'
import face1 from "../assets/doctor-img03.png"
import face2 from "../assets/feature-img.png"
import face3 from "../assets/hero-img02.png"
import heart from "../assets/heart.png"
import { FcPositiveDynamic } from "react-icons/fc";
import { CiGift } from "react-icons/ci";


const Home = () => {
  return (

    <div className="flex justify-between">
      <div className="w-screen">
        <h1 className="font-semibold text-7xl w-full">Just <span className="text-blue-600 w-[100%]">Healthy</span>,<span className="inline-block mt-1 font-light w-[100%]">Reach New Heights.</span></h1>
        <div className="mt-4">
          <p> with the largest professional Doctors and Comunity,</p>
          <p>Simply search through our website.</p>
        </div>
        <button class="bg-blue-600 hover:bg-blue-800 text-white mt-5 py-1 px-4 rounded">
          upload
        </button>
        <div className="card rounded-3xl mt-16 w-[100%] text-center">?</div>
        <div className="card mt-7 w-[14rem] rounded-md flex flex-col">
          <div className="flex gap-2">
            <div className="flex bg-gray-200 py-2 rounded-lg">
              <figure className="w-[30px] border border-blue-500 rounded-full relative left-2">
                <img className="rounded-full" src={face1} />
              </figure>
              <figure className="w-[30px] border border-blue-500  rounded-full left-2 z-10">
                <img className="rounded-full" src={face2} />
              </figure>
              <figure className="w-[30px] border border-blue-500  rounded-full relative right-2 z-20">
                <img className="rounded-full" src={face3} />
              </figure>
            </div>
            <div className="font-semibold py-2">Our Donors</div>
          </div>
          <div className="pl-14"><span className="text-blue-600 font-semibold">1000+</span> Donors</div>
          <div className="pl-4">Help us in our mission</div>
          <div className="flex justify-center mt-5"><span className=" bg-gray-300 rounded-full"><CiGift /></span></div>

        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex  flex-col items-start">

          <div className="border-2 border-white h-[280px] w-[280px] flex items-center justify-center bg-gray-100  rounded-full">
            
              <figure className="h-[230px] w-[230px] flex items-center justify-center">
                <img className="rounded-full w-ful" src="https://st2.depositphotos.com/1020482/5713/i/450/depositphotos_57131609-stock-photo-human-heart-3d-illustration-isolated.jpg" />
              </figure>

           
            {/* <div className="border-2 border-white w-[5rem] bg-gray-300">jhjhkjhk</div> */}
          </div>
          <div className=" flex flex-col items-center border-2 p-1 border-white w-[6rem] bg-gray-200 relative right-10 bottom-24">
            <span className="text-center"><FcPositiveDynamic />
            </span>
            <h3 className='font-serif px-1'>TOP NO 1 </h3>
            <h3 className=''>Brand  </h3>
          </div>


          <div className="p-1 border-2 border-white bg-gray-200 rounded-3xl ml-32 w-96 mt-12  text-center ">?</div>
          <div className="p-1 border-2 border-white bg-gray-200 rounded-3xl ml-32 w-96  text-center mt-3 ]">?</div>


        </div>
      </div>

    </div>

  )
}

export default Home