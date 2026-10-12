import { zing } from 'zingmp3-api-next'
import data from './data.json'
const props = {
  encodeId: '',
  title: '',
  artistsNames: '',
  album: {
    thumbnail: ''
  }
}
data.songs.map((e) =>
  zing.get_song_info(e).then((data) => {
    const { encodeId, title, artistsNames, album: { thumbnail } = {} } = data.data
    console.log({ encodeId, title, artistsNames, thumbnail }, ',')
  })
)
