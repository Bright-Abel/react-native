import SafeAreaViewLayout from '@/components/SafeAreaViewLayout';
import React from 'react';
import { Text } from 'react-native';

const Settings = () => {
  return (
    <SafeAreaViewLayout>
      <Text className='text-xl font-bold text-blue-500'>
        Welcome to Nativewind!
      </Text>
    </SafeAreaViewLayout>
  );
};

export default Settings;
