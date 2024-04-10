import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";

export type RSVPType = {
  name: string;
  wish: string;
  attendance: boolean;
};

export default function useRSVPForm() {
  const [RSVPList, setRSVPList] = useState<RSVPType[]>([]);
  const [personName, setPersonName] = useState("");
  const [personWish, setPersonWish] = useState("");
  const [attendance, setAttendance] = useState("");

  // Handler functions to update state
  const handleNameChange = (event: any) => {
    setPersonName(event.target.value);
  };

  const handleWishChange = (event: any) => {
    setPersonWish(event.target.value);
  };

  const handleAttendanceChange = (value: string) => {
    console.log(value);
    setAttendance(value);
  };

  const resetForm = () => {
    setPersonName("");
    setPersonWish("");
    setAttendance("");
  };

  async function addData() {
    const payload: RSVPType = {
      name: personName,
      wish: personWish,
      attendance: attendance === "Hadir",
    };
    await addDoc(collection(db, "rsvp"), payload);
    resetForm();
    getList();
  }

  const getList = async () => {
    const querySnapshot = await getDocs(collection(db, "rsvp"));
    setRSVPList([]);
    querySnapshot.forEach((doc) => {
      setRSVPList((currentData: any) => [...currentData, doc.data()]);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return {
    addData,
    RSVPList,
    personName,
    personWish,
    attendance,
    handleNameChange,
    handleWishChange,
    handleAttendanceChange,
  };
}
