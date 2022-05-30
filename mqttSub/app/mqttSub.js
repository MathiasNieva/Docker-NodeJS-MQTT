var mqtt = require('mqtt')
const host = process.env.THEHOST
const topic = process.env.THETOPIC
var client  = mqtt.connect(host)

client.on('connect', () => {
  console.log('Connected');
  client.subscribe(topic, (err) => {
      console.log("subscribed")
        if (!err) {
        client.publish(topic, 'Hello mqtt')
        }
  })
})

client.on('message', (topic, message) => {

  console.log(message.toString())

})