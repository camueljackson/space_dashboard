import React, { useState, useEffect } from "react";
import { PageHeader } from "antd";
import { getNearEarthObjectData } from "./helper.js";
import NeoTable from "./NeoTable";
import styled from "styled-components";

const Hazardous = styled.div`
  color: red;
`;

const Safe = styled.div`
  color: #489e1d;
`;

interface EstimatedDiameter {
  estimated_diameter: number;
}

interface MissDistance {
  miss_distance: number;
}

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
    render: (isPotentiallyHazardous: boolean) =>
      isPotentiallyHazardous ? (
        <Hazardous> Yikes! Yes</Hazardous>
      ) : (
        <Safe>All Good</Safe>
      )
  },
  {
    title: "Estimated Diameter",
    dataIndex: "estimated_diameter",
    key: "estimated_diameter",
    sorter: (a: EstimatedDiameter, b: EstimatedDiameter) =>
      a.estimated_diameter - b.estimated_diameter,
    render: (number: number) => `${Math.floor(number)} ft`
  },
  {
    title: "Closest Approach (Au)",
    dataIndex: "miss_distance",
    key: "miss_distance",
    sorter: (a: MissDistance, b: MissDistance) =>
      a.miss_distance - b.miss_distance
  }
];

const NearEarthObjects: React.FC = () => {
  const [dataSource, setDataSource] = useState<object[]>([]);

  useEffect(() => {
    getNearEarthObjectData().then(data => setDataSource(data));
  }, []);

  return (
    <div>
      <PageHeader
        title="Do not panic!"
        subTitle="List of today's objects making a dangerous aproach to earth"
      />
      <NeoTable columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default NearEarthObjects;
