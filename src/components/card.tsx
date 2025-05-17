// filepath: c:\Users\Leo\Desktop\PersonalProj\leo-blog\src\components\entry.tsx
"use client";

import { useState } from "react";
import Modal from "./modal";

interface ModalContent {
  type: "text" | "image";
  value: string;
}

interface EntryProps {
  type: "project" | "experience";
  title: string;
  date: string;
  tags: string[];
  content: ModalContent[]; // Directly pass the content in the required structure
  imageSrc: string;
  onClose?: () => void;
}

export default function Card({
  type,
  title,
  date,
  tags,
  content,
  imageSrc,
}: EntryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Determine the border color based on the type
  const borderColor = type === "project" ? "border-blue-400" : "border-orange-400";

  return (
    <>
      <div
        className={`border-l-4 ${borderColor} rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden mb-6 cursor-pointer`}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="p-4 bg-white">
          <div className="mb-4">
            <img
              className="rounded-md shadow-sm hover:shadow-md transition-all duration-300"
              src={imageSrc}
              alt={`${title} image`}
              width={400}
              height={100}
            />
          </div>

          <div className="text-xl font-bold text-gray-800">{title}</div>
          <div className="text-sm font-medium text-gray-500 mt-1">{date}</div>

          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        date={date}
        tags={tags}
        content={content} // Pass content directly to the modal
      />
    </>
  );
}