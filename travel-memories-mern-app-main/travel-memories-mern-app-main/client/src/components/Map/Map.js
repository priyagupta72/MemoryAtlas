import React, { useState, useRef } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// 📌 Custom Marker Icon (Fixes missing marker issue)
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

// 📌 Search Bar Component with Autocomplete & Live Location
const SearchBar = ({ setCoordinates, mapRef }) => {
  const inputRef = useRef(null);
  const [suggestions, setSuggestions] = useState([]);

  // 📌 Fetch Location Suggestions
  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&countrycodes=IN`,
        { timeout: 10000 }
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching location suggestions:', error.message);
      alert('Network issue or OpenStreetMap server is slow. Trying backup server...');

      // 🔄 Backup API (Photon, if Nominatim fails)
      try {
        const backupResponse = await axios.get(
          `https://photon.komoot.io/api/?q=${query}&limit=5`,
          { timeout: 10000 }
        );
        setSuggestions(backupResponse.data.features.map((place) => ({
          display_name: place.properties.name,
          lat: place.geometry.coordinates[1],
          lon: place.geometry.coordinates[0]
        })));
      } catch (backupError) {
        console.error('Backup API also failed:', backupError.message);
        alert('Failed to fetch location suggestions. Check your internet and try again.');
      }
    }
  };

  // 📌 Handle Search Selection
  const handleSelectSuggestion = (place) => {
    const newCoordinates = [parseFloat(place.lat), parseFloat(place.lon)];
    setCoordinates(newCoordinates);
    if (mapRef.current) {
      mapRef.current.leafletElement.setView(newCoordinates, 12);
    }
    setSuggestions([]);
    inputRef.current.value = place.display_name;
  };

  // 📌 Handle Manual Search
  const handleSearch = async () => {
    const query = inputRef.current.value.trim();
    if (!query) return;

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}&countrycodes=IN`,
        { timeout: 10000 }
      );

      if (response.data.length > 0) {
        const place = response.data[0];
        handleSelectSuggestion(place);
      } else {
        alert('Location not found! Try modifying the name or use a nearby place.');
      }
    } catch (error) {
      console.error('Error searching location:', error.message);
      alert('Network issue. Trying backup server...');
    }
  };

  // 📌 Get User's Current Location
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newCoordinates = [position.coords.latitude, position.coords.longitude];
        setCoordinates(newCoordinates);
        if (mapRef.current) {
          mapRef.current.leafletElement.setView(newCoordinates, 12);
        }
      },
      () => {
        alert("Unable to retrieve your location.");
      }
    );
  };

  return (
    <div style={{
      position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
      zIndex: 1000, background: '#fff', padding: '8px', borderRadius: '10px',
      boxShadow: '0px 4px 6px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for a location..."
          onChange={(e) => fetchSuggestions(e.target.value)}
          style={{ flex: 1, padding: '8px', fontSize: '16px', border: 'none', outline: 'none', borderRadius: '5px' }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: '8px 12px', fontSize: '18px', background: '#007bff', color: 'white',
            border: 'none', cursor: 'pointer', borderRadius: '5px'
          }}
        >
          🔍
        </button>
        <button
          onClick={handleLocateMe}
          style={{
            padding: '8px 12px', fontSize: '18px', background: '#28a745', color: 'white',
            border: 'none', cursor: 'pointer', borderRadius: '5px', marginLeft: '8px'
          }}
        >
          📍
        </button>
      </div>

      {suggestions.length > 0 && (
        <ul style={{
          listStyleType: 'none', padding: '0', margin: '0', background: '#fff',
          width: '100%', borderRadius: '5px', boxShadow: '0px 4px 6px rgba(0,0,0,0.2)'
        }}>
          {suggestions.map((place, index) => (
            <li
              key={index}
              onClick={() => handleSelectSuggestion(place)}
              style={{
                padding: '8px', cursor: 'pointer', borderBottom: '1px solid #ddd'
              }}
            >
              {place.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MapComponent = () => {
  const [coordinates, setCoordinates] = useState([20, 0]); // Default: World Map
  const mapRef = useRef(null);

  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <Map ref={mapRef} center={coordinates} zoom={5} style={{ height: '100%', width: '90%', margin: 'auto' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />

        <SearchBar setCoordinates={setCoordinates} mapRef={mapRef} />

        <Marker position={coordinates} icon={customIcon}>
          <Popup>📍 Latitude: {coordinates[0]}, Longitude: {coordinates[1]}</Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default MapComponent;
