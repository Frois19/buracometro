import PotholesController from "../controllers/PotholesController";
import { kafka } from "../messaging/kafka";

const consumer = kafka.consumer({groupId:"pothole_group"});

export const runPotholesConsumer = async () => {
    
    await consumer.connect();
    await consumer.subscribe({topic:"created_pothole", fromBeginning: true});
    await consumer.run({eachMessage: async ({message}) => {
        console.log(message);
        const obj = JSON.parse(message.value?.toString() as string);
        await PotholesController.save(obj)
    }});
    
}
