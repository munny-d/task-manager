import React, { FC, ReactElement } from 'react';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';

export const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  //Destructure props
  const {
    value = new Date(),
    isDisabled = false,
    onChange = (date) => {
      console.log(date);
    },
  } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Task Date"
          format="dd/MM/yyyy"
          value={value}
          disabled={isDisabled}
          onChange={onChange}
          //   renderInput={(params: object) => (
          //     <TextField {...params} />
          //   )}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  isDisabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};
