import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, text: "hello", color: "#FF6B6B" },
  { id: 2, text: "hi", color: "#6B6BFF" },
  { id: 3, text: "hola", color: "#6BFF95" },
  { id: 4, text: "halu 4", color: "#FFD166" },
];

const SlideSweep = () => {
  const [cardList, setCardList] = useState(cards);

  const handleSwipe = (id) => {
    setCardList((prev) => prev.filter((card) => card.id !== id));
    setTimeout(() => {
      setCardList((prev) => [...prev, cards.find((c) => c.id === id)]);
    }, 500);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-80 h-96">
        <AnimatePresence>
          {cardList.map((card, index) => (
            <motion.div
              key={card.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, { offset, velocity }) => {
                if (offset.x > 100 || velocity.x > 2) handleSwipe(card.id);
                if (offset.x < -100 || velocity.x < -2) handleSwipe(card.id);
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full rounded-xl flex items-center justify-center shadow-lg cursor-grab"
          
            >
               <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          Mar 10, 2019
        </span>
        <button className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded hover:bg-gray-500">
          Design
        </button>
      </div>

      <div className="mt-2">
        <a
          href="#"
          className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
        >
          Accessibility tools for designers and developers
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
          ratione libero!
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
          Read more
        </a>

        <div className="flex items-center">
          <img
            className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
            alt="avatar"
          />
          <a href="#" className="font-bold text-gray-700 dark:text-gray-200">
            {card.text}
          </a>
        </div>
      </div>
    </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SlideSweep;
