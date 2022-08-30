import React, { createContext, useState } from "react";

const JornadaContexts = createContext();
const { Provider } = JornadaContexts;

const JornadaProvider = ({ children }) => {
   const [Jornada, setJornada] = useState(0);

   return <Provider value={{ Jornada, setJornada }}>{children}</Provider>;
};

export { JornadaContexts, JornadaProvider };
