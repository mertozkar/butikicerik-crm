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

  const [brands, setBrands] = useState([]);
  const [patSearch, setPatSearch] = useState('');
  const [profile, setProfile] = useState();

  useEffect(() => {
    db.collection("brands").onSnapshot(snapshot => (
      setBrands(snapshot.docs.map(doc => (
        {
          id: doc.id,
          brandName: doc.data().brandName,
          contentPcs: doc.data().contentPcs,
          serviceType: doc.data().serviceType,
          serviceStart: doc.data().serviceStart,
          serviceEnd: doc.data().serviceEnd,
        }
      )))
    ))
  }, []);
  useEffect(() => {
    db.collection("profile/").where("uid", "==", JSON.parse(localStorage.getItem("userIds"))?.uid).onSnapshot(snapshot => (
      setProfile(snapshot.docs.map(doc => (
        {
          uid: doc.data().uid,
          email: doc.data().email,
          userLevel: doc.data().userLevel,
        }
      )))
    ))
  }, []);

  const data = {
    brands,
    setBrands,
    patSearch,
    setPatSearch,
    profile,
    setProfile
  }

  return (
    <SiteContext.Provider value={data} >
      {children}
    </SiteContext.Provider>
  );
}


export default SiteProvider;