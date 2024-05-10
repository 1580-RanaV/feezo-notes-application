import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoCloseCircle } from 'react-icons/io5';

function Card({ data, reference }) {
  const [noteText, setNoteText] = useState(data.description);
  const [isClosed, setIsClosed] = useState(false);

  const handleNoteChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleCloseNote = () => {
    setIsClosed(true);
  };

  return (
    <>
      {!isClosed && (
        <motion.div
          ref={reference}
          drag
          dragConstraints={reference}
          whileDrag={{ scale: 1.25 }}
          dragElastic={0.8}
          dragTransition={{ bounceStiffness: 150, bounceDamping: 50 }}
          className='relative flex-shrink-0 w-60 h-80 rounded-[40px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'
        >
          <textarea
            value={noteText}
            onChange={handleNoteChange}
            className='text-sm leading-tight mt-1 font-semibold bg-transparent border-none resize-none focus:outline-none w-full h-52'
          />
          <span className='w-8 h-8 bg-zinc-600 rounded-full py-3 flex items-center justify-center absolute bottom-4 left-1/2 transform -translate-x-1/2'>
            <IoCloseCircle size='1.6em' onClick={handleCloseNote} />
          </span>
        </motion.div>
      )}
    </>
  );
}

export default Card;
