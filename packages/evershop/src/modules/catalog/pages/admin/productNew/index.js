const {
  setContextValue
} = require('../../../../graphql/services/contextHelper');
const {
  translate
} = require('@evershop/evershop/src/lib/locale/translate/translate');
// eslint-disable-next-line no-unused-vars
module.exports = (request, response) => {
  setContextValue(request, 'pageInfo', {
    title: translate('Create a new product'),
    description: 'Create a new product'
  });
};
