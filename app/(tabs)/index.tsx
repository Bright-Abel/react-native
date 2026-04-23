import AllSubscription from '@/components/home-components/AllSubscription';
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout';
import '@/global.css';
import { Link } from 'expo-router';

export default function App() {
  return (
    <SafeAreaViewLayout>
      <Link
        href='/(auth)/sign-in'
        className='text-white text-base font-semibold bg-primary rounded-full px-4 py-2 mb-4 w-max self-end'
      >
        Add Subscription
      </Link>
      <AllSubscription />
    </SafeAreaViewLayout>
  );
}
