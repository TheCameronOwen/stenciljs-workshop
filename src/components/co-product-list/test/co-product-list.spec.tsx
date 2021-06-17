import { newSpecPage } from '@stencil/core/testing';
import { CoProductList } from '../co-product-list';

describe('co-product-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoProductList],
      html: `<co-product-list></co-product-list>`,
    });
    expect(page.root).toEqualHtml(`
      <co-product-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </co-product-list>
    `);
  });
});
