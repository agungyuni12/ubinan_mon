// client/src/MapComponent.js

import React from 'react';
// 1. Impor komponen Polygon
import { MapContainer, TileLayer, ScaleControl, Polygon } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  // URL untuk Google Satellite
  const googleSatelliteUrl = 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}';

  // Koordinat tetap di Dompu, Nusa Tenggara Barat
  const position = [-8.53, 118.46]; 
  const zoomLevel = 13;

  // 2. Definisikan koordinat untuk sudut-sudut poligon
  // Contoh: area persegi di sekitar Dompu
  const polygonPositions = [
    [-8.52, 118.45],
    [-8.52, 118.47],
    [-8.54, 118.47],
    [-8.54, 118.45],
  ];

  // Opsi untuk styling poligon (misalnya, warna garis)
  const polygonOptions = { color: 'cyan', weight: 2 };

  return (
    <MapContainer 
      center={position} 
      zoom={zoomLevel} 
      style={{ height: '100vh', width: '100%' }}
    >
      {/* Menggunakan TileLayer untuk Google Satellite */}
      <TileLayer
        url={googleSatelliteUrl}
        attribution='&copy; Google'
        maxZoom={20}
        subdomains={['mt0','mt1','mt2','mt3']}
      />

      {/* 3. Tambahkan komponen Polygon ke dalam peta */}
      <Polygon pathOptions={polygonOptions} positions={polygonPositions} />
      
      <ScaleControl position="bottomleft" />
    </MapContainer>
  );
};

export default MapComponent;
