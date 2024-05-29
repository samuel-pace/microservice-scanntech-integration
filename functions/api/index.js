import response from '../../../lib/reponses.js'

export const handler = async event => {
  console.log('event: -------->', JSON.stringify(event))

  return response.ok()
}
