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
      className={`flex flex-col gap-y-5 items-center absolute lg:sticky bottom-24 md:bottom-16 left-[75%] sm:left-[85%] lg:left-[92%] w-16 z-0 lg:z-10 ${props.className}`}
    >
      {showBubbles && (
        <>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-white bg-sky-600 hover:bg-sky-700 rounded-full p-4"
          >
            <a href="https://t.me/UMAlab">
              <img
                src={telegram}
                width={35}
                height={50}
                alt="logo"
                className="invert"
              />
            </a>
          </motion.div>
        </>
      )}

      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white bg-sky-500 hover:bg-sky-600 rounded-full p-4"
        onClick={handleBubbleClick}
      >
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
