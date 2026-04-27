import SafeAreaViewLayout from '@/components/SafeAreaViewLayout';
import Cards from '@/components/subsription-component/Cards';
import Header from '@/components/subsription-component/Header';
import React from 'react';

const Subscriptions = () => {
  return (
    <SafeAreaViewLayout>
      <Header title='  my subscriptions' />
      <Cards />
    </SafeAreaViewLayout>
  );
};

export default Subscriptions;
