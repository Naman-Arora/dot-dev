import { Table } from '@mantine/core';
import { BsFillCheckSquareFill, BsFillXSquareFill } from 'react-icons/bs';
import data from '../../../constants/searchData';

const InfoTable = () => {
  const tableRows = data.map((item, index) => (
    <tr key={index}>
      <td>{item.icon}</td>
      <td>{item.name}</td>
      <td>{item.expression}</td>
      <td>
        {item.previewAllowed ? (
          <BsFillCheckSquareFill size={32} />
        ) : (
          <BsFillXSquareFill size={32} />
        )}
      </td>
    </tr>
  ));

  return (
    <>
      <Table
        horizontalSpacing="xl"
        verticalSpacing="md"
        fontSize="lg"
        style={{
          textAlign: 'center',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                textAlign: 'center',
              }}
            >
              Icon
            </th>
            <th
              style={{
                textAlign: 'center',
              }}
            >
              Name
            </th>
            <th
              style={{
                textAlign: 'center',
              }}
            >
              Query Beginning
            </th>
            <th
              style={{
                textAlign: 'center',
              }}
            >
              Supports Preview
            </th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </>
  );
};

export default InfoTable;
