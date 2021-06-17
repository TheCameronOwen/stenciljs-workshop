import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'co-product-list-item',
  styleUrl: 'co-product-list-item.css',
  shadow: true,
})
export class CoProductListItem {

  /**
   * Title of product
   */
    @Prop() productTitle: string;


  /**
  * Description of product
  */
    @Prop() description: string;

  /**
  * Type of product
  */
    @Prop() type: string;

  render() {
    return (
      <div class={`c-product --bg-${this.type}`}>
        <h1 class="c-product__title">{this.productTitle}</h1>
        <p class="c-product__description">{this.description}</p>
        <span class="c-product__type">{this.type}</span>
      </div>
    );
  }

}
