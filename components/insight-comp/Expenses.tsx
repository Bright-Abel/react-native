import React from 'react';
import { Text, View } from 'react-native';

const Expenses = () => {
  return (
    <View className='rounded-[20px] border border-border-2 p-4 mt-5'>
      <View className='sub-head'>
        <View className='sub-copy'>
          <Text className='sub-title' numberOfLines={1}>
            Expenses
          </Text>
          <Text className='sub-meta' numberOfLines={1} ellipsizeMode='tail'>
            March 2026
          </Text>
        </View>

        <View className='sub-price-box'>
          <Text className='sub-price'>-$424.63</Text>
          <Text className='sub-billing'>+12%</Text>
        </View>
      </View>
    </View>
  );
};

export default Expenses;
