import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { IoAdd } from "react-icons/io5";
import { FaPen , FaTrash} from "react-icons/fa"

const Todo = ({ closeModal }) => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() === '') return;
    setItems([...items, { text: inputValue, checked: false }]);
    setInputValue('');
  };

  const toggleCheck = (index) => {
    const updated = [...items];
    updated[index].checked = !updated[index].checked;
    setItems(updated);
  };

  return (
    <div className="w-full max-w-80 sm:max-w-sm md:max-w-md h-7/12 bg-white rounded shadow p-6 px-5 relative flex flex-col items-center">
      
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 rounded-md px-2 py-1 cursor-pointer text-gray-500 hover:text-white text-xl hover:bg-gray-300 hover:shadow font-bold"
      >
        <RxCross2 />
      </button>

      <h2 className="text-lg font-bold mb-2">To Do</h2>

      {/* Input + Add */}
      <div className="w-full flex items-center gap-2">
        <input
          className="flex-1 px-2 py-1 my-2 border-2 border-gray-300 focus:outline-none rounded"
          type="text"
          placeholder="Bir şey yaz..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
        />
        <button
          className="rounded-md px-3 py-2 cursor-pointer text-white text-xl bg-gray-300 hover:shadow font-bold"
          onClick={handleAdd}
        >
          <IoAdd />
        </button>
      </div>

      {/* Checklist */}
      <div className="w-full mt-4 flex flex-col gap-3 px-5">
        {items.map((item, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleCheck(index)}
              className=" accent-black "
            />
            <span className={item.checked ? "line-through text-gray-500 flex-1" : "flex-1 text-gray-600"}>
              {item.text}
            </span>
            <button
                onClick={closeModal}
                className="cursor-pointer px-2 py-2">
                <FaPen />
            </button>
            <button
                onClick={closeModal}
                className="cursor-pointer px-2 py-2">
                <FaTrash />
            </button>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Todo;
