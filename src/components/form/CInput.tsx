import { TCInputProps } from "@/types/cform.types";
import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

const CInput = ({ type, name, label, placeholder }: TCInputProps) => {
  return (
    <div className="">
      <Controller
        name={name}
        // control={control}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label} className="m-0">
            <Input {...field} type={type} id={name} size="large" placeholder={placeholder}/>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CInput;
