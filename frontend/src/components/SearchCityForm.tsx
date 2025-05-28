import React, { useState } from "react";

type Props = {
  onSubmit: (city: string) => void;
};

const SearchCityForm = ({ onSubmit }: Props) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSubmit(city.trim());
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city"
      />
      <button type="submit">Check Activities</button>
    </form>
  );
};

export default SearchCityForm;
