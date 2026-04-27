import { ChevronDown } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const Chart = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const rawData = [
    { value: 36, label: 'Mon' },
    { value: 31, label: 'Tue' },
    { value: 23, label: 'Wed' },
    { value: 40, label: 'Thr' },
    { value: 34, label: 'Fri' },
    { value: 21, label: 'Sat' },
    { value: 24, label: 'Sun' },
  ];

  const rawMax = Math.max(...rawData.map((item) => item.value));

  const adjustedMax = Math.ceil(rawMax * 1.3);

  const data = rawData.map((item, index) => ({
    ...item,
    //    chnage color
    frontColor: selectedIndex === index ? '#EA7A53' : '#081226',

    // Only show the tooltip component if this bar is selected
    topLabelComponent: () =>
      selectedIndex === index ? (
        <View
          style={{
            backgroundColor: 'white',
            // paddingHorizontal: 8,
            width: 36,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            marginBottom: 6,
            elevation: 2, // Shadow for Android
            shadowColor: '#000', // Shadow for iOS
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            position: 'relative',
          }}
        >
          <Text style={{ color: '#EA7A53', fontWeight: 'bold', fontSize: 12 }}>
            ${item.value}
          </Text>
          <View className='absolute -bottom-2.5'>
            <ChevronDown color='#ffffff' size={20} />
          </View>
        </View>
      ) : null,
  }));

  return (
    <View className='bg-brown-300 p-4 overflow-hidden rounded-2xl'>
      <BarChart
        data={data}
        barWidth={12}
        spacing={30}
        roundedTop
        roundedBottom
        hideRules={false}
        rulesType='dashed'
        rulesColor='#8D856133'
        yAxisThickness={0}
        xAxisThickness={0}
        maxValue={adjustedMax}
        disableScroll={true}
        noOfSections={5}
        //yAxisLabelWidth={40} // Pushes the chart right to give labels space
        yAxisTextStyle={{ color: '#435875', fontSize: 12 }}
        xAxisLabelTextStyle={{ color: '#435875', fontSize: 12 }}
        dashGap={10}
        animationDuration={300}
        onPress={(_: any, index: React.SetStateAction<null>) => {
          // If the same bar is tapped again, hide the tooltip (toggle)
          setSelectedIndex(selectedIndex === index ? null : index);
        }}
      />
    </View>
  );
};

export default Chart;
