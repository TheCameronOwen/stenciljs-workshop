import { newE2EPage } from '@stencil/core/testing';

describe('co-product-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<co-product-list></co-product-list>');

    const element = await page.find('co-product-list');
    expect(element).toHaveClass('hydrated');
  });
});
