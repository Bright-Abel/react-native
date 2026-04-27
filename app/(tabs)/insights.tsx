import History from '@/components/insight-comp/History';
import SafeAreaViewLayout from '@/components/SafeAreaViewLayout';
import Header from '@/components/subsription-component/Header';
import React from 'react';

const Insights = () => {
  return (
    <SafeAreaViewLayout>
      <Header title='Monthly Insights' />
      <History />
    </SafeAreaViewLayout>
  );
};

export default Insights;
