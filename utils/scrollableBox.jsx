import React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/ScrollableBox.module.css";

const useScrollCheck = (content) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [needsScroll, setNeedsScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (containerRef.current && contentRef.current) {
        setNeedsScroll(
          contentRef.current.scrollHeight > containerRef.current.clientHeight
        );
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);

    return () => {
      window.removeEventListener("resize", checkScroll);
    };
  }, [content]);

  return { containerRef, contentRef, needsScroll };
};

export default function ScrollableBox({ content }) {
  const { containerRef, contentRef, needsScroll } = useScrollCheck(content);

  return (
    <div className="relative h-64 w-64 overflow-hidden">
      <div
        ref={containerRef}
        className="relative h-full w-full overflow-hidden"
      >
        <div
          ref={contentRef}
          className={`absolute inset-0 overflow-y-auto ${styles.scrollbarHide}`}
        >
          <div className={`space-y-1 ${styles.content}`}>
            <p className="text-black">{content}</p>
          </div>
        </div>
        {needsScroll && (
          <div
            className={`arrow-container animate-bounce ${styles.arrowContainer}`}
          >
            <div className={`arrow ${styles.arrow}`}></div>
          </div>
        )}
      </div>
    </div>
  );
}
