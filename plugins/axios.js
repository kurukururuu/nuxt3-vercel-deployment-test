export default function ({ $axios, redirect, $auth }) {
  // console.log($axios.options)
  // Add a request interceptor
  $axios.interceptors.request.use(config => {
    const token = $auth.$storage['_token.local'];
    config.headers.Authorization = token;

    // console.log({config})
    return config;
  });


  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  // $axios.onError(error => {
  //   // const code = parseInt(error.response && error.response.status)
  //   // if (code === 400) {
  //   //   redirect('/400')
  //   // }
  // })
}