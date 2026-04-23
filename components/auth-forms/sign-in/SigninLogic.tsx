import { SignInFormData, signinValidation } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import SigninForm from './SigninForm';

const SigninLogic = () => {
  const { control, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(signinValidation),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
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
