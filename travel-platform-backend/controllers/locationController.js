import db from "../models/index.js";
const { Location } = db;

const getLocations = async (req, res) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addLocation = async (req, res) => {
  const { place_name, post_code, year_founded, description, source, user_id } =
    req.body;

  try {
    const location = await Location.create({
      place_name,
      post_code,
      year_founded,
      description,
      source,
      user_id,
    });

    res.json(location);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { getLocations, addLocation };
