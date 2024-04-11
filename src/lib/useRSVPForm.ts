import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export type RSVPType = {
  name: string;
  wish: string;
  attendance: boolean;
};

export default function useRSVPForm() {
  const [RSVPList, setRSVPList] = useState<RSVPType[]>([]);

  const formSchema = z.object({
    name: z.string().min(1, {
      message: "*Nama wajib diisi",
    }),
    wish: z.string().min(1, {
      message: "*Ucapan wajib diisi",
    }),
    attendance: z.string().min(1, {
      message: "*Konfirmasi kehadiran wajib diisi",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      wish: "",
      attendance: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function addData(data: any) {
    setIsLoading(true);
    try {
      const payload: RSVPType = {
        name: data?.name,
        wish: data?.wish,
        attendance: data?.attendance === "Hadir",
      };
      await addDoc(collection(db, "rsvp"), payload);
      form.reset();
      getList();
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  const getList = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "rsvp"));
      setRSVPList([]);
      querySnapshot.forEach((doc) => {
        setRSVPList((currentData: any) => [...currentData, doc.data()]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return {
    addData,
    RSVPList,
    isLoading,
    isSuccess,
    form,
  };
}
