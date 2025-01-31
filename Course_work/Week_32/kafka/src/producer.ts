import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"]
})

const producer = kafka.producer();

async function main() {
    await producer.connect();
    await producer.send({
      topic: "payment-done",
      messages: [
          {   value: "hi there from kafkaJs producer" },
          {   value: "hi there from kafkaJs producer second time" },
          {   value: "hi there from kafkaJs producer third time" }
      ],
    })
}

main().catch(console.error);