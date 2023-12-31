// "use client";

// import React, { useState } from "react";
// import Draggable from "react-draggable";

// export function Scroll({ children }: { children: React.ReactNode }) {
//   const [scrolling, setScrolling] = useState(false);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleStart = () => {
//     setScrolling(true);
//   };

//   const handleStop = () => {
//     setScrolling(false);
//   };

//   const handleDrag = (e, ui) => {
//     if (scrolling) {
//       setScrollPosition(scrollPosition + ui.deltaX);
//     }
//   };

//   return (
//     <Draggable
//       axis="x"
//       onStart={handleStart}
//       onStop={handleStop}
//       onDrag={handleDrag}
//       defaultPosition={{ x: 0, y: 0 }}
//       scale={1}
//     >
//       <div
//         className="flex space-x-4 pb-4"
//         style={{ transform: `translateX(${scrollPosition}px)` }}
//       >
//         {children}
//       </div>
//     </Draggable>
//   );
// }
