import clsx from 'clsx';
import { styled } from 'nativewind';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

const SafeAreaView = styled(RNSafeAreaView);

const SafeAreaViewLayout = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <SafeAreaView
      className={clsx('flex-1 bg-background p-5', className)}
      // style={{
      //   paddingTop: StatusBar.currentHeight,
      //   paddingHorizontal: 20,
      //   paddingBottom: 20,
      // }}
    >
      <StatusBar backgroundColor={'#ea7a53'} barStyle='dark-content' />
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior='automatic'
      > */}
      {children}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default SafeAreaViewLayout;
