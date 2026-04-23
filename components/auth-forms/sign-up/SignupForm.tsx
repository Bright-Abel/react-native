import AuthReusableLayout from '@/components/reusable-component/AuthReusableLayout';
import { FormInput } from '@/components/reusable-component/FormInput';
import { SignUpFormData } from '@/lib/validation';
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
import { ISignupProps } from './interface';

const SignupForm = ({
  control,
  handleSubmit,
  isLoading,
  onSubmit,
}: ISignupProps) => {
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
              <FormInput<SignUpFormData>
                name='email'
                control={control}
                label='Email'
                placeholder='Enter email'
                keyboardType='email-address'
              />

              <FormInput<SignUpFormData>
                name='password'
                control={control}
                label='Password'
                placeholder='Enter password'
                secureTextEntry
              />
              <FormInput<SignUpFormData>
                name='confirm_password'
                control={control}
                label='Confirm Password'
                placeholder='Enter confirm password'
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
                  {isLoading ? 'Signing up...' : 'Sign Up'}
                </Text>
              </TouchableOpacity>

              <View className='flex-row justify-center'>
                <Text className='text-gray-100 text-base font-sans-medium'>
                  Already have an account?{' '}
                </Text>
                <Link href='/(auth)/sign-in'>
                  <Text className='text-accent text-base font-sans-semibold'>
                    Log in
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

export default SignupForm;
