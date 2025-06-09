import app from './src/app'
import { calculateDiscount } from './src/utils'
import request from 'supertest'

describe('App', () => {
    it('should return correct discount amount', () => {
        const discount = calculateDiscount(1000, 10)
        expect(discount).toBe(100)
    })

    it('should return 2000 status code', async () => {
        const response = await request(app).get('/').send()
        expect(response.statusCode).toBe(200)
    })
})
