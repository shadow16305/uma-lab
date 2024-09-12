import { useState } from "react";

import { motion } from "framer-motion";
import chatBubble from "../../assets/bubble.png";
import close from "../../assets/4.png";
import telegram from "../../assets/2.png";

const ChatBubble = (props) => {
  const [showBubbles, setShowBubbles] = useState(false);
  const [bubbleImage, setBubbleImage] = useState(chatBubble);

  const handleBubbleClick = () => {
    setShowBubbles(!showBubbles);
    if (bubbleImage === chatBubble) {
      setBubbleImage(close);
    } else {
      setBubbleImage(chatBubble);
    }
  };
  return (
    <div
      className={`flex flex-col gap-y-5 items-center absolute md:sticky bottom-10 md:bottom-14 left-[75%] sm:left-[85%] md:left-[93%] w-16 z-0 md:z-10 pb-4 cursor-pointer ${props.className}`}>
      {showBubbles && (
        <>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 mb-4 text-white rounded-full bg-sky-600 hover:bg-sky-700">
            <a href="https://t.me/UMAlab" target="_blank" rel="noreferrer">
              <img src={telegram} width={35} height={50} alt="logo" className="invert" />
            </a>
          </motion.div>
        </>
      )}

      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 text-white rounded-full bg-sky-500 hover:bg-sky-600"
        onClick={handleBubbleClick}>
        <img
          src={bubbleImage}
          width={`${bubbleImage === chatBubble ? 37 : 35}`}
          height={50}
          alt="logo"
          className={`${bubbleImage === chatBubble ? "" : "invert"}`}
        />
      </motion.div>
    </div>
  );
};

export default ChatBubble;
