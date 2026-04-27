import React from 'react';
import { View } from 'react-native';
import ListHeading from '../reusable-component/ListHeading';
import Chart from './Chart';
import Expenses from './Expenses';

const UpcomingChart = () => {
  return (
    <View>
      <ListHeading title='Upcoming' />
      <Chart />
      <Expenses />
    </View>
  );
};

export default UpcomingChart;
