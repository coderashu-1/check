import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you have the styles in this file or using Tailwind
import poster from './assets/poster.png'
import Navbar from './component/nav';
import lowerPoster from './assets/lower poster.webp'
import { Link, useNavigate } from "react-router-dom";


const MobileRecharge = () => {
  // const [selectedProvider, setSelectedProvider] = useState('jio');
  // const [mobileNumber, setMobileNumber] = useState('');
  // // const [mobileNumber, setMobileNumber] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  // const handleProviderChange = (e) => {
  //   setSelectedProvider(e.target.value);
  // };

  // // const handleMobileNumberChange = (e) => {
  // //   setMobileNumber(e.target.value);
  // // };

  // const handleMobileNumberChange = (e) => {
  //   const value = e.target.value;

  //   // Ensure only numbers are entered and remove any non-numeric characters
  //   if (/^\d*$/.test(value)) {
  //     setMobileNumber(value);

  //     // Validate the number length
  //     if (value.length !== 10) {
  //       setErrorMessage('Please enter a valid 10-digit mobile number');
  //     } else {
  //       setErrorMessage(''); // Clear error if valid
  //     }
  //   }
  // };


  // const handleRecharge = () => {
  //   alert(`Recharging ${selectedProvider} number ${mobileNumber}`);
  // };

  // const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
  //   }, 1000); // Update every second

  //   return () => clearInterval(interval);
  // }, []);

  // const formatTime = (seconds) => {
  //   const minutes = Math.floor(seconds / 60);
  //   const secs = seconds % 60;
  //   return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  // };
  const navigate = useNavigate()
  const [number, setnumber] = useState()
  const [select, setselect] = useState("jio")
  const [error, setError] = useState(false)
  const [seconds, setSeconds] = useState(15 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const openOffer = () => {
    if (number?.length === 10) {
      localStorage.setItem("number", number)
      localStorage.setItem("np", select)
      navigate("/recharge")
    } else {
      setError(true)
    }
  }

  return (
    <div id="root">
      <Navbar />
      {/* <div className="py-4 px-6 bg-white flex items-center justify-between border-b border-slate-100 mb-0">
        <div className="flex items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            className="text-blue-500 mr-3"
            height="19"
            width="19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </div>
        <Link to="/"><img src={logo} className='h-8' /></Link>
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-blue-500"
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"></path>
          </svg>
        </div>
      </div> */}

      <div className='px-2'>
        <img src={poster} className='rounded-xl' />

      </div>

      <div className="bg-white">
        <div className="px-2"></div>
        <div>
          <div className="flex items-center justify-center py-1 px-4 mt-2 bg-blue-50 text-[13px]">
            <div className="text-slate-700 mr-2">Special Offer Ends In:</div>
            <div className="text-slate-700 flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                className="mr-[2px] mt-[1px]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
              </svg>
              {minutes}:{remainingSeconds}
            </div>
          </div>
        </div>

        <div className="py-10 px-5">
          <div className="bg-white border border-slate-200 rounded-xl py-4 px-6 shadow-xl shadow-blue-100">
            <div className="text-blue-500 flex items-center text-[17px] font-bold w-fit mx-auto mb-8">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z"></path>
              </svg>
              <span>Mobile Recharge</span>
            </div>

            <label className="text-[13px] ml-1 font-bold mt-5">Select Network Provider</label>
            <div className="mt-2 flex justify-between text-blue-500 text-[14px] font-bold">
              {/* <div className="border-2 border-blue-500 rounded px-2 py-1">
                <input
                  type="radio"
                  id="jio"
                  name="provider"
                  value="jio"
                  checked={selectedProvider === 'jio'}
                  onChange={handleProviderChange}
                  className="mr-1 mt-1"
                />
                <label htmlFor="jio">Jio</label>
              </div>

              <div className="border-2 border-blue-500 rounded px-2 py-1">
                <input
                  type="radio"
                  id="airtel"
                  name="provider"
                  value="airtel"
                  checked={selectedProvider === 'airtel'}
                  onChange={handleProviderChange}
                  className="mr-1 mt-1"
                />
                <label htmlFor="airtel">Airtel</label>
              </div>

              <div className="border-2 border-blue-500 rounded px-2 py-1">
                <input
                  type="radio"
                  id="vi"
                  name="provider"
                  value="vi"
                  checked={selectedProvider === 'vi'}
                  onChange={handleProviderChange}
                  className="mr-1 mt-1"
                />
                <label htmlFor="vi">VI</label>
              </div>

              <div className="border-2 border-blue-500 rounded px-2 py-1">
                <input
                  type="radio"
                  id="bsnl"
                  name="provider"
                  value="bsnl"
                  checked={selectedProvider === 'bsnl'}
                  onChange={handleProviderChange}
                  className="mr-1 mt-1"
                />
                <label htmlFor="bsnl">Bsnl</label>
              </div> */}



              <div className="border-2 border-blue-500 rounded px-2 py-1"><input type="radio" id="jio" name="r1" value="jio" onChange={(e) => setselect(e.target.value)} className="mr-1 mt-1" defaultChecked={select === "jio"} /><label for="jio">Jio</label> </div>
              <div className="border-2 border-blue-500 rounded px-2 py-1"><input type="radio" id="airtel" name="r1" value="airtel" onChange={(e) => setselect(e.target.value)} className="mr-1 mt-1" defaultChecked={select === "airtel"} /><label for="airtel">Airtel</label> </div>
              <div className="border-2 border-blue-500 rounded px-2 py-1"><input type="radio" id="vi" name="r1" value="vi" onChange={(e) => setselect(e.target.value)} className="mr-1 mt-1" defaultChecked={select === "vi"} /><label for="vi">VI</label> </div>
              <div className="border-2 border-blue-500 rounded px-2 py-1"><input type="radio" id="bsnl" name="r1" value="bsnl" onChange={(e) => setselect(e.target.value)} className="mr-1 mt-1" defaultChecked={select === "bsnl"} /><label for="bsnl">Bsnl</label> </div>
            </div>

            <div className="mt-3">
              <label className="text-[13px] ml-1 font-bold">Mobile Number</label>
              {/* <input
                type="number"
                placeholder="+91 xxxxx xxxxx"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                // className="bg-white mt-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                className="bg-white mt-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              /> */}
              <input
                type="number"
                onChange={(e) => setnumber(e.target.value)}
                value={number || ""}
                placeholder="+91 xxxxx xxxxx"
                className="bg-white mt-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              {error && <small className="text-red-500 my-1">Please enter valid mobile number!!</small>}
            </div>

            <div className="mt-5">
              <button
                className="bg-blue-500 py-3 w-full text-[15px] font-bold text-white rounded-lg"
                onClick={openOffer}
              >
                Proceed to Recharge
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={lowerPoster} className='mt-3' />
    </div >
  );
};

export default MobileRecharge;

// import React, { useEffect, useState } from 'react'
// import { FaClock } from 'react-icons/fa'
// import { useNavigate } from 'react-router-dom';
// import { RiSmartphoneFill } from 'react-icons/ri';
// import GpayBanner from "./assets/poster.png"
// import GpayFooter from "./assets/lower poster.webp"


// const Home = () => {
//   const navigate = useNavigate()
//   const [number, setnumber] = useState()
//   const [select, setselect] = useState("jio")
//   const [error, setError] = useState(false)
//   const [seconds, setSeconds] = useState(15 * 60);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds(seconds - 1);
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [seconds]);

//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;

//   const openOffer = () => {
//     if (number?.length === 10) {
//       localStorage.setItem("number", number)
//       localStorage.setItem("np", select)
//       navigate("/recharge")
//     } else {
//       setError(true)
//     }
//   }

//   return (
//     <div className="bg-white">
//       <div className="px-2">
//         <img src={GpayBanner} alt="" className="rounded-xl" />
//       </div>
//       <div>
//         <div className="flex items-center justify-center py-1 px-4 mt-2 bg-blue-50 text-[13px]">
//           <div className="text-slate-700 mr-2">Special Offer Ends In:</div>
//           <div className="text-slate-700 flex items-center"><FaClock className="mr-[2px] mt-[1px]" />{minutes}:{remainingSeconds}</div>
//         </div>
//       </div>
//       <div className="py-10 px-5">
//         <div className="bg-white border border-slate-200 rounded-xl py-4 px-6 shadow-xl shadow-blue-100">
//           <div className="text-blue-500 flex items-center text-[17px] font-bold w-fit mx-auto mb-8"><RiSmartphoneFill size={30} /><span>Mobile Recharge</span></div>
//           <label className="text-[13px] ml-1 font-bold mt-5">Select Network Provider</label>
//           <div className="mt-2 flex justify-between text-blue-500 text-[14px] font-bold">
//             <div className="border-2 border-blue-500 rounded px-2 py-1"><input type="radio" id="jio" name="r1" value="jio" onChange={(e)=>setselect(e.target.value)} className="mr-1 mt-1" defaultChecked={select==="jio"} /><label for="jio">Jio</label> </div>
//             <div className="border-2 border-blue-500 rounded px-2 py-1"><input type="radio" id="airtel" name="r1" value="airtel" onChange={(e)=>setselect(e.target.value)} className="mr-1 mt-1" defaultChecked={select==="airtel"} /><label for="airtel">Airtel</label> </div>
//             <div className="border-2 border-blue-500 rounded px-2 py-1"><input type="radio" id="vi" name="r1" value="vi" onChange={(e)=>setselect(e.target.value)} className="mr-1 mt-1" defaultChecked={select==="vi"} /><label for="vi">VI</label> </div>
//             <div className="border-2 border-blue-500 rounded px-2 py-1"><input type="radio" id="bsnl" name="r1" value="bsnl" onChange={(e)=>setselect(e.target.value)} className="mr-1 mt-1" defaultChecked={select==="bsnl"} /><label for="bsnl">Bsnl</label> </div>
//           </div>
//           <div className="mt-3">
//             <label className="text-[13px] ml-1 font-bold">Mobile Number</label>
//             <input
//               type="number"
//               onChange={(e) => setnumber(e.target.value)}
//               value={number || ""}
//               placeholder="+91 xxxxx xxxxx"
//               className="bg-white mt-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
//             {error && <small className="text-red-500 my-1">Please enter valid mobile number!!</small>}
//           </div>
//           <div className="mt-5">
//             <button onClick={openOffer} className="bg-blue-500 py-3 w-full text-[15px] rounded-xl font-bold text-white">Recharge</button>
//           </div>
//         </div>
//       </div>
//       <img src={GpayFooter} alt="" className="mt-3" />
//     </div>
//   )
// }

// export default Home
