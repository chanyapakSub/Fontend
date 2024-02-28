'use client'
import React from 'react'
import  { useState } from 'react';
import Image from "next/image";
import header1 from "/public/image/header1.jpg";
import header3 from "/public/image/header3.jpg";

interface Novel {
  id: number;
  text: string;
  Author : string;
}
export default function Novelselect() {

  const [showHiddenButton, setShowHiddenButton] = useState(false);

  const toggleHiddenButton = () => {
    //ให้elementปรากฎ
    setShowHiddenButton(!showHiddenButton);
  };

  const [novels, setNovels] = useState<Novel[]>([
    { id: 1, text: 'Novel 1' ,Author : 'Annie'},
    { id: 2, text: 'Novel 2' ,Author : 'Ken'},
    { id: 3, text: 'Novel 3' ,Author : 'King'},
    { id: 4, text: 'Novel 4' ,Author : 'Ki'},
    { id: 5, text: 'Novel 5' ,Author : 'รักการอ่าน'},
    { id: 6, text: 'Novel 6' ,Author : 'วันดีๆ'},
    { id: 7, text: 'Novel 7' ,Author : 'Riode'},
    { id: 8, text: 'Novel 8' ,Author : 'caliope'},
    { id: 9, text: 'Novel 9' ,Author : 'laliaty'},
    { id: 10, text: 'Novel 10' ,Author : 'tik'},
    { id: 11, text: 'Novel 11' ,Author : 'King'},
    { id: 12, text: 'Novel 12' ,Author : 'King'},
  ]);

  const [selectedNovelIds, setSelectedNovelIds] = useState<number[]>([]);

  const handleNovelSelectToggle = (id: number) => {
    if(showHiddenButton){
    if (selectedNovelIds.includes(id)) {
      setSelectedNovelIds(selectedNovelIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedNovelIds([...selectedNovelIds, id]);
    }
  }
  };

  const handleDeleteSelectedNovels = () => {
    const updatedNovels = novels.filter((novel) => !selectedNovelIds.includes(novel.id));
    setNovels(updatedNovels);
    setSelectedNovelIds([]);
  };

  return (
    <div className='md:m-10 m-5'>
      <div className='flex justify-between items-center text-base text-[#878787] xl:px-[150px] md:px-[40px] sm:px-[30px] px-[10px] mb-5 '>
          <div>
            จำนวนทั้งหมด {novels.length} รายการ
          </div>
          <div className='flex'>
            <button 
                onClick={toggleHiddenButton }
                className='flex  border-solid border-2 border-[#e0dbdb] p-2 rounded-lg' >
                  แก้ไข 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pl-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
              </button>
              {showHiddenButton &&
                  <button
                    onClick={handleDeleteSelectedNovels}
                    disabled={selectedNovelIds.length === 0}
                    className='flex border-solid border-2 border-[#e0dbdb] p-2 rounded-lg ml-2'
                  >
                    ลบเลือกแล้ว ({selectedNovelIds.length} รายการ)
                  </button>
              }
          </div>
      </div>
      <div className="grid md:grid-cols-3  grid-cols-2  gap-4 xl:mx-[150px] md:mx-[40px] mx-[10px]">
        {novels.map((novel) => (
          <div
            key={novel.id}
            onClick={() => handleNovelSelectToggle(novel.id)}
            className={`grid xl:grid-cols-2 md:grid-cols-1 item-center rounded-lg bg-white p-3 shadow-md cursor-pointer  ${
              selectedNovelIds.includes(novel.id) ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <Image
              src={header3}
              alt="Vercel Logo"
              className="px-1 xl:pr-5 h-full"
              priority
            />
            <div>
              <p className="text-base self-center text-center font-normal mt-2">{novel.text}</p>
              <p className="text-xs  self-left font-normal">{novel.Author}</p>
              <p className="flex text-xs text-[#878787] self-bottom font-normal mb-2 mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                 ตอนที่ 18 อยากเข้าป่า</p>
              <p className="flex text-xs text-[#878787] self-bottom font-normal">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
                 คั่นล่าสุดวันที่ 21 มีนาคม 2560</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}