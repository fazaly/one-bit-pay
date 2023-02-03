import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const useAgent = () => {
  const { user } = useContext(AuthContext);
  const [isAgent, setIsAgent] = useState(false);
  const [agentLoading, setAgentLoading] = useState(false);
  console.log(isAgent);

  useEffect(() => {
    if (user?.email) {
      setAgentLoading(true);
      fetch(` https://one-bit-pay-server.vercel.app/user/agent/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAgent(data);
          setAgentLoading(false);
          console.log(data.isAgent);
        });
    }
  }, [user?.email]);

  return [isAgent, agentLoading];
};

export default useAgent;
