import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faVolumeUp } from "@fortawesome/free-solid-svg-icons";
// Assuming QuranAlbum component is in the same directory

const QuranPlayer = ({ surah, selectedChapter, setIsPlaying, recitationName }) => {
  const [chapterSurah, setChapterSurah] = useState([]);

  useEffect(() => {
    // Filter audio files for the selected chapter
    const filteredSurah = surah.filter(
      (audio) => audio.chapter_id === selectedChapter.id
    );
    setChapterSurah(filteredSurah);
  }, [surah, selectedChapter]);

  return (
    <div
      className="relative mx-auto overflow-hidden bg-gradient-to-b from-purple-600 to-indigo-700 rounded-lg shadow-lg mt-5 p-6"
      style={{ width: "80%" }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-purple-600 to-indigo-700 opacity-50 rounded-lg"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-6">
          Surah {selectedChapter.name_simple}
        </h2>
        <p className="text-lg font-semibold text-gray-300 mb-10 mt-0">{recitationName}</p>
        <div className="overflow-y-auto max-h-72">
          {chapterSurah.map((audio, index) => (
            <div key={index} className="mb-4 text-white">
              <div className="flex items-center">
                <audio
                  className="w-full"
                  controls
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src={audio.audio_url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          ))}
        </div>
        {/* You can add additional controls here if needed */}
      </div>
    </div>
  );
};

export default QuranPlayer;
