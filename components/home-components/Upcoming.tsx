import { UPCOMING_SUBSCRIPTIONS } from '@/constants/data';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ListHeading from '../reusable-component/ListHeading';
import UpcomingCard from '../reusable-component/UpcomingCard';

const Upcoming = () => {
  return (
    <View>
      <ListHeading title='Upcoming' />

      <FlatList
        data={UPCOMING_SUBSCRIPTIONS}
        renderItem={({ item }) => <UpcomingCard {...item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        horizontal
        ListEmptyComponent={
          <Text className='home-empty-state'>No upcoming renewals yet.</Text>
        }
      />
    </View>
  );
};

export default Upcoming;
