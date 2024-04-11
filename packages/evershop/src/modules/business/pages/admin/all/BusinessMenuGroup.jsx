import PropTypes from 'prop-types';
import React from 'react';
import AttributeIcon from '@heroicons/react/solid/esm/HashtagIcon';
import CategoryIcon from '@heroicons/react/solid/esm/LinkIcon';
import CollectionIcon from '@heroicons/react/solid/esm/TagIcon';
import ProductIcon from '@heroicons/react/solid/esm/ArchiveIcon';
import NavigationItemGroup from '@components/admin/cms/NavigationItemGroup';

export default function BusinessMenuGroup({
  companyGrid
}) {
  return (
    <NavigationItemGroup
      id="businessMenuGroup"
      name="Business"
      items={[
        {
          Icon: ProductIcon,
          url: companyGrid,
          title: 'BusinessGrid'
        }
      ]}
    />
  );
}

BusinessMenuGroup.propTypes = {  
  companyGrid: PropTypes.string.isRequired
};

export const layout = {
  areaId: 'adminMenu',
  sortOrder: 20
};

export const query = `
  query Query {
    companyGrid: url(routeId:"companyGrid")
  }
`;
