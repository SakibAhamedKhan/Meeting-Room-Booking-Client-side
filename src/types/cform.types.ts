import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Control } from "react-hook-form";

export type TFormConfig = {
  defaultValues?: FieldValues; // এইটা থাকতেও পারে আবার নাও থাকতে পারে
  resolver?: any;
};

export type TCFormProps = {
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
} & TFormConfig;

export type TCInputProps = {
  type?: string;
  name: string;
  maxImage?:number;
  label?: string; // এইটা থাকতেও পারে আবার নাও থাকতে পারে
  control?: Control<any>;
  placeholder: string;
};

export interface TCSelectAmenitiesProps {
  name: string;
  label?: string;
  maxImage?:number;
  placeholder?: string;
  control: Control<any>; // Control from react-hook-form, used to manage form state
  error?: string; // Optional error message to show under the field (e.g., for validation errors)
}