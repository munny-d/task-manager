import { Box, Chip, Typography } from '@mui/material';
import { format } from 'date-fns';
import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ITaskHeader } from './interfaces/ITaskHeader';

export const TaskHeader: FC<ITaskHeader> = (
  props,
): ReactElement => {
  // Destructure props
  const { title = 'Default title', date = new Date() } =
    props;

  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={3}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={format(date, 'PPP')}
        />
      </Box>
    </Box>
  );
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
};
