import localStorageMgt from './localStorageMgt'


export default ({ $axios, redirect }) => {
    $axios.onRequest((config) => {
        config.headers = {
            'Accept-Language': localStorage.getItem('lang'),
            'Content-Type': 'application/json',
            Accept: 'application/json',

            Authorization: `Bearer ${localStorageMgt.getUserDetails() ? localStorageMgt.getUserDetails().token : ''}`,
            //Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYTg3ODUyNWZkZDRjMTU3OWQ2NTIxMDFmNjg5ODJhYmI0ZmQ0NTI0MGJkYmM1OWVlMDVlMTkzYjRlMGZkMDQxZDI5ZGIyNjVmZWZmNGM3OWEiLCJpYXQiOjE2NjQzMjMzMDAuNTU0NzY2LCJuYmYiOjE2NjQzMjMzMDAuNTU0NzY4LCJleHAiOjE2NjU2MTkzMDAuNTUyMDExLCJzdWIiOiIxNjMiLCJzY29wZXMiOlsiKiJdfQ.HRJ7FBRLco2dNUX6MmD78NihrIxTYThdYl0lNRVdopdwXKzSRxp8YxunZcyuYlH--HCy6o3gpJPi-m9VfFTbxW4W3fR-EU6mcZBG2egdpgB-lFeUE1N8GZl35NwzM9vhBnGfh3NFanBW_Q33_jSvkiSyb-Kdru7Cwqm5rgT4fcbOFB5WmGUolUcZhDGTLaZsHi2GvU6xcjvp9l33WZM3qiEllx7N_KNhC6u1to5vDx0lyMltXf1ulE_KwZNII-Xw7S4sWKcrsEy1tjwwQ9dV7_aIQazeLHNqPd10_uH0AejbvN7LYdzhil-ReQarSEVEY_-LDX6f85Hne8T8o4hnLxraaNNDtaGQ7Yp646JX2KSrQENpYsV7NmtsNM0jBSU8d4iSiTXxa2JIATTGimkybG8SXeCTV2Nxih7wU8Rtt7zcBmqZL7-fmAyCKUQNC2A2XDs0o20IpDMzbsozDJ7zo3SQe1f5XDnBOEgmnr6mYLe-B4YACAVNNJPsSwkeFQ_1z85BthbcaygU9-7794axPpC5C8PBLcyg8LX9EqoDo9Kd78bZcq84DjUAIb0jXiGwILS1ixPlgTNpV3q3wOLKTdXfCnXIfOlR8Q3erbMPy9IWjGFIlVO7fP7JMWPI_MaSf_DO8EP6EivVQRhu3BXZhAbJlVYuY7pYwJ51RS98uz0',
        }
    })

    // $axios.onResponse(async response => await response.data)
    /* $axios.onError((error) => {
        console.log(error.data)
        return Promise.reject(error.response.data)
    }) */
}
