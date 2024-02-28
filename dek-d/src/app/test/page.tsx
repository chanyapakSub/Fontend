'use client'
import React from 'react'
import  { useState } from 'react';

interface Novel {
    id: number;
    text: string;
  }

export default function page() {
  const [showDeleteButton, setShowDeleteButton] = useState(false); // เพิ่ม state เพื่อแสดง/ซ่อนปุ่มลบ
  const [novels, setNovels] = useState<Novel[]>([
    { id: 1, text: 'Novel 1' },
    { id: 2, text: 'Novel 2' },
    { id: 3, text: 'Novel 3' },
    { id: 4, text: 'Novel 4' },
  ]);
  const [selectedNovelIds, setSelectedNovelIds] = useState<number[]>([]);
  const [isEditing, setIsEditing] = useState(false); // เพิ่ม state เพื่อตรวจสอบว่าอยู่ในโหมดการแก้ไขหรือไม่

  const handleToggleEdit = () => {
    setIsEditing(!isEditing); // เปลี่ยนสถานะของการแก้ไขเมื่อกดปุ่ม
    setShowDeleteButton(!showDeleteButton); // เปลี่ยนสถานะการแสดงปุ่มลบเมื่อกดปุ่ม
  };

  const handleNovelSelectToggle = (id: number) => {
    if (isEditing) {
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
    setIsEditing(false); // ปิดโหมดการแก้ไขเมื่อลบเสร็จสิ้น
    setShowDeleteButton(false); // ปิดปุ่มลบเมื่อลบเสร็จสิ้น
  };

  return (
    <div className='m-10'>
      <div className='flex justify-between text-base text-[#878787] px-[150px]'>
        <div>
          จำนวนทั้งหมด {novels.length} รายการ
        </div>
        <div className='flex'>
          <button 
            onClick={handleToggleEdit}
            className={`flex mr-2 border-solid border-2 border-[#e0dbdb] p-2 rounded-lg ${isEditing ? 'bg-blue-200' : ''}`} // เปลี่ยนสีพื้นหลังของปุ่มเมื่ออยู่ในโหมดแก้ไข
          >
            {isEditing ? 'เลือกการ์ด' : 'แก้ไข'} {/* เปลี่ยนข้อความบนปุ่ม */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pl-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </button>
          {showDeleteButton && // แสดงปุ่มลบเมื่ออยู่ในโหมดการแก้ไข
              <button
                onClick={handleDeleteSelectedNovels}
                disabled={selectedNovelIds.length === 0}
                className='flex border-solid border-2 border-[#e0dbdb] p-2 rounded-lg'
              >
                ลบเลือกแล้ว ({selectedNovelIds.length} รายการ)
              </button>
          }
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-[150px]">
        {novels.map((novel) => (
          <div
            key={novel.id}
            onClick={() => handleNovelSelectToggle(novel.id)}
            className={`rounded-lg bg-white p-4 shadow-md cursor-pointer ${isEditing ? 'pointer-events-none' : ''}`} // ปิดการทำงานเมื่ออยู่ในโหมดการแก้ไข
          >
            <p className="text-lg font-semibold">{novel.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}