import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Header = ({ title }: { title: string }) => {
  const navigation = useNavigation<any>();
  return (
    <View className='justify-between items-center pb-2 flex-row'>
      <TouchableOpacity
        onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            navigation.navigate('index'); // fallback
          }
        }}
        // activeOpacity={1}
        className='size-12.5 border border-border-2 items-center justify-center rounded-full'
      >
        <Ionicons name='arrow-back' size={20} />
      </TouchableOpacity>

      <Text className='font-sans-bold text-xl text-gray-300 capitalize'>
        {title}
      </Text>

      <View className='size-12.5 border border-border-2 items-center justify-center rounded-full'>
        <Ionicons name='options' size={20} />
      </View>
    </View>
  );
};

export default Header;
