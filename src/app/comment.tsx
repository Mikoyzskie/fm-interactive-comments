"use client"

// import { useState } from 'react'
import Image from 'next/image'
// import clsx from 'clsx'

import Vote from './vote'

export default function Comment() {

  // const [visible, setVisible] = useState<boolean>(false)

  return (
    <div className='flex flex-col gap-5 justify-between h-full'>
      <div>

        <div className='bg-white rounded-lg p-6 flex gap-6 motion-preset-slide-down mb-5'>
          <Vote />
          <div className='grow flex flex-col gap-[15px]'>
            <div className='flex justify-between'>
              <div className='flex gap-4 items-center'>
                <Image
                  height={32}
                  width={32}
                  alt='avatar'
                  src={"/images/avatars/image-amyrobson.png"}
                />
                <span className='font-medium'>maxblagun</span>
                <span className='text-[#67727E]'>2 weeks ago</span>
              </div>
              <button className='font-medium flex items-center gap-2 text-[#5357B6]'>
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6" /></svg>
                Reply
              </button>
            </div>
            <p className='text-[#67727E]'>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</p>
          </div>
        </div>
        <div className='flex'>
          <div className='w-[2px] h-auto bg-[#E9EBF0] mx-[43px]' />
          <div className='flex flex-col gap-5'>
            <div className='bg-white rounded-lg p-6 flex gap-6 motion-preset-slide-down'>
              <Vote />
              <div className='grow flex flex-col gap-[15px]'>
                <div className='flex justify-between'>
                  <div className='flex gap-4 items-center'>
                    <Image
                      height={32}
                      width={32}
                      alt='avatar'
                      src={"/images/avatars/image-amyrobson.png"}
                    />
                    <span className='font-medium'>maxblagun</span>
                    <span className='text-[#67727E]'>2 weeks ago</span>
                  </div>
                  <button className='font-medium flex items-center gap-2 text-[#5357B6]'>
                    <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6" /></svg>
                    Reply
                  </button>
                </div>
                <p className='text-[#67727E]'>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</p>
              </div>
            </div>
            <div className='bg-white rounded-lg p-6 flex gap-6 motion-preset-slide-down'>
              <Vote />
              <div className='grow flex flex-col gap-[15px]'>
                <div className='flex justify-between'>
                  <div className='flex gap-4 items-center'>
                    <Image
                      height={32}
                      width={32}
                      alt='avatar'
                      src={"/images/avatars/image-amyrobson.png"}
                    />
                    <div className='font-medium text-[#334253] flex items-center justify-center gap-2'>maxblagun <span className='bg-[#5357B6] items-center justify-center text-center h-[19px] w-9 text-white leading-normal font-medium text-[13px] px-[6px] rounded-sm'>you</span></div>
                    <span className='text-[#67727E]'>2 weeks ago</span>
                  </div>
                  <div className='flex gap-6'>
                    <button className='font-medium flex items-center gap-2 text-[#ED6368]'>
                      <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368" /></svg>
                      Delete
                    </button>
                    <button className='font-medium flex items-center gap-2 text-[#5357B6]'>
                      <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6" /></svg>
                      Edit
                    </button>
                  </div>
                </div>
                <textarea className='text-[#67727E] h-fit outline-none' defaultValue={"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well."} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white rounded-lg p-6 flex mb-5 justify-self-end items-start gap-4'>
        <Image
          height={40}
          width={40}
          alt='avatar'
          src={"/images/avatars/image-amyrobson.png"}
          className='h-10 w-10'
        />
        <textarea placeholder='Add a comment...' className='outline-none h-24 w-full border border-[#E9EBF0] py-3 px-6 rounded-lg focus:border-[#5357B6] resize-none'></textarea>
        <button className='font-medium text-white px-[30px] py-3 bg-[#5357B6] rounded-lg'>SEND</button>
      </div>
    </div>
  )
}
