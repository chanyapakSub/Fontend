'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import header1 from "/public/image/header1.jpg";
import header2 from "/public/image/header2.jpg";
import header3 from "/public/image/header3.jpg";
import Novelselect from "../original/componant/Novelselect"
import Header from "../original/componant/Header"


export default function page() {
  return (
    <div className='bg-white'>
        <Header/>
        <main className=''>
        <div className='xl:px-[190px]  sm:px-0 xl:text-left text-center mt-14 text-3xl mb-5 pb-2 border-solid border-b-2 border-[#e0dbdb] '>
            รายการที่คั่นไว้
        </div>
        <Novelselect/>
        </main>
    </div>
  )
}
