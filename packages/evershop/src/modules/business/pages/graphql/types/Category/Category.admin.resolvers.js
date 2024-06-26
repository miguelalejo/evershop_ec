const { select } = require('@evershop/postgres-query-builder');
const { buildUrl } = require('@evershop/evershop/src/lib/router/buildUrl');

module.exports = {
  Company: {
    editUrl: (company) => buildUrl('categoryEdit', { id: company.uuid }),
    updateApi: (company) => buildUrl('updateCategory', { id: company.uuid }),
    deleteApi: (company) => buildUrl('deleteCategory', { id: company.uuid }),
    addProductUrl: (company) =>
      buildUrl('addProductToCategory', { category_id: category.uuid })
  },
  Product: {
    removeFromCategoryUrl: async (product, _, { pool }) => {
      if (!product.categoryId) {
        return null;
      } else {
        const category = await select()
          .from('category')
          .where('category_id', '=', product.categoryId)
          .load(pool);
        return buildUrl('removeProductFromCategory', {
          category_id: category.uuid,
          product_id: product.uuid
        });
      }
    }
  }
};
