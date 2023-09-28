'use client'
import { useMemo, useState, useEffect } from 'react';
import { GoogleMap, MarkerF, Marker, useLoadScript } from '@react-google-maps/api';

const schools = [
  {
    name: 'Acacia Elementary',
    location: { lat: 33.882140, lng: -117.897540 },
  },
  {
    name: 'Adelanto High School',
    location: { lat: 34.531130, lng: -117.441300 },
  },
  {
    name: 'Alvarado Intermediate',
    location: { lat: 33.983500, lng: -117.895040 }
  },
  {
    name: 'Arovista Elementary',
    location: { lat: 33.912660, lng: -117.910700 }
  },
  {
    name: 'St. Joseph Catholic School',
    location: { lat: 33.879090, lng: -117.869740 }
  },
  {
    name: 'Benito Ju√°rez Elementary School',
    location: { lat: 33.8296956, lng: -117.8811014 }
  },
  {
    name: 'Benton',
    location: { lat: 33.913902983139664, lng: -117.99611449241638 }
  },
  {
    name: 'Bernardo Yorba Middle School',
    location: { lat: 33.88378, lng: -117.789 }
  },
  {
    name: 'Brea High School',
    location: { lat: 33.9322624, lng: -117.8762167 }
  },
  {
    name: 'Brea Jr High School',
    location: { lat: 33.92575171751982, lng: -117.89498159337464 }
  }
]

function Map() {
  const center = useMemo(() => ({ lat: 33.902557373046875, lng: -117.83714294433594 }), []);
  const labelSize = { width: 200 }
  const labelPadding = 8;

  const customVolleyballIcon = {
    url: '/assets/images/volleyball.png', // path to the icon
    scaledSize: new window.google.maps.Size(40, 40) // size of the icon, adjust as needed
  };

  const customSchoolIcon = {
    url: '/assets/images/school.png', // path to the icon
    scaledSize: new window.google.maps.Size(30, 30) // size of the icon, adjust as needed
  }

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} icon={customVolleyballIcon} />
      {schools.map((school, index) => (
        <MarkerF key={index} position={school.location} icon={customSchoolIcon} />
      ))}
    </GoogleMap>
  );
}

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null; // Return nothing until the component has mounted
  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}
