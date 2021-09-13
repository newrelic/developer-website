import { React } from 'react';
import PropTypes from 'prop-types';
import { useTessen } from '@newrelic/gatsby-theme-newrelic';
import Select from './Select';

const MobileQSFilter = ({
  packContains,
  packContentsFilterValues,
  setFormState,
}) => {
  const tessen = useTessen();

  return (
    <Select
      id="packContentsFilter"
      value={packContains || 'All'}
      onChange={(e) => {
        setFormState((state) => ({
          ...state,
          packContains: e.target.value,
        }));
        document.getElementById(e.target.id).blur();
        tessen.track('quickstart', `QuickstartFilter`, {
          quickstartFilterState: packContains,
        });
      }}
    >
      {packContentsFilterValues.map((packContentsItem) => (
        <option
          key={packContentsItem.filterName}
          value={packContentsItem.filterName}
        >
          {`${
            packContentsItem.filterName === 'Documentation'
              ? 'Data sources'
              : packContentsItem.filterName
          } (${packContentsItem.filterCount})`}
        </option>
      ))}
    </Select>
  );
};

MobileQSFilter.propTypes = {
  packContains: PropTypes.string.isRequired,
  packContentsFilterValues: PropTypes.shape([
    {
      filterName: PropTypes.string.isRequired,
      filterCount: PropTypes.number.isRequired,
    },
  ]).isRequired,
  setFormState: PropTypes.func.isRequired,
};

export default MobileQSFilter;
