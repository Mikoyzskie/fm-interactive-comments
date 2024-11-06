import React from 'react'

export default function Comment() {
  return (
    <div className='bg-white rounded-lg p-6 flex gap-6'>
      <div>
        test
      </div>
      <div className='grow flex flex-col gap-[15px]'>
        <div className='flex justify-between'>
          <div className='flex gap-4'>
            <div>avatar</div>
            <span>maxblagun</span>
            <span>2 weeks ago</span>
          </div>
          <button>reply</button>
        </div>
        <p>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</p>
      </div>
    </div>
  )
}
