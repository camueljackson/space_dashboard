export const getNearEarthObjectData = async () => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-03-20&end_date=2022-03-21&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    );
    const data = await response.json();

    for (const [key, value] of Object.entries(data.near_earth_objects)) {
      return value.reduce((acc, near_earth_objects) => {
        return [
          ...acc,
          {
            key: near_earth_objects.id,
            name: near_earth_objects.name,
            is_potentially_hazardous_asteroid:
              near_earth_objects.is_potentially_hazardous_asteroid,
            estimated_diameter:
              near_earth_objects.estimated_diameter.feet.estimated_diameter_max,
            miss_distance:
              near_earth_objects.close_approach_data[0].miss_distance
                .astronomical
          }
        ];
      }, []);
    }
  } catch (err) {
    console.error(err);
  }
};
