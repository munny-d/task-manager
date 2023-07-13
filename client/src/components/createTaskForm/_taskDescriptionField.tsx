import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskDescriptionField: FC<ITextField> = (
  props,
): ReactElement => {
  // Destructure props
  const {
    onChange = (e) => console.log(e),
    isDisabled = false,
  } = props;
  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={isDisabled}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
};
