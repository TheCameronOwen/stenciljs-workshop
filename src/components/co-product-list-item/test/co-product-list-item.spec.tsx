import { newSpecPage } from '@stencil/core/testing';
import { CoProductListItem } from '../co-product-list-item';

describe('co-product-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoProductListItem],
      html: `<co-product-list-item></co-product-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <co-product-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </co-product-list-item>
    `);
  });
});
