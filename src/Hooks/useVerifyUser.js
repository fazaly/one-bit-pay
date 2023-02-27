import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useVerifyUser = () => {
  const email = useSelector((state) => state.auth.email);
  const [token, setToken] = useState("");

  useEffect(() => {
    fetch(`https://one-bit-pay-server.vercel.app/jwt/${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("userAccessToken", data.accessToken);
          setToken(data.accessToken);
        }
      });
  }, [email]);

  return [token];
};

export default useVerifyUser;
