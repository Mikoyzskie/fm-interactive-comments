import Image from 'next/image'
import Vote from './vote'

export default function Comment() {
  return (
    <div className='bg-white rounded-lg p-6 flex gap-6'>
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
  )
}
