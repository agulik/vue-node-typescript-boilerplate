import axios from "axios"

export default axios.create({
    baseURL: `${process.env.VUE_APP_SERVER_URI}`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "JWT " + localStorage.getItem('token')
    },
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken',
    withCredentials: true
});