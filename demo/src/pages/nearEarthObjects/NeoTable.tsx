import { Table } from "antd";

interface Props {
  dataSource: object[];
  columns: object[];
}

const NeoTable: React.FC<Props> = ({ dataSource, columns }) => {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 7 }}
      loading={!dataSource.length}
    />
  );
};

export default NeoTable;
