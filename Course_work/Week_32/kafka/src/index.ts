import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"]
})

const producer = kafka.producer();

const consumer = kafka.consumer({groupId: "my-app3"});


async function main() {
  await producer.connect();
  await producer.send({
    topic: "payment",
    messages: [
        {   value: "hi there from kafkaJs producer" },
        {   value: "hi there from kafkaJs producer second time" },
    ],
  })

  await consumer.connect();
  await consumer.subscribe({
    topic: "payment", fromBeginning: true
  })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message?.value?.toString(),
      })
    },
  })
}


main();