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



export default function Header() {


    const settings: {
      className: string;
      dots: boolean;
      infinite: boolean;
      speed: number;
      slidesToShow: number;
      slidesToScroll: number;
      autoplay: boolean;
      autoplaySpeed: number;
      cssEase: string;
      focusOnSelect: boolean;
      centerMode: boolean;
      centerPadding: string;
      responsive: {
        breakpoint: number;
        settings: {
          arrows: boolean;
          centerMode: boolean;
          centerPadding: string;
          slidesToShow: number;
        };
      }[];
    } = {
      className: "center",
      centerMode: true,
      centerPadding: '20%',
      dots: true,
      infinite: true,
      focusOnSelect: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1248,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '15%',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '15%',
            slidesToShow: 1
          }
        },
        {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '10%',
              slidesToShow: 1
            }
          }
      ]
    };
  return (
        <div>
        <Slider {...settings} className=''>
            <div>
                <Image
                src={header1}
                alt="Vercel Logo"
                className="px-1 h-fit"
                priority
                />
            </div>
            <div>
            <Image
                src={header2}
                alt="Vercel Logo"
                className="px-1 h-fit"
                priority
                />
            </div>
            <div>
            <Image
                src={header3}
                alt="Vercel Logo"
                className="px-1 h-fit"
                priority
                />
            </div>
            <div>
            <Image
                src={header1}
                alt="Vercel Logo"
                className="px-1 h-fit"
                priority
                />
            </div>
            <div>
            <Image
                src={header2}
                alt="Vercel Logo"
                className="px-1"
                priority
                />
            </div>
            <div>
            <Image
                src={header3}
                alt="Vercel Logo"
                className="px-1"
                priority
                />
            </div>
        </Slider>
        </div>
  )
}
