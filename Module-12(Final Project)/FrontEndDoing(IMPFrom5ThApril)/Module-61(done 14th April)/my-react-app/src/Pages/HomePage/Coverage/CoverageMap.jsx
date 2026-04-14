import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Example districts (you can change)
// const districts = [
//   { name: "Dhaka", position: [23.8103, 90.4125] },
//   { name: "Chattogram", position: [22.3569, 91.7832] },
//   { name: "Sylhet", position: [24.8949, 91.8687] },
//   { name: "Khulna", position: [22.8456, 89.5403] },
//   { name: "Rajshahi", position: [24.3745, 88.6042] },
//   { name: "Barisal", position: [22.7010, 90.3535] },
// ];



const CoverageMap = () => {

    const [centers, setCenters] = useState([])
    useEffect(() => {
        fetch("../../../warehouse.json")
        .then(res=>res.json()).then(data=>setCenters(data))
    }, [])
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[23.6850, 90.3563]} // Bangladesh center
        zoom={7}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {centers.map((district, index) => (
          <Marker key={index} position={district.position}>
            <Popup>{district.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CoverageMap;