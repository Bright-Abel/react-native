import { HOME_SUBSCRIPTIONS } from '@/constants/data';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ListHeading from '../reusable-component/ListHeading';
import SubscriptionCard from '../reusable-component/SubscriptionCard';
import UpcomingChart from './UpcomingChart';

const History = () => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };
  return (
    <View className='flex-1'>
      <FlatList
        ListHeaderComponent={
          <>
            <UpcomingChart />
            <ListHeading title='History' />
          </>
        }
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
    </View>
  );
};

export default History;
