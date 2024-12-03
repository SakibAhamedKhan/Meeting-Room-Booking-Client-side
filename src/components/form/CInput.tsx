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
            <Input className="text-xs md:text-lg" {...field} type={type} id={name} size="large" placeholder={placeholder}/>
            {error && <small style={{ color: "red" }} className="text-[10px] md:text-sm ">{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CInput;
