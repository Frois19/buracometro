import Pothole from "../models/Pothole";
import imagesView from "./images_views";

export default {
  render(pothole: Pothole) {
    return {
      id: pothole.id,
      name: pothole.name,
      latitude: pothole.latitude,
      longitude: pothole.longitude,
      description: pothole.description,
      images: imagesView.renderMany(pothole.images),
    };
  },

  renderMany(potholes: Pothole[]) {
    return potholes.map((pothole) => this.render(pothole));
  },
};
