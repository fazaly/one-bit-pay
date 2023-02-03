import React, { useEffect, useState } from 'react';

const useRole = (email) => {
    const [userRole, setUserRole] = useState(null)
    const [userRoleLoading, setUserRoleLoading] = useState(true)

    useEffect(() => {

        if (email) {
            fetch(`https://one-bit-pay-server.vercel.app/userRole/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        setUserRole(data.data)
                        setUserRoleLoading(false)
                    }
                })
                .catch(error => console.error(error))

        }

    }, [userRole])

    return [userRole, userRoleLoading]

};

export default useRole;