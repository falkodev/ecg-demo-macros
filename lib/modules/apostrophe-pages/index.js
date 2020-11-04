// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    },
    {
      name: 'other',
      label: 'Other Page'
    }

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ],
  construct (self, options) {
    self.on('apostrophe-pages:beforeSend', 'fetchProducts', async function(req) {
      const products = await self.apos.product.find(req, {}).toArray()
      req.data.products = products;
    });
  }
};
