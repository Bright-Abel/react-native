import clsx from 'clsx';
import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
} & TextInputProps;

export function FormInput<T extends FieldValues>({
  name,
  control,
  label,
  ...inputProps
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View>
          <View className='gap-2.5'>
            {label && (
              <Text
                className={clsx(
                  'text-base text-primary font-sans-semibold',
                  error && 'text-destructive!'
                )}
              >
                {label}
              </Text>
            )}

            <View
              className={clsx(
                'flex-row items-center border border-border-2 h-14 px-3.5 rounded-[14px]',
                error && 'border-destructive'
              )}
            >
              <TextInput
                className={clsx(
                  'flex-1 font-sans-semibold text-gray-100 text-base',
                  error && 'text-destructive!'
                )}
                value={value || ''}
                onChangeText={onChange}
                placeholderTextColor='#435875'
                {...inputProps}
              />
            </View>
          </View>

          {error && <Text className='auth-error'>{error.message}</Text>}
        </View>
      )}
    />
  );
}
