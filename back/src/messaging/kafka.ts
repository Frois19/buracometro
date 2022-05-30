import { Kafka } from "kafkajs";

console.log(process.env.KAFKA_BROKER);

export const kafka = new Kafka({
  clientId: process.env.KAFKA_CLIENT_ID,
  brokers: [process.env.KAFKA_BROKER as string],
  
});
