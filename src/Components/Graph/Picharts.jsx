import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
// import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
// import Stack from '@mui/material';

const data = [
  { id: 0, value: 10, label: 'Problem Solving' },
  { id: 1, value: 15, label: 'Skills' },
  { id: 2, value: 20, label: 'Commnication' },
];
const palette = ['#875d5d','#ba6645','#e4a000'];

export default function PieActiveArc() {
  return (
    // <Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
    {/* <Typography>palette</Typography> */}
    <PieChart
      colors={palette}
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
        },
      ]}
      height={200}
      width={600}
    />
    </Box>
    // </Stack>
  );
}