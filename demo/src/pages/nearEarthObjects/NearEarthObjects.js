import React, { useState, useEffect } from "react";
import { Table, PageHeader } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Potentially Hazardous",
    dataIndex: "is_potentially_hazardous_asteroid",
    key: "is_potentially_hazardous_asteroid",
    render: isPotentiallyHazardous =>
      isPotentiallyHazardous ? "Yikes! Yes" : "All Good"
  },
  {
    title: "Estimated Diameter (maximum)",
    dataIndex: "estimated_diameter",
    key: "estimated_diameter",
    render: props => Math.floor(props) + " ft"
  },
  {
    title: "Closest Approach (Au)",
    dataIndex: "miss_distance",
    key: "miss_distance"
    // render: props => console.log(props)
  }
];

const NearEarthObjects = () => {
  const [dataSource, setDataSource] = useState([]);

  const getNearEarthObjectData = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-03-20&end_date=2022-03-21&api_key=VZu8mcSxJnEdU4tJaT3icjFCCmsrn0nwdplCvWOX"
      );
      const data = await response.json();

      for (const [key, value] of Object.entries(data.near_earth_objects)) {
        value.map(neo => {
          console.log(neo);
          setDataSource(preDataSource => [
            ...preDataSource,
            {
              key: neo.id,
              name: neo.name,
              is_potentially_hazardous_asteroid:
                neo.is_potentially_hazardous_asteroid,
              estimated_diameter:
                neo.estimated_diameter.feet.estimated_diameter_max,
              miss_distance:
                neo.close_approach_data[0].miss_distance.astronomical
            }
          ]);
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getNearEarthObjectData();
  }, []);

  return (
    <div>
      <PageHeader
        title="Do not panic!"
        subTitle="List of today's objects making a dangerous aproach to earth"
      />
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 7 }}
        loading={!dataSource.length}
      />
    </div>
  );
};

export default NearEarthObjects;
