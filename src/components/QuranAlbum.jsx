import React, { useState } from "react";
import QuranImage from "../assets/quran_image.jpg";
import DiskImage from "../assets/disk_image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const QuranAlbum = ({ isPlaying }) => {

  return (
    <div className="relative w-72 h-72">
      <div className="absolute top-0 left-0 w-full h-full rounded-md overflow-hidden z-10">
        <img src={QuranImage} alt="Quran" className="object-cover w-full h-full" style={{ borderRadius: '1rem' }} />
      </div>
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
        <div className="absolute right-0 transform translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full overflow-hidden">
          <img src={DiskImage} alt="Disk" className={`w-full ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: isPlaying ? '8s' : '0s' }} />
        </div>
      </div>
    </div>
  );
};

export default QuranAlbum;
