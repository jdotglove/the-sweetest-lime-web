// server/api/subscribe.ts
import { Client, Environment } from 'square'

export default defineEventHandler(async (event) => {

  try {
    const body = await readBody(event)
    const { name, email, phone } = body
    console.log(process.env.SQUARE_ACCESS_TOKEN)
    const client = new Client({
      accessToken: process.env.SQUARE_ACCESS_TOKEN,
      environment: Environment.Sandbox // or Environment.Sandbox for testing
    })

    // Create a customer in Square
    const response = await client.customersApi.createCustomer({
      idempotencyKey: `${Date.now()}`, // Unique key for the request
      emailAddress: email,
      givenName: name.split(' ')[0],
      familyName: name.split(' ')[1] || '',
      phoneNumber: phone,
      referenceId: 'newsletter_signup'
    })

    // Serialize the response, converting BigInt to String
    const serializedCustomer = JSON.parse(JSON.stringify(response.result.customer, (_, value) =>
      typeof value === 'bigint' ? value.toString() : value
    ))

    return {
      success: true,
      customer: serializedCustomer
    }
  } catch (error) {
    console.error('Error creating customer:', error)
    throw createError({
      statusCode: 500,
      message: 'Error creating customer'
    })
  }
})
