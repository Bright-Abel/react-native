import { HOME_SUBSCRIPTIONS } from '@/constants/data';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ListHeading from '../reusable-component/ListHeading';
import SubscriptionCard from '../reusable-component/SubscriptionCard';
import HomeHeader from './HomeHeader';
import Upcoming from './Upcoming';

const AllSubscription = () => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <HomeHeader />
          <Upcoming />
          <ListHeading title='All Subscriptions' />
        </>
      )}
      data={HOME_SUBSCRIPTIONS}
      renderItem={({ item }) => (
        <SubscriptionCard
          {...item}
          expanded={expandedId === item.id}
          onPress={() => toggleExpand(item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View className='h-4' />}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text className='home-empty-state'>No subscriptions yet.</Text>
      )}
      extraData={expandedId}
      contentContainerClassName='pb-20'
    />
  );
};

export default AllSubscription;
