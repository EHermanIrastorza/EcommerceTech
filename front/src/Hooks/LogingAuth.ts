import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useLoginAuth = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const userSession = localStorage.getItem("userSession");

    if (userSession) {
      const session = JSON.parse(userSession);
      if (!session.role === true) {
        router.push("/");
      } else {
        setAuthenticated(true);
      }
    } else {
      router.push("/");
    }
  }, [router]);

  return authenticated;
};

export default useLoginAuth;
