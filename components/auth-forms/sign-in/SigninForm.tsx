import AuthReusableLayout from '@/components/reusable-component/AuthReusableLayout';
import { FormInput } from '@/components/reusable-component/FormInput';
import { SignInFormData } from '@/lib/validation';
import { Link } from 'expo-router';
import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ISigninProps } from './interface';

const SigninForm = ({
  control,
  handleSubmit,
  isLoading,
  onSubmit,
}: ISigninProps) => {
  return (
    <AuthReusableLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={40}
        className='flex-1'
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className='gap-7.5'>
            <View className='items-center gap-2'>
              <Text className='font-sans-bold text-2xl text-primary'>
                Welcome Back
              </Text>
              <Text className='text-base text-gray-100 font-sans-medium'>
                Sign in to manage your subscriptions
              </Text>
            </View>

            <View className='border border-brown-100 rounded-2xl w-full py-9 px-6 bg-gray-200 gap-6'>
              <FormInput<SignInFormData>
                name='email'
                control={control}
                label='Email'
                placeholder='Enter email'
                keyboardType='email-address'
              />

              <FormInput<SignInFormData>
                name='password'
                control={control}
                label='Password'
                placeholder='Enter password'
                secureTextEntry
              />

              <TouchableOpacity
                onPress={handleSubmit(onSubmit)}
                disabled={isLoading}
                className='w-full py-4.5 px-3.5 bg-accent disabled:bg-accent/70 rounded-[14px] flex-row justify-center'
              >
                {isLoading && (
                  <ActivityIndicator
                    color='#fff'
                    size='small'
                    className='mr-2'
                  />
                )}
                <Text className='text-white text-base font-sans-bold'>
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Text>
              </TouchableOpacity>

              <View className='flex-row justify-center'>
                <Text className='text-gray-100 text-base font-sans-medium'>
                  New to Recurly?{' '}
                </Text>
                <Link href='/(auth)/sign-up'>
                  <Text className='text-accent text-base font-sans-semibold'>
                    Create an account
                  </Text>
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </AuthReusableLayout>
  );
};

export default SigninForm;
