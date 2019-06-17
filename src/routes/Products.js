import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';
import { Button, Input } from 'antd';

// const Products = ({ dispatch, products}) => {
//   function handleDelete(id) {
//     dispatch({
//       type: 'products/delete',
//       payload: id
//     })
//   } 
//   return (
//     <div>
//       <h2>List of Products</h2>
//       <ProductList onDelete={handleDelete} products={products}> </ProductList>
//     </div>
//   );
// };

class Products extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  handleDelete(id) {
    this.props.dispatch({
      type: 'products/delete',
      payload: id
    })
  }

  handleAdd() {
    this.props.dispatch({
      type: 'products/add',
      payload: this.state.value
    });
    this.setState({value: ''});
  }

  render() {
    const { products } = this.props;
    return(
      <div>
        <h2>List of Products</h2>
        <Input type="primary" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})}/> <Button onClick={() => this.handleAdd()}>add product</Button>
        <ProductList onDelete={(id) => this.handleDelete(id)} products={products}></ProductList>
      </div>
    );
  }
}

// export default connect(({ products }) => ({
//   products: products
// }))(Products);

function mapStateToProps(state) {
  return {
    products: state.products
  }
}
export default connect(mapStateToProps)(Products);