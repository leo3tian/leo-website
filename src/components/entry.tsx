"use client"

import { ReactNode, useRef, useEffect } from 'react';
import Image from "next/image";
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function Entry({title, date, children, imageSrc = "/wordplay1.png"}: {
  title: string, 
  date: string, 
  tags: string[], 
  children: ReactNode,
  imageSrc?: string
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
            setTimeout(() => setIsTyping(true), 300);
        } else {
            setIsTyping(false);
        }
    };

    useEffect(() => {
        if (isExpanded) {
            setTimeout(() => setIsTyping(true), 300);
        } else {
            setIsTyping(false);
        }
    }, [isExpanded]);
    
    return (
        <div className="border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden mb-6">
            <div 
                className="cursor-pointer p-4 bg-white" 
                onClick={toggleExpand}
            >
                {/* <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-blue-600 text-white px-2 py-1 rounded-sm text-xs font-medium"
                        >
                            {item}
                        </div>
                    ))}
                </div> */}
                <div className="mb-4">
                    <Image
                        className="rounded-md shadow-sm hover:shadow-md transition-all duration-300"
                        src={imageSrc}
                        alt={`${title} image`}
                        width={400}
                        height={100}
                        priority
                    />
                </div>
                
                <div className="text-xl font-bold text-gray-800">{title}</div>
                <div className="text-sm font-medium text-gray-500 mt-1">{date}</div>
                
                <div className="mt-3 flex items-center text-blue-600 text-sm font-medium">
                    {isExpanded ? (
                        <>
                            <FiChevronUp className="mr-1" /> Hide details
                        </>
                    ) : (
                        <>
                            <FiChevronDown className="mr-1" /> Show details
                        </>
                    )}
                </div>
            </div>

            <div 
                ref={contentRef}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-96' : 'max-h-0'
                }`}
            >
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <div className={`
                        ${isTyping ? 'animate-typing' : 'opacity-0'}
                        overflow-hidden whitespace-normal
                    `}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entry;
