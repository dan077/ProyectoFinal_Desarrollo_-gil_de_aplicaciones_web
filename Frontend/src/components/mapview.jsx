import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Zonas } from "./zonas";
import "leaflet/dist/leaflet.css";
import { JornadaContexts } from "../context/Jornada";

export const MapView = ({ central }) => {
   const { Jornada } = useContext(JornadaContexts);
   const [ubicacion, setUbicacion] = useState(central);
   const [data, setData] = useState(false);

   useEffect(() => {
      const llamdo = async () => {
         const url = `http://localhost:5000/classifier?shift=${Jornada}`;
         const response = await fetch(url)
            .then((response) => response.json())
            .catch(() => {
               return { err: "Ha ocurrido un error con la conexion" };
            });
         console.log(response);
         setData(response);
      };
      llamdo();
   }, [Jornada]);

   return (
      <>
         {data === undefined && (
            <div className="map-container">
               <MapContainer center={ubicacion} zoom={9} scrollWheelZoom={false}>
                  <TileLayer
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Zonas date={data} />
               </MapContainer>
            </div>
         )}
      </>
   );
};
