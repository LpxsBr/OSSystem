import api from "../config/axios";
// import axios from "axios";

async function SignIn({ email = '', password = '' }) {
    // console.log('asdas');

    try {
        var data = await api.post(
            '/auth',
            {
                email: email,
                password: password
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )

        return data.data

    } catch (error) {
        console.log(error.message)
    }

    // .then((res) => {
    //     console.log(res.data);
    // })
    // .catch((error) => {
    //     console.log('error');
    //     console.error(error);
    // });
}

export default SignIn;
