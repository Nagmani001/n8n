import { BASE_URL } from "@/config/utils";
import { userAtom } from "@/store/atom";
import axios from "axios";
import { useAtom } from "jotai";
import { useEffect } from "react";

export function useVerify() {
  const [user, setUser] = useAtom(userAtom)

  useEffect(() => {
    const token = localStorage.getItem("token");

    const main = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/api/user/verify`, {}, {
          headers: {
            authorization: token
          }
        });
        setUser(response.data.name);
      } catch (err) {
        alert("error");
      }
    }
    main();

  }, []);
  return user;

}
