import { HOME_BALANCE, HOME_USER } from '@/constants/data';
import { icons } from '@/constants/icon';
import image from '@/constants/image';
import { formatCurrency } from '@/lib/utils';
import dayjs from 'dayjs';
import React from 'react';
import { Image, Text, View } from 'react-native';

const HomeHeader = () => {
  return (
    <>
      <View className='home-header'>
        <View className='home-user'>
          <Image source={image.avatar} className='home-avatar' />
          <Text className='home-user-name'>{HOME_USER.name}</Text>
        </View>

        <View className='home-add-icon'>
          <Image source={icons.add} className='size-6' />
        </View>
      </View>

      <View className='home-balance-card'>
        <Text className='home-balance-label'>Balance</Text>

        <View className='home-balance-row'>
          <Text className='home-balance-amount'>
            {formatCurrency(HOME_BALANCE.amount)}
          </Text>

          <Text className='home-balance-date'>
            {dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}
          </Text>
        </View>
      </View>
    </>
  );
};

export default HomeHeader;
