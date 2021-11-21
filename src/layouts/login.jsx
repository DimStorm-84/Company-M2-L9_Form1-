import React, { useState } from "react";

const Login = () => {
    const [email] = useState("");
    const handleChange = (e) => {
        console.log(e);
    };
    return (
        <form action="">
            <div>
                <label htmlFor="email"> Email </label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password"> Пороль </label>
                <input type="password" id="password" />
            </div>
        </form>
    );
};

export default Login;
