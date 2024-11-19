import { ReactNode } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TFormConfig = {
  defaultValues?: Record<string, any>; // এইটা থাকতেও পারে আবার নাও থাকতে পারে
  resolver?: any;
};

export type TCFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFormConfig;

export type TCInputProps = {
  type?: string;
  name: string;
  label?: string; // এইটা থাকতেও পারে আবার নাও থাকতে পারে
  placeholder: string;
};

