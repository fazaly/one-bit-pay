import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useUser = (email) => {
    const [isUser, setIsUser] = useState(false);
  
    useEffect(() => {
      if (email) {
        fetch(`http://localhost:5000/user/normaluser/${email}`)
          .then((res) => res.json())
          .then((data) => {
                setIsUser(data.isUser);
          });
      }
    }, [email]);
    
    return [isUser];
};

export default useUser;