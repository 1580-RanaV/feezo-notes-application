import React, { useRef, useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import Card from './Card';

function Foreground() {
  const ref = useRef(null);
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = { id: Math.random().toString(), description: 'TYPE YOUR THOUGHTS HERE! LETS FEEZOOOO!', close: true, tag: { isOpen: true, tagTitle: 'Edit', tagColor: 'blue' } };
    setNotes([...notes, newNote]);
  };

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-10'>
      <button onClick={addNote} className='absolute top-5 right-5 bg-green-500 px-8 py-2 flex rounded-md text-white font-semibold'>
      <FaPlusCircle size = "1.4em"/>
      </button>
      {notes.map((item) => (
        <Card key={item.id} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
