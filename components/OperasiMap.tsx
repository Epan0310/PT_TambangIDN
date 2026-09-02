"use client";

import { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { SlidersHorizontal, Anchor, MapPin } from "lucide-react";

// Tipe Data Lokasi
interface MiningLocation {
  id: string;
  name: string;
  type: "nikel" | "batubara text-black" | "tembaga" | "pelabuhan";
  typeLabel: string;
  lat: number;
  lng: number;
  color: string;
  capacity: string;
  status: string;
}

// Data Lokasi Tambang Real di Indonesia
const locations: MiningLocation[] = [
  {
    id: "1",
    name: "Kaltim Prima Site",
    type: "batubara text-black",
    typeLabel: "Tambang Batubara",
    lat: 0.903,
    lng: 117.525,
    color: "#09090b", // black
    capacity: "15 Juta Ton / Tahun",
    status: "Operasional Aktif",
  },
  {
    id: "2",
    name: "Morowali Industrial Site",
    type: "nikel",
    typeLabel: "Tambang Nikel",
    lat: -2.825,
    lng: 122.155,
    color: "#f59e0b", // amber-500
    capacity: "8.5 Juta Ton / Tahun",
    status: "Smelter & Pit Aktif",
  },
  {
    id: "3",
    name: "Weda Bay Site",
    type: "nikel",
    typeLabel: "Tambang Nikel",
    lat: 0.478,
    lng: 127.886,
    color: "#f59e0b", // amber-500
    capacity: "6.2 Juta Ton / Tahun",
    status: "Ekspansi Tahap II",
  },
  {
    id: "4",
    name: "Grasberg Copper Complex",
    type: "tembaga",
    typeLabel: "Konsentrat Tembaga",
    lat: -4.058,
    lng: 137.116,
    color: "#10b981", // emerald-500
    capacity: "3.1 Juta Ton / Tahun",
    status: "Operasional Aktif",
  },
  {
    id: "5",
    name: "Pelabuhan Muat Balikpapan",
    type: "pelabuhan",
    typeLabel: "Pelabuhan Logistik",
    lat: -1.265,
    lng: 116.831,
    color: "#0284c7", // sky-600
    capacity: "Dermaga 50.000 DWT",
    status: "24/7 Logistik Port",
  },
];

// Helper untuk membuat custom icon marker Leaflet agar tidak error asset 404
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: "custom-leaflet-pin",
    html: `
      <div style="
        width: 18px;
        height: 18px;
        background-color: ${color};
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);
      "></div>
    `,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -12],
  });
};

export default function OperasiMap() {
  const [filter, setFilter] = useState<string>("all");

  const filteredLocations = useMemo(() => {
    if (filter === "all") return locations;
    return locations.filter((loc) => loc.type.includes(filter));
  }, [filter]);

  return (
    <div className="space-y-4">
      {/* Header & Filter Controller */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-950 tracking-tight">
            Peta Operasional &amp; Aset Interaktif
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Klik pada marker untuk melihat detail kapasitas &amp; status
            fasilitas.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 bg-gray-100 p-1 rounded-lg border border-gray-200 text-xs font-semibold">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded-md transition ${
              filter === "all"
                ? "bg-white text-gray-950 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => setFilter("nikel")}
            className={`px-3 py-1.5 rounded-md transition ${
              filter === "nikel"
                ? "bg-amber-500 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Nikel
          </button>
          <button
            onClick={() => setFilter("batubara")}
            className={`px-3 py-1.5 rounded-md transition ${
              filter === "batubara"
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Batubara
          </button>
          <button
            onClick={() => setFilter("tembaga")}
            className={`px-3 py-1.5 rounded-md transition ${
              filter === "tembaga"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Tembaga
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative bg-slate-100 border border-gray-200 rounded-2xl h-[420px] sm:h-[480px] w-full overflow-hidden shadow-sm z-0">
        <MapContainer
          center={[-1.5, 124.0]} // Tengah Indonesia Timur
          zoom={5}
          scrollWheelZoom={false}
          className="h-full w-full z-0"
        >
          {/* Tile Layer OpenStreetMap / CartoDB Light untuk estetika bersih */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />

          {filteredLocations.map((loc) => (
            <Marker
              key={loc.id}
              position={[loc.lat, loc.lng]}
              icon={createCustomIcon(loc.color)}
            >
              <Popup>
                <div className="p-1 space-y-1.5 min-w-[180px]">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {loc.typeLabel}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 m-0">
                    {loc.name}
                  </h4>
                  <div className="text-xs text-gray-600 space-y-0.5 pt-1">
                    <p className="m-0">
                      <strong>Kapasitas:</strong> {loc.capacity}
                    </p>
                    <p className="m-0">
                      <strong>Status:</strong> {loc.status}
                    </p>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Legenda Floating Box (Top Right) */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-3.5 shadow-lg w-52 text-xs space-y-2 z-[400] pointer-events-auto">
          <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-1.5 text-[11px] uppercase tracking-wider">
            Legenda Aset
          </h3>
          <ul className="space-y-1.5 text-[11px] text-gray-700 font-medium">
            <li className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
              <span>Tambang Nikel</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-black shrink-0" />
              <span>Tambang Batubara</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
              <span>Konsentrat Tembaga</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-600 shrink-0" />
              <span>Pelabuhan Muat</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
