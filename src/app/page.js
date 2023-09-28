'use client'
import { useMemo } from 'react';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

const schools = [
  {
    name: 'School 1',
    location: { lat: 33.882140, lng: -117.897540 },
  },
  {
    name: 'School 2',
    location: { lat: 34.531130, lng: -117.441300 },
  },
  {
    name: 'School 3',
    location: { lat: 33.983500, lng: -117.895040 }
  },
  {
    name: 'School 4',
    location: { lat: 33.912660, lng: -117.910700 }
  },
  {
    name: 'School 5',
    location: { lat: 33.879090, lng: -117.869740 }
  },
  {
    name: 'School 6',
    location: { lat: 33.8296956, lng: -117.8811014 }
  },
  {
    name: 'School 7',
    location: { lat: 33.913902983139664, lng: -117.99611449241638 }
  },
  {
    name: 'School 8',
    location: { lat: 33.88378, lng: -117.789 }
  },
  {
    name: 'School 9',
    location: { lat: 33.9322624, lng: -117.8762167 }
  },
  {
    name: 'School 10',
    location: { lat: 33.92575171751982, lng: -117.89498159337464 }
  }
]

function Map() {
  const center = useMemo(() => ({ lat: 33.902557373046875, lng: -117.83714294433594 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
      {schools.map((school, index) => (
        <MarkerF key={index} position={school.location} />
      ))}
    </GoogleMap>
  );
}
