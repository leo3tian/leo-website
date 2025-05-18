import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ModalContent {
  type: "text" | "image"; // Define the types of content
  value: string; // Text or image URL
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  date: string;
  tags: string[];
  content: ModalContent[]; // Array of content blocks
}

export default function Modal({
  isOpen,
  onClose,
  title,
  date,
  tags,
  content,
}: ModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all border border-gray-200">
                <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900">
                  {title}
                </Dialog.Title>

                <div className="mt-2 flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-2 text-sm text-gray-500">{date}</p>

                <hr className="border-t border-gray-300 my-6" />

                {/* Render dynamic content */}
                <div className="space-y-6">
                  {content.map((block, index) => (
                    <div key={index}>
                      {block.type === "text" && (
                        <p className="text-gray-700">{block.value}</p>
                      )}
                      {block.type === "image" && (
                        <div className="relative w-full">
                          <Image
                            src={block.value}
                            alt={`Content image ${index + 1}`}
                            layout="responsive"
                            width={100}
                            height={50}
                            className="object-contain rounded-md shadow-md border border-gray-200"
                          />
                        </div>
                      )}
                      {/* Add <hr> between blocks, but not after the last block */}
                      {index < content.length - 1 && (
                        <hr className="border-t border-gray-300 my-6" />
                      )}
                    </div>
                  ))}
                </div>

                <hr className="border-t border-gray-300 my-6" />

                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-md font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}