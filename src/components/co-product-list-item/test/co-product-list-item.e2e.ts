import { newE2EPage } from '@stencil/core/testing';

describe('co-product-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<co-product-list-item></co-product-list-item>');

    const element = await page.find('co-product-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
