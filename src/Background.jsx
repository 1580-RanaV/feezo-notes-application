import React from 'react';

function Background() {
  return (
    <>
      <div className='fixed z-[2] w-full h-screen'>
        <div className='absolute top-[10%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Notes</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[20vw] leading-none tracking-tighter font-bold text-zinc-900'>Feezo.</h1>
      </div>
    </>
  );
}

export default Background;
