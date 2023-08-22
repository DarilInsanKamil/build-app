import axios from "axios";
import Cookies from "js-cookie";


export const handleChangeLogin = (event, input, setInput) => {
    let name = event.target.name;
    let value = event.target.value;

    setInput({
        ...input, [name]: value
    })
}

export const handleSubmitLogin = async (event, input, setError, router) => {
    const APIURL = process.env.LOGIN_API_URL;
    event.preventDefault();
    try {
        const res = await axios.post(APIURL, {
            email: input.email,
            password: input.password
        })
        const user = res.data.user;
        const token = res.data.token;
        Cookies.set('user', user.name, { expires: 1 });
        Cookies.set('image', user.image_url, { expires: 1 });
        Cookies.set('email', user.email, { expires: 1 });
        Cookies.set('token', token, { expires: 1 });
        router.push('/job-vacancy');

    } catch (err) {
        console.error(JSON.stringify(err))
        setError(JSON.stringify(err))
    }
}