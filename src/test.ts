import apiClient from '@/api/apiClient'
import type { SongProps } from '@/types/types'
import { zing } from 'zingmp3-api-next'
import { writeFile } from 'node:fs/promises'
// zing.get_top_100().then((data) => console.log(data.data))
// zing.get_hub_detail('IWZ9Z09A').then((data) => console.log(data.data.sections[0].items))

;(async () => {
  const top100arrs = await zing.get_home().then((e) => e.data.items[3].items)
  async function getSongsByTop100Id(id: string) {
    const rawSongs = await zing.get_playlist(id).then((e) => e.data.song.items)
    // console.log(rawSongs)
    const formattedSongs: SongProps[] = rawSongs.map((e: any) => {
      return {
        id: e.encodeId,
        title: e.title,
        thumbnail: e.thumbnail,
        artistsNames: e.artistsNames
      }
    })
    return formattedSongs
  }
  const songs: SongProps[] = []
  for (let e of top100arrs) {
    songs.push(...(await getSongsByTop100Id(e.encodeId)))
  }
  wrtiefile
})()
// zing.get_home().then((e) => console.log(e.data.items[3].items))
