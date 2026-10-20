"use client";

import React, { useEffect, useRef, useState } from "react";

interface WarriMapProps {
  onSelectShipment?: (id: string) => void;
}

export default function WarriMap({ onSelectShipment }: WarriMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    // Load Leaflet CSS if not already present
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    const initMap = () => {
      if (!isMounted || !mapContainerRef.current || mapInstanceRef.current) return;
      const L = (window as any).L;
      if (!L) return;

      try {
        // Warri & Effurun, Delta State, Nigeria coordinates: ~5.54° N, 5.76° E
        const warriCenter = [5.545, 5.765];
        const map = L.map(mapContainerRef.current, {
          center: warriCenter,
          zoom: 13,
          zoomControl: false,
          attributionControl: false,
        });

        // OpenStreetMap standard tiles (Free, no watermark, crisp Warri Delta State mapping)
        L.tileLayer(
          "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }
        ).addTo(map);

        // Add subtle custom attribution
        L.control
          .attribution({ position: "bottomright" })
          .addAttribution('&copy; <a href="https://openstreetmap.org">OSM</a> Warri, Delta State')
          .addTo(map);

        // Route Coordinates across Warri & Effurun, Delta State:
        // NPA Port -> Enerhen -> Effurun Roundabout -> Refinery Road
        const routeCoordinates = [
          [5.512, 5.728], // NPA Port Warri
          [5.522, 5.736], // Warri Sapele Rd
          [5.534, 5.748], // Enerhen Junction
          [5.544, 5.760], // Airport Rd, Effurun
          [5.552, 5.772], // Effurun Roundabout
          [5.560, 5.762], // Jakpa Rd Junction
          [5.566, 5.750], // Refinery Road, Ekpan / Warri
        ];

        // Polyline (Green path matching Dribbble reference)
        const routeLine = L.polyline(routeCoordinates, {
          color: "#00875A",
          weight: 5,
          opacity: 0.85,
          smoothFactor: 1,
          lineJoin: "round",
          lineCap: "round",
        }).addTo(map);

        // Origin Marker (NPA Warri Port)
        const originIcon = L.divIcon({
          className: "custom-origin-pin",
          html: `
            <div style="background-color: #0A0D14; color: #FFF; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; box-shadow: 0 4px 12px rgba(0,0,0,0.3); border: 2px solid #FFF;">
              A
            </div>
          `,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });

        L.marker([5.512, 5.728], { icon: originIcon })
          .addTo(map)
          .bindPopup("<b>Origin:</b> NPA Commercial Port, Warri");

        // Destination Marker (Refinery Road, Warri)
        const destinationIcon = L.divIcon({
          className: "custom-dest-pin",
          html: `
            <div style="background-color: #EF4444; color: #FFF; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 4px 14px rgba(239,68,68,0.45); border: 2.5px solid #FFF;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        L.marker([5.566, 5.750], { icon: destinationIcon })
          .addTo(map)
          .bindPopup("<b>Destination:</b> Refinery Road, Ekpan / Warri");

        // Live Moving Courier Position Marker along Airport Rd / Effurun
        const courierIcon = L.divIcon({
          className: "custom-courier-pin",
          html: `
            <div style="position: relative; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
              <div style="position: absolute; inset: 0; border-radius: 50%; background-color: rgba(0, 135, 90, 0.35); animation: ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
              <div style="position: relative; z-index: 2; width: 32px; height: 32px; border-radius: 50%; background-color: #00875A; color: #FFFFFF; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,135,90,0.5); border: 2.5px solid #FFFFFF;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
              </div>
            </div>
          `,
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        });

        L.marker([5.548, 5.765], { icon: courierIcon })
          .addTo(map)
          .bindPopup("<b>Current Courier:</b> Near Effurun Roundabout, Warri (In Transit)");

        mapInstanceRef.current = map;
        setMapLoaded(true);
      } catch (err) {
        console.error("Leaflet initialization failed", err);
      }
    };

    // Load Leaflet JS if not available
    if (!(window as any).L) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.async = true;
      script.onload = () => {
        if (isMounted) initMap();
      };
      document.body.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  const handleRecenter = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView([5.545, 5.765], 13);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Map Container */}
      <div
        ref={mapContainerRef}
        style={{
          width: "100%",
          height: "100%",
          minHeight: "560px",
          backgroundColor: "#E2E8F0",
        }}
      />

      {/* Fallback styling & keyframes for pulsing courier pin */}
      <style jsx global>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .leaflet-container {
          font-family: inherit !important;
        }
      `}</style>
    </div>
  );
}
