import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useUser = (email) => {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    if (email) {
      fetch(` https://one-bit-pay-server.vercel.app/user/normaluser/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsUser(data.isUser);
        });
    }
  }, [email]);

  return [isUser];
};

export default useUser;