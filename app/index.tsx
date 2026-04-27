import splashPattern from '@/constants/image';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

const App = () => {
  return (
    <SafeAreaView className='flex-1 bg-accent'>
      <View className='flex-1 justify-center items-center'>
        <Image
          source={splashPattern.splashPattern}
          resizeMode='contain'
          className='flex-1 w-full'
        />
      </View>
      <View className='w-full gap-4 px-6 pb-10 items-center'>
        <Text className='font-sans-bold text-white text-4xl text-center'>
          Gain Financial Clarity
        </Text>
        <Text className='font-sans-medium text-brown-200 text-xl text-center mb-4'>
          Track, analyze and cancel with ease
        </Text>
        <Link href={'/(auth)/sign-in'} asChild>
          <Pressable className='w-full bg-white py-4 items-center rounded-full overflow-hidden'>
            <Text className='font-sans-bold text-gray-300 text-lg'>
              Get Started
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default App;
