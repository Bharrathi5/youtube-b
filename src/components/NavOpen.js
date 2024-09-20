import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { MdNavigateNext, MdOutlineVideoLibrary } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

const NavOpen = () => {
  return (
    <div className="flex flex-col w-48 ml-4">
      <div className="border-b-2 my-3">
        <ul className="flex flex-col">
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            <HiOutlineHome />
            Home
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            <SiYoutubeshorts />
            Shorts
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            <MdOutlineVideoLibrary />
            Subscriptions
          </li>
        </ul>
      </div>
      <div className="border-b-2 my-3">
        <h3 className="font-semibold flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
          You <MdNavigateNext />
        </h3>
        <ul>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            Your channel
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            Playlist
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            Watch later
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            Liked videos
          </li>
        </ul>
      </div>
      <div className="border-b-2 my-3">
        <h3 className="font-semibold flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
          Subscriptions
        </h3>
        <ul>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            edureka!
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            TEDx Talks
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            StarPlus
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            Madras Samayal
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            SuperSimpleDev
          </li>
        </ul>
      </div>
      <div className="border-b-2 my-3">
        <h3 className="font-semibold flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
          Explore
        </h3>
        <ul>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            Trending
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            Shopping
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            Music
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            Sports
          </li>
          <li className="flex items-center pl-4 h-9 gap-5 hover:bg-neutral-200 hover:rounded-lg">
            Podcasts
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavOpen;
