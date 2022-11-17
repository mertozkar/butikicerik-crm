import { createContext, useState, useSelector, useContext, useRef, useEffect } from "react";
import db from "../firebase";
import { UserAuth } from "./AuthContext";

const SiteContext = createContext()

export const useSiteContext = () => useContext(SiteContext);


const SiteProvider = ({ children }) => {

  const [brands, setBrands] = useState([]);
  const [patSearch, setPatSearch] = useState('');
  const [profile, setProfile] = useState();
  const [editors, setEditors] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleHandle = () => {
    setMenuToggle(current => !current)
  }

  const dummyContents = [
    { title: "Mineraller neden bu kadar önemli?", startDate: "12.11.2022", endDate: "19.11.2022", status: "Yazarda" },
    { title: "Sağlıklı bir yaşam için günlük su miktarı nedir?", startDate: "12.11.2022", endDate: "19.11.2022", status: "Editörde" },
    { title: "Pasta yiyerek zayıflayabilir miyim?", startDate: "12.11.2022", endDate: "19.11.2022", status: "Teslim edildi" },
  ]

  useEffect(() => {
    db.collection("brands").onSnapshot(snapshot => (
      setBrands(snapshot.docs.map(doc => (
        {
          id: doc.id,
          brandName: doc.data().brandName,
          brandId: doc.data().brandId,
          contentPcs: doc.data().contentPcs,
          serviceType: doc.data().serviceType,
          serviceStart: doc.data().serviceStart,
          serviceEnd: doc.data().serviceEnd,
          wordCount: doc.data().wordCount,
          keyWords: doc.data().keyWords,
          imgURL: doc.data().imgURL
        }
      )))
    ))
  }, []);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userIds"))?.uid) {
      db.collection("profile/").where("uid", "==", JSON.parse(localStorage.getItem("userIds"))?.uid).onSnapshot(snapshot => (
        setProfile(snapshot.docs.map(doc => (
          {
            uid: doc.data().uid,
            email: doc.data().email,
            userLevel: doc.data().userLevel,
          }
        )))
      ))
    }

  }, []);
  useEffect(() => {

    db.collection("profile/").where("userLevel", "==", "1").onSnapshot(snapshot => (
      setEditors(snapshot.docs.map(doc => (
        {
          email: doc.data().email,
          uid: doc.data().uid,
          name: doc.data().name,
          phone: doc.data().phone
        }
      )))
    ))

  }, []);
  useEffect(() => {

    db.collection("profile/").where("userLevel", "==", "0").onSnapshot(snapshot => (
      setAuthors(snapshot.docs.map(doc => (
        {
          email: doc.data().email,
          uid: doc.data().uid,
          name: doc.data().name,
          phone: doc.data().phone
        }
      )))
    ))


  }, []);
  useEffect(() => {
    db.collection("profile/").where("userLevel", "==", "3").onSnapshot(snapshot => (
      setCustomers(snapshot.docs.map(doc => (
        {
          email: doc.data().email,
          uid: doc.data().uid,
          name: doc.data().name,
          phone: doc.data().phone
        }
      )))
    ))
  }, [])

  const data = {
    brands,
    setBrands,
    patSearch,
    setPatSearch,
    profile,
    setProfile,
    editors,
    setEditors,
    authors,
    setAuthors,
    customers,
    setCustomers,
    dummyContents,
    menuToggle,
    setMenuToggle,
    toggleHandle
  }

  return (
    <SiteContext.Provider value={data} >
      {children}
    </SiteContext.Provider>
  );
}


export default SiteProvider;