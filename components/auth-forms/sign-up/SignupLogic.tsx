import { SignUpFormData, signupValidation } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import SignupForm from './SignupForm';

const SignupLogic = () => {
  const { control, handleSubmit } = useForm<SignUpFormData>({
    resolver: zodResolver(signupValidation),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  const isLoading = false;
  return (
    <SignupForm
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      isLoading={isLoading}
    />
  );
};

export default SignupLogic;
