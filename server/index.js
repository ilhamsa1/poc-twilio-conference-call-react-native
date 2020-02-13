const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')

const port = config.port
// Create Express webapp
const app = express()
app.use(bodyParser.urlencoded({extended: false}))

const accountSid = config.accountSid
const authToken = config.authToken

const AccessToken = require('twilio').jwt.AccessToken
const client = require('twilio')(accountSid, authToken)
const VoiceGrant = AccessToken.VoiceGrant

const ClientCapability = require('twilio').jwt.ClientCapability
const VoiceResponse = require('twilio').twiml.VoiceResponse


// Create http server and run it

app.get('/token', async (req, res) => {
  try {
    const outgoingApplicationSid = config.twimlAppSid
    const identity = 'user'

    const clients = await client.newKeys.create()
    const voiceGrant = new VoiceGrant({
      outgoingApplicationSid: outgoingApplicationSid,
      incomingAllow: true, // Optional: add to allow incoming calls
    })

    // client.calls
    //   .create({
    //     url: 'http://demo.twilio.com/docs/voice.xml',
    //     to: '+6282285265855',
    //     from: '+19032074645',
    //   })
    //   .then(call => {
    //     console.log('call.sid')
    //     console.log(call.sid)
    //   }).catch(e => {
    //     console.log(e)
    //   })

    const token = new AccessToken(accountSid, clients.sid, clients.secret)

    token.addGrant(voiceGrant)
    token.identity = identity
    res.json({
      identity: identity,
      token: token.toJwt(),
    })

    // const capability = new ClientCapability({
    //   accountSid: accountSid,
    //   authToken: authToken,
    // })

    // capability.addScope(new ClientCapability.IncomingClientScope('user'))
    // capability.addScope(
    //   new ClientCapability.OutgoingClientScope({
    //     applicationSid: 'AP28cd350a2dfd7e4f09337ad11c17090c',
    //     clientName: 'user',
    //   })
    // )

    // const token = capability.toJwt()

    // res.set('Content-Type', 'application/jwt')
    // res.json({
    //   identity: identity,
    //   token: token,
    // })
  } catch (e) {
    throw e
  }
})
app.listen(port, function() {
  console.log('Express server running on *:' + port)
})
