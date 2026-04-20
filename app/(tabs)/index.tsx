import SafeAreaViewLayout from '@/components/SafeAreaViewLayout';
import '@/global.css';

import { Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaViewLayout>
      <Text className='text-xl font-sans-extrabold text-blue-500'>
        Welcome to Nativewind!
      </Text>
    </SafeAreaViewLayout>
  );
}
