import React, { useState, useEffect } from "react";
import { Table, PageHeader } from "antd";
import { getNearEarthObjectData, columns } from "./helper.js";

const NearEarthObjects = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getNearEarthObjectData().then(data => setDataSource(data));
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
