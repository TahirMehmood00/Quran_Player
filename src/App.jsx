import React, { useState, useEffect, useRef } from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import FeaturesSection from "../src/components/FeaturesSection";
import FeaturedSection from "../src/components/FeaturedSection";
import TestimonialsSection from "../src/components/TestimonialsSection";
import QuranPlayer from "../src/components/QuranPlayer";
import QuranAlbum from "./components/QuranAlbum";

const App = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [surah, setSurah] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [recitations, setRecitations] = useState([]); 
  const [selectedRecitation, setSelectedRecitation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions ,setSuggestions] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState({}); 
  const inputRef = useRef(null); 
  const [buttonClicked,setButtonClicked] = useState("");

  useEffect(() => {
    fetchRecitations();
    fetchChapters();
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const fetchRecitations = async () => {
    try {
      const response = await fetch(
        "https://api.quran.com/api/v4/resources/recitations"
      );
      const data = await response.json();
      const recitationsData = data?.recitations || [];
      setRecitations(recitationsData);
    } catch (error) {
      console.error("Error fetching recitations:", error);
    }
  };

  const fetchChapters = async () => {
    try {
      const response = await fetch("https://api.quran.com/api/v4/chapters");
      if (!response.ok) {
        throw new Error("Failed to fetch chapters");
      }
      const data = await response.json();
      setChapters(data.chapters);
    } catch (error) {
      console.error("Error fetching chapters:", error);
    }
  };

  const handleSearchButtonClick = async () => {
    setButtonClicked("Clicked");
    if (selectedChapter && selectedRecitation) {
      try {
        const response = await fetch(
          `https://api.quran.com/api/v4/chapter_recitations/${selectedRecitation.id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch recitations for the selected chapter");
        }
        const data = await response.json();
        setSurah(data.audio_files);
      } catch (error) {
        console.error("Error fetching recitations:", error);
      }
    } else {
      // Clear surah state if no chapter or recitation is selected
      setSurah([]);
    }
  };
  


  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRecitationDropdownChange = (event) => {
    const selectedRecitationSlug = event.target.value;
    const parts = selectedRecitationSlug.split(", ");
    const selectedRecitation = recitations.find(
      (recitation) =>
        recitation.reciter_name === parts[0] && recitation.style == parts[1]
    );
    setSelectedRecitation(selectedRecitation);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filteredChapters = chapters.filter((chapter) =>
      chapter.name_simple.toLowerCase().includes(query.toLowerCase())
    );
    const limitedSuggestions = filteredChapters.slice(0, 10);
    setSuggestions(limitedSuggestions);
  };

  const handleChapterSelect = (chapter) => {
    setSearchQuery(chapter.name_simple);
    setSelectedChapter(chapter);
    console.log(selectedChapter)
    setSuggestions([]);
  };
  
  

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  return (
    <div className="bg-gradient-to-b from-purple-600 to-indigo-700 min-h-screen">
      <Header />
      <FeaturedSection />
      <div className="flex justify-center items-center">
        {/* Dropdown for selecting recitation */}
        <select
          value={selectedRecitation.slug}
          onChange={handleRecitationDropdownChange}
          className="py-3 px-4 rounded-lg font-semibold shadow-lg focus:outline-none appearance-none"
          style={{ width: "200px" }}
        >
          <option value="">Select Recitation</option>
          {/* Populate dropdown options with recitations */}
          {recitations.map((recitation) => (
            <option key={recitation.id} value={recitation.slug}>
              {recitation.style
                ? `${recitation.reciter_name}, ${recitation.style}`
                : recitation.reciter_name}
            </option>
          ))}
        </select>
        {/* Search input */}
        <div className="ml-3 relative">
          <input
            type="text"
            placeholder="Search..."
            className="py-3 px-4 rounded-lg font-semibold shadow-lg focus:outline-none text-red"
            style={{ width: "400px" }}
            ref={inputRef}
            value={searchQuery}
            onChange={handleSearch}
          />
          {suggestions.length > 0 && (
            <ul className="absolute text-left left-0 w-full bg-white rounded-lg shadow-lg z-10 border border-gray-300">
              {suggestions.map((chapter) => (
                <li
                  key={chapter.id}
                  onClick={() => handleChapterSelect(chapter)}
                  className="cursor-pointer hover:bg-gray-100 p-2 text-black pl-4"
                >
                  {chapter.name_simple}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Search button */}
        <button
          onClick={handleSearchButtonClick}
          className="ml-2 bg-white text-indigo-700 py-3 px-8 rounded-full font-semibold shadow-lg hover:bg-indigo-100 hover:text-indigo-800 transition duration-300"
        >
          Get Started
        </button>
      </div>
      <div className="flex justify-center mt-20">
  <div className="w-full max-w-4xl">
  
    <QuranPlayer surah={surah} selectedChapter={selectedChapter} setIsPlaying={setIsPlay} recitationName={selectedRecitation.reciter_name} />
 
  </div>
  <div>
    <QuranAlbum isPlaying={isPlay}/>
  </div>
</div>

      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default App;
