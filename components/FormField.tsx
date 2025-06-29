import React from 'react';
import { Controller, type FieldValues, type Control, type Path } from 'react-hook-form';

import {
    FormItem,
    FormLabel,
    FormControl,

    FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder: string;
    type?: 'text' | 'email' | 'password' | 'file';
}

const FormField = <T extends FieldValues>({
                                              control,
                                              name,
                                              label,
                                              placeholder,
                                              type = 'text',
                                          }: FormFieldProps<T>) => (
    <Controller
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <FormLabel className="Label">{label}</FormLabel>
                <FormControl>
                    <Input placeholder={placeholder} type={type} {...field} />
                </FormControl>

                <FormMessage />
            </FormItem>
        )}
    />
);

export default FormField;
