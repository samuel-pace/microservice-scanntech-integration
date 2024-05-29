import api from '../../support/api-request.js'

describe('import price api', () => {

  it('have message ok' , async () => {
    const response = await api.post('/prices/import')

    const {
      statusCode,
      body
    } = response

    expect(statusCode).toBe(200)
    expect(body.message).toBe('OK')

  })
})
