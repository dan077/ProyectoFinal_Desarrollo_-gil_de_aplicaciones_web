import React from "react";
import { Marker, Rectangle, Tooltip } from "react-leaflet";

export const Zonas = ({ date }) => {
   const { Distritos } = date;
   return Distritos.map((ubi) => {
      return (
         <Rectangle
            key={ubi.Distrito}
            bounds={ubi.Ubicacion}
            pathOptions={ubi.Violento === true ? { color: "red" } : { color: "green" }}
         >
            <Tooltip>
               <span>{ubi.Distrito}</span>
            </Tooltip>
         </Rectangle>
      );
   });
};
