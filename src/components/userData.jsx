import { useEffect, useState } from "react";

export default function UserData() {

    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token!== null) {
            axios.get(import.meta.env.VITE_API_URL + "/api/users/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
            },  
            }).then((res) => {
                setUser(res.data);
            }).catch(() => {
                localStorage.removeItem("token");
                setUser(null);
            });
        }
    }, []);

    return (
        <div>
            fkmlmdlk
        </div>
    );
}