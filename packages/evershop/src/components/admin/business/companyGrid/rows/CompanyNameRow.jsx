import PropTypes from 'prop-types';
import React from 'react';

export default function CompanyNameRow({ company }) {
  return (
    <td>
      <div>
        <a className="hover:underline font-semibold" href={company.editUrl}>
          {company.path.map((p) => p.name).join(' / ')}
        </a>
      </div>
    </td>
  );
}

CompanyNameRow.propTypes = {
  company: PropTypes.shape({
    editUrl: PropTypes.string.isRequired,
    path: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};
