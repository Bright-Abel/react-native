import { SUBSCRIPTIONS } from '@/constants/data';
import React, { useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';
import SubscriptionCard from '../reusable-component/SubscriptionCard';

const Cards = () => {
  const [value, setValue] = useState<string>('');
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  const newData = SUBSCRIPTIONS.filter(
    (item) => !value || item.name.toLowerCase().includes(value.toLowerCase())
  );
  return (
    <View className='flex-1 gap-5'>
      <TextInput
        value={value}
        onChangeText={setValue}
        autoCorrect={false}
        autoCapitalize='none'
        placeholder='Search'
        placeholderTextColor='#435875'
        className='border border-border-2 h-11 mt-5 px-3.5 rounded-full'
      />

      <FlatList
        // ListHeaderComponent={() => (
        //   <>
        //     <HomeHeader />
        //     <Upcoming />
        //     <ListHeading title='All Subscriptions' />
        //   </>
        // )}
        data={newData}
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

export default Cards;
