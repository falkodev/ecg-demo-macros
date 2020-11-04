module.exports = {
  name: 'product',
  alias: 'product',
  extend: 'apostrophe-pieces',
  label: 'Product',
  pluralLabel: 'Products',
  addFields: [{
    name: 'description',
    type: 'singleton',
    widgetType: 'apostrophe-rich-text',
    options: {
      toolbar: [ 'Bold', 'Italic' ]
    }
  }, {
    name: 'quantity',
    type: 'integer'
  }]
};