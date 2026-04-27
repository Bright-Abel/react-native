import React from 'react';
import { Text, View } from 'react-native';
import SafeAreaViewLayout from '../SafeAreaViewLayout';

const AuthReusableLayout = ({ children }: AuthLayoutProps) => {
  return (
    <SafeAreaViewLayout className=' gap-10 '>
      <View className='items-center mt-5'>
        <View className='flex-row items-center gap-2.5'>
          <View className='size-16 justify-center items-center bg-accent rounded-tr-[20px] rounded-bl-[20px]'>
            <Text className=' uppercase font-sans-semibold text-white text-4xl'>
              R
            </Text>
          </View>

          <View className='gap-2.5'>
            <Text className='text-primary text-2xl font-sans-bold'>
              Recurly
            </Text>
            <Text className='text-sm font-sans-medium uppercase text-gray-100'>
              smart billing
            </Text>
          </View>
        </View>
      </View>

      {children}
    </SafeAreaViewLayout>
  );
};

export default AuthReusableLayout;
