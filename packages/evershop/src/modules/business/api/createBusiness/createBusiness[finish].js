const createBusiness = require('../../services/createBusiness/createBusiness');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate) => {
  const result = await createBusiness(request.body, {
    routeId: request.currentRoute.id
  });
  return result;
};
