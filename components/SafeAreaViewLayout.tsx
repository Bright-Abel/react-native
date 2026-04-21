import clsx from 'clsx';
import { styled } from 'nativewind';
import React from 'react';
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
    <SafeAreaView className={clsx('flex-1 bg-background p-5', className)}>
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
