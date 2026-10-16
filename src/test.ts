import { songApi } from './api'

;(async () => {
  const source = await songApi.getSongSource('Cr8SxQFgHrNL')
  console.log(source)
})()
