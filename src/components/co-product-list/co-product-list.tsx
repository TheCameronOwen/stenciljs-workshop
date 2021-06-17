import { Component, Prop, h} from '@stencil/core';
import products from '../../stubs/products.json'

@Component({
  tag: 'co-product-list',
  styleUrl: 'co-product-list.css',
  shadow: true,
})
export class CoProductList {

  /**
   * Path to data file
   */
   @Prop() dataPath: string;


  /**
   * Max number of columns
   */
  @Prop() maxNumberOfColumns: number;


  productList;
  path;
  async componentWillRender() {
    if(this.dataPath !== '') {
      const getApi = await fetch(this.dataPath,{ method:'GET' })
      this.productList = await getApi.json()
    } else {
      this.productList = products;
    }
  }


  render() {
    const hasType = product => {
      if(product?.free) {
        return 'free'
      }
      if(product?.new) {
        return 'new'
      }

      if(!product?.free || product?.new) {
        return 'default'
      }

    }


    return (
      <div class="c-list">
        {this.productList && this.productList.products.map(product => {
          return <co-product-list-item productTitle={product.name} description={product.description} type={hasType(product)}></co-product-list-item>
        })}
      </div>
    )
  }




}
