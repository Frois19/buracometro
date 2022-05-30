import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";
import { kafka } from "../messaging/kafka";
import Pothole from "../models/Pothole";
import potholeView from "../views/Potholes_view";

export default {
  async index(request: Request, response: Response) {
    const potholesRepository = getRepository(Pothole);

    const potholes = await potholesRepository.find({
      relations: ["images"],
    });

    return response.json(potholeView.renderMany(potholes));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const potholesRepository = getRepository(Pothole);

    const potholes = await potholesRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return response.json(potholeView.render(potholes));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      description
    } = request.body;

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      name,
      latitude,
      longitude,
      description,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      description: Yup.string().required().max(300),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      const producer = kafka.producer();

      await producer.connect();

      await producer.send({
        topic: "created_potholes",
        messages: [{ value: JSON.stringify(data) }],
      });

      await producer.disconnect();

      return response.status(201).json(data);

    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  },

  async save(data: Pothole){
    const potholesRepository = getRepository(Pothole);

    const potholes = potholesRepository.create(data);

    await potholesRepository.save(potholes);
  }
};
