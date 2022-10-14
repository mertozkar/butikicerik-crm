import { createContext, useState, useSelector, useContext, useRef, useEffect } from "react";
import db from "../firebase";
import { UserAuth } from "./AuthContext";

const SiteContext = createContext()

export const useSiteContext = () => useContext(SiteContext);


const SiteProvider = ({ children }) => {
  const [playerInfo, setPlayerInfo] = useState()
  const [charInfo, setCharInfo] = useState()
  const { user } = UserAuth();
  const [uid_, setUid_] = useState()
  const [currentCharInfo, setCurrentCharInfo] = useState()



  const data = {

  }

  return (
    <SiteContext.Provider value={data} >
      {children}
    </SiteContext.Provider>
  );
}


export default SiteProvider;