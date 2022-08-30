import React, { useContext, useEffect, useState } from "react";
import { Imagenes } from "../assets/helper";
import { JornadaContexts } from "../context/Jornada";
export const Inputs = () => {
   const { setJornada } = useContext(JornadaContexts);

   const [Ubicacion, setUbicacion] = useState("");
   const [Estado, setEstado] = useState("Mañana");
   const BuscarIMG = (estado) => {
      console.log(estado);
      if (estado != undefined && estado != null && estado != "") {
         const img = Imagenes.filter((imagen) => imagen.Nombre === estado);
         return img[0].Url;
      }
   };

   useEffect(() => {
      if (Estado != undefined && Estado != null && Estado != "") {
         const img = Imagenes.filter((imagen) => imagen.Nombre === Estado);
         setJornada(img[0].Value);
      }
   }, [Estado]);

   return (
      <div className="input-container">
         <div className="containerImagen">
            <img className="imagen" src={BuscarIMG(Estado)} align="center" />
         </div>

         <h1 className="titulo">Mapa zonas violentas</h1>
         <div className="inputs">
            <h4 className="titulo-form">Jornada</h4>

            <form className="select">
               <select name="Jornada" onChange={(event) => setEstado(event.target.value)}>
                  <option value="Mañana">Mañana</option>
                  <option value="Tarde">Tarde</option>
                  <option value="Noche">Noche</option>
               </select>
            </form>
         </div>
      </div>
   );
};
