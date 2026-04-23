import { SignInFormData } from '@/lib/validation';
import { Control, UseFormHandleSubmit } from 'react-hook-form';

export interface ISigninProps {
  handleSubmit: UseFormHandleSubmit<IFormType, IFormType>;
  control: Control<IFormType, IFormType>;
  onSubmit: (data: SignInFormData) => void;
  isLoading: boolean;
}

interface IFormType {
  email: string;
  password: string;
}
