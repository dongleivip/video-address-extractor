const axios = require('axios').default;

const SERVER_URL = 'https://getvideoaddress-get-vid-address-wmququrgyd.cn-hangzhou.fcapp.run'

const getVideoUrls = async (url: string): string[] => {
  if (!url || !url.startsWith("https://")) {
    return ['请输入正确地址'];
  }

  try {
    const options = {
      headers: {
        'Accept': 'text/json'
      }
    }
    const requestEndpoint = `${SERVER_URL}?url=${url}`;
    const response = await axios.get(requestEndpoint, options);
    return response.data;
  }
  catch (error) {
    console.error(error);
  }

  return [];
}

export default getVideoUrls;
