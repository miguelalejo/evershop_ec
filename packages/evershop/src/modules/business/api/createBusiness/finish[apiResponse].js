const { buildUrl } = require('@evershop/evershop/src/lib/router/buildUrl');
const { OK } = require('@evershop/evershop/src/lib/util/httpStatus');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate, next) => {
  const product = await delegate.createProduct;
  response.status(OK);
  response.json({
    data: {
      ...product,
      links: [
        {
          rel: 'businessGrid',
          href: buildUrl('businessGrid'),
          action: 'GET',
          types: ['text/xml']
        }
      ]
    }
  });
};
