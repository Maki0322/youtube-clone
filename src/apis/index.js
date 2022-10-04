import axios from 'axios'

const KEY = 'AIzaSyC8Y6rp2Or0XkFU0XDqev36kBH6wdgJPcU'

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

const params = {
  part: 'snippet',
  maxResults: 40,
  key: KEY,
  regionCode: 'JP',
  type: 'video',
}

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      ...params,
      chart: 'mostPopular'
    }
  })
}
export const fetchSelectedData = async (id) => {
  return await youtube.get('videos', {
    params: {
      ...params,
      id
    }
  })
}

 