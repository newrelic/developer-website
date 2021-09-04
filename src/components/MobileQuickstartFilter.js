import { React } from 'react';
import PropTypes from 'prop-types';
import { useTessen } from '@newrelic/gatsby-theme-newrelic';
import Select from './Select';

const MobileQuickstartFilter = ({ filter, setFilter, filters }) => {
  const tessen = useTessen();

  return (
    <Select
      id="packContentsFilter"
      value={filter}
      onChange={(e) => {
        const filter = e.target.value;
        setFilter(filter);
        tessen.track('observabilityPack', `quickstartFilter`, { filter });
      }}
    >
      {filters.map(({ name, count, type }) => (
        <option key={type} value={type}>
          {`${name} (${count})`}
        </option>
      ))}
    </Select>
  );
};

MobileQuickstartFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired, // TODO: context?
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MobileQuickstartFilter;
