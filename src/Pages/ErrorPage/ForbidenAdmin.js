import React from 'react';
import { Link } from 'react-router-dom';

const ForbidenAdmin = () => {
    return (
        <div className='h-screen flex justify-center items-center '>
            <div className=''>
                <h2 className='text-center text-2xl '> <span className='text-red-400'>Forbidden!!</span> You Are trying to access admin routes. if you are admin please login with admin account</h2>
                <Link to="/" className='btn btn-sm mt-3 '>Back to home</Link>
            </div>
        </div>
    );
};

export default ForbidenAdmin;