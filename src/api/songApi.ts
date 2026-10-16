import { zing } from 'zingmp3-api-next'

export const songApi = {
  getSongSource: async function (id: string): Promise<string> {
    try {
      const data = await zing.get_song(id)
      console.log({ data, id })
      if (!data) {
        throw new Error(`Get Song Source failed`)
      }
      return data.data['128']
    } catch (error) {
      console.error('Library Error', error)
      throw error
    }
  }
}
