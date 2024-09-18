"use client";

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa"; // Importing icons
import styles from "./Accordion.module.css";

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button
        className={styles.accordionTitle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        style={{ fontWeight: "bold" }}
      >
        <FaChevronRight
          className={styles.icon}
          style={{ color: "#DCAB0F" }}
        />
        {title}
      </button>
      {isOpen && (
        <div className={styles.accordionContent}>
          {content}
        </div>
      )}
    </div>
  );
}
