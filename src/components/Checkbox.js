import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { withProps } from 'recompose';

const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
const LabelText = styled.span`
  margin-bottom: 0;
  color: var(--primary-text-color);
  vertical-align: middle;
`;

const CheckboxContainer = styled.div`
  position: relative;
`;

const CheckboxHidden = withProps({
  type: 'checkbox',
})(styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`);

const CheckboxDisplay = styled.div`
  background-color: var(--tertiary-background-color);
  border: solid 0.0675rem var(--accent-text-color);
  border-radius: 0.125rem;
  height: 1rem;
  width: 1rem;
  display: inline-block;
  margin-right: 0.75rem;
  margin-left: -1px;
  vertical-align: middle;
`;

const Checkbox = ({ checked, label, disabled, valid, id, ...props }) => (
  <CheckboxContainer>
    <CheckboxHidden checked={checked} disabled={disabled} id={id} {...props} />
    <Label disabled={disabled} htmlFor={id}>
      <CheckboxDisplay checked={checked} disabled={disabled} valid={valid}>
        <svg viewBox="-4 0 20 20">
          <g fill="none">
            {checked && (
              <path stroke="white" strokeWidth="2" d="M1.5 3.75l3 3 6-6" />
            )}
          </g>
        </svg>
      </CheckboxDisplay>
      <LabelText>{label}</LabelText>
    </Label>
  </CheckboxContainer>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  valid: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Checkbox;
