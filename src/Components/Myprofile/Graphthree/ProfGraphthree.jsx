import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 5 },
  { value: 7 },
  { value: 14 },
  { value: 22 },
];

const size = {
  width: 400,
  height: 200,
};
const pl = ['rgb(154, 154, 154)','rgb(33, 27, 25)','rgb(24, 56, 130)','rgb(57, 105, 139)'];

const StyledPieChart = styled(PieChart)({
  marginLeft: "0vw",
  marginTop: "-2vh"
});

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <StyledPieChart colors={pl} series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>User Details</PieCenterLabel>
    </StyledPieChart>
  );
}
