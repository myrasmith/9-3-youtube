import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  // https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=cute%20cats&type=video&key=[YOUR_API_KEY]

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    //Insert users search query into an api url endpoint
    // Use fetch to start the api call
    // when the call completes, set the search result state to match our api results
  };

  const displayError = <div>Oh no! No search results yet...</div>;

  const searchResultThumbnails = searchResults.map((video) => (
    <Link to={`/videos/${video.videoId}`}>
      <img src="" alt="" />
    </Link>
  ));

  return (
    <>
      <h2>Homepage</h2>
      <SearchBar handleSearch={handleSearch} />
      {searchResults.length > 0 ? searchResultThumbnails : displayError}
    </>
  );
}
