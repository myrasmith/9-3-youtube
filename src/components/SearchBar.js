import { useState } from "react";

export default function SearchBar({ handleSearch }) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.vale);
  };
  return (
    <form onSubmit={handleSearch}>
      <input onChange={handleChange} type="text" name="query" id="query" />
      <input type="submit" value="Search" />
    </form>
  );
}
