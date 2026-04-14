import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

import districtsData from "../../../warehouse.json";

export default function CoverageSection() {
    const [search, setSearch] = useState("");

    // simple filter (case insensitive + partial)
    const filtered = districtsData.filter((d) =>
        d.district.toLowerCase().includes(search.toLowerCase())
    );

    // pick first match for map center
    const selected = filtered[0];

    return (
        <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-center">
                We are available in 64 districts
            </h1>

            {/* Search */}
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Search district..."
                    className="input input-bordered w-full max-w-md"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Map */}
            <div className="h-[500px] rounded-2xl overflow-hidden shadow-lg">
                <MapContainer
                    center={
                        selected
                            ? [selected.latitude, selected.longitude]
                            : [23.685, 90.3563]
                    }
                    zoom={selected ? 10 : 7}
                    className="h-full w-full"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* show only filtered markers */}
                    {filtered.map((d, i) => (
                        <Marker key={i} position={[d.latitude, d.longitude]}>
                            <Popup>{d.district}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}