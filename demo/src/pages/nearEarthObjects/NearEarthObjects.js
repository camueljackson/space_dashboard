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
          setDataSource(preDataSource => [
            ...preDataSource,
            {
              key: neo.id,
              name: neo.name,
              is_potentially_hazardous_asteroid:
                neo.is_potentially_hazardous_asteroid
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
        loading={!dataSource.length}
      />
    </div>
  );
};

export default NearEarthObjects;
