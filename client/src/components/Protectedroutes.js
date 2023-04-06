import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import axios from 'axios';

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    const checkUserToken = async () => {
        const userToken = localStorage.getItem('token');
      
        try {
            const response = await axios.get('/api/protected', {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            });
            setIsLoggedIn(true);
        } catch (error) {
            setIsLoggedIn(false);
            navigate('/login');
            console.error(error);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        checkUserToken();
    }, []);

    return (
        <React.Fragment>
            {
                isLoading ? <div>Loading...</div> :
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}

export default ProtectedRoute;