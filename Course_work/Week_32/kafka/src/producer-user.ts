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
          { value: "hi there from kafkaJs producer", 
            key:"user1"
          },
          { value: "hi there from kafkaJs producer second time", 
            key:"user2"
          },
          { value: "hi there from kafkaJs producer third time", 
            key:"user3"
          }
      ],
    })
}

main().catch(console.error);