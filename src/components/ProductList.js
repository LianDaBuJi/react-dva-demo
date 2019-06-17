import React from 'react';
import PropTypes from 'prop-types';
import { Table, Button, Popconfirm } from 'antd';

const ProductList = ({ onDelete, products}) => {
    const columns = [{
        title: 'Name',
        dataIndex: 'name'
    }, {
        title: 'Action',
        render: (text, record) => {
            console.log(text, record);
            return(
                <Popconfirm
                    title="Delete?" onConfirm={() => {onDelete(record.id)}}>
                    <Button>Delete</Button>
                </Popconfirm>
            )
        }
    }];
    return (
      <Table
          rowKey={record => record.id}
          dataSource={products}
          columns={columns}>
      </Table>
    );
};

ProductList.propTypes = {
  // onDelete: PropTypes.func.isReuired,
  products: PropTypes.array.isRequired
}

export default ProductList;