import React from 'react';
import CookieConsent from "react-cookie-consent";
import { FaCookieBite } from "react-icons/fa";


const Cookie = () => {
                    
return (
                    <div>
                    <CookieConsent
                    style={{
                      width: "400px",
                      padding: "10px",
                      margin: "10px",
                      borderRadius: "15px",
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "black"
                    }}
                    buttonStyle={{
                      textAlign: "center",
                      backgroundColor: "#5966FF",
                      color: "#fff",
                      borderRadius: "10px"
                    }}
                    buttonText="Sweet Cookies"
                    expires={365}
                    >
                      <FaCookieBite className="text-5xl text-amber-600 ml-36 mb-6"></FaCookieBite>
                      <h2 className="font-bold text-2xl">Hey! We Use Cookies</h2>
                      <p className="text-gray-400">By Accepting Cookies You Will Get The Better User Experience.</p>
                    </CookieConsent>
                    </div>
);
};

export default Cookie;