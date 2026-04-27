import { SignInFormData, signinValidation } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import SigninForm from './SigninForm';

const SigninLogic = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(signinValidation),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
    router.replace('/(tabs)/dashboard');
  };

  const isLoading = false;
  return (
    <SigninForm
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  );
};

export default SigninLogic;
