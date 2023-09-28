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
  },
  {
    name: 'Brookhaven Elementary school',
    location: { lat: 33.8954422, lng: -117.8598897 }
  },
  {
    name: 'Bryant Ranch Elementary',
    location: { lat: 33.879715992468064, lng: -117.71519601345062 }
  },
  {
    name: 'Buena Park middle school',
    location: { lat: 33.8595568, lng: -118.0136412 }
  },
  {
    name: 'Cabrillo Point',
    location: { lat: 32.9396997, lng: -117.0301492 }
  },
  {
    name: 'California Connections Academy',
    location: { lat: 33.4781505, lng: -117.6710974 }
  },
  {
    name: 'California High School',
    location: { lat: 33.9438923, lng: -118.0240736 }
  },
  {
    name: 'Calvary Chapel Yorba Linda',
    location: { lat: 33.8887051, lng: -117.8054959 }
  },
  {
    name: 'Calvary Christian School Santa Ana',
    location: { lat: 33.75363900492187, lng: -117.83524632453918 }
  },
  {
    name: 'Canyon High School',
    location: { lat: 33.8472204, lng: -117.788183 }
  },
  {
    name: 'Canyon Rim Elementary',
    location: { lat: 33.8451039, lng: -117.741871 }
  }
]

// Cerritos High School
// Cerro Villa
// Charter Oak High School
// Christ Lutheran Brea
// Citrus Hills
// Covenant Christian School
// Crescent Elementary
// Cypress High School
// Diamond Bar High School
// El Dorado High School
// El Modena
// El Rancho Charter School
// El Toro High School
// Esperanza High School
// Evergreen Elementary School
// Fairmont Elementary School
// Fairmont Private - Anaheim Hills
// Friends Christian Middle School
// Robert C Fisler
// Foothill High School Tustin
// Fullerton High School
// Glen A Wilson
// Glenknoll Elementary School
// Golden Elementary
// Granada Middle School
// Heights Christian School La Mirada
// Hepatha Lutheran Church and School
// Heritage Oak Private Education
// Hewes middle school
// Hollingworth Elementary
// Holy Family Catholic School
// Imperial Middle School
// JFK middle college high school
// John A. Rowland High School
// John Marshall
// John O. Tynes Elementary
// Kraemer Middle School
// La Habra HS
// Ladera Vista Junior High School
// Laguna Road Elementary
// Lakeview Elementary
// Las Lomas Elementary
// Legacy Magnet Academy
// Lexington junior high
// Linda Vista
// Los Altos
// Loving Savior Luther school
// Orange Lutheran High School
// Mabel Paine Elementary
// Mariposa elementary
// MLK High School
// Mater Dei High School
// Mayfair
// McPherson Magnet school
// Morse Elementary
// Nohl Canyon Elementary
// Norco High School
// Olinda Elementary School
// Oxford Academy
// Parks Junior High
// Parkview
// Prado View Elementary
// Price elementary
// Ramirez Intermediate
// Rancho Starbuck
// Robert O. Townsend Junior High
// Rosary Academy
// Rowland High School
// Saint Angela Merici
// St. Francis of Assisi Catholic School
// St. Mark
// Salem Lutheran School
// Santa Margarita High School
// Santiago High School
// Sierra Vista
// Sky Mountain Charter School
// Sonora High School
// South Junior High
// South Pointe Middle School
// Springs Charter School
// Saint Pius V Catholic School
// St. John's Lutheran
// St. Paul's Lutheran School
// St. Bernard Elementary School
// St. George Parish school
// St. Juliana
// Sunny Hills High School
// Trabuco Hills HS
// Travis Ranch Middle School
// Troy High School
// Tuffree Middle High
// Tustin High School
// Tynes Elementary
// Valencia High School
// Van Buren Elementary
// Villa Park High School
// Vineyard Christian
// Wagner
// Walnut HS
// Whittier Christian High School
// Woodsboro Elementary School
// Ybarra Academy of Arts and Technology
// Yorba Linda High School
// Yorba Linda Middle School`

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
        <Marker key={index} position={school.location} icon={customSchoolIcon} />
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
