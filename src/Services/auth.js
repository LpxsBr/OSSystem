import { useState } from "react";
import axios from "../config/axios";

export default async function SignIn({ email, password }) {

    const [response, setResponse] = useState([])
    const [error, setError] = useState([])

    axios.post('/login', { email, password }).then((resp) => {
        setResponse(resp.data)
    }).catch((err) => setError(err))

    return ({ response, error })

}