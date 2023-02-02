import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useAgent = (email) => {
  const [isAgent, setIsAgent] = useState(false);
  const [agentLoading, setAgentLoading] = useState(false);

  useEffect(() => {
    if (email) {
      setAgentLoading(true);
      fetch(`http://localhost:5000/user/agent/${email}`)
        .then((res) => res.json())
        .then((data) => {
            setIsAgent(data);
            setAgentLoading(false);
            console.log(data.isAgent);
        });
    }
  }, [email]);

  return [isAgent, agentLoading];
};

export default useAgent;
