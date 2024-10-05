"use client";
import React from "react";
import { MdCancel } from "react-icons/md";
import WorkModalContent from "../workModalContent/WorkModalContent";
const WorkImageModal = ({ openModal, setOpenModal, title, content }) => {
  return (
    <div
      onClick={() => setOpenModal(false)}
      className={`fixed z-[100] w-screen ${
        openModal ? "visible opacity-100" : "invisible opacity-0"
      } inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute max-w-4xl rounded-lg bg-white p-6 drop-shadow-lg  dark:text-white ${
          openModal
            ? "opacity-1 duration-300"
            : "scale-110 opacity-0 duration-150"
        }`}
      >
        <MdCancel
          onClick={() => setOpenModal(false)}
          className="absolute right-3 top-3 text-3xl cursor-pointer text-yellow-400 z-50"
        />
        <div>
          <WorkModalContent />
        </div>
        {/* <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
        <p className="mb-5 text-sm opacity-80">{content}</p> */}
        {/* <div className="flex justify-end gap-2">
          <button
            onClick={() => setOpenModal(false)}
            className="rounded-md bg-emerald-600 px-6 py-[6px] text-white hover:bg-emerald-700"
          >
            Ok
          </button>
          <button
            onClick={() => setOpenModal(false)}
            className="rounded-md border border-rose-600 px-6 py-[6px] text-rose-600 duration-150 hover:bg-rose-600 hover:text-white"
          >
            Cancel
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default WorkImageModal;
