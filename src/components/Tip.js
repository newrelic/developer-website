import React from 'react';
import PropTypes from 'prop-types';

import styles from './Callouts.module.scss';

const Tip = ({ title, children }) => {
    return (
        <div className={styles.tip}>
            <h4 className={styles.tip.h4}>{title}</h4>
            {children}
        </div>
    )
}

Tip.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Tip.defaultProps = {
    title: `Tip`,
};

export default Tip