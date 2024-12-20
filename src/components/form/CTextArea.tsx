import { TCInputProps } from "@/types/cform.types";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Controller } from "react-hook-form";

const CTextArea = ({ name, label, placeholder }: TCInputProps) => {
  return (
    <div className="">
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label} className="m-0">
            <TextArea className="text-xs md:text-lg" showCount maxLength={2000} {...field}  id={name} size="large" placeholder={placeholder}/>
            {error && <small style={{ color: "red" }} className="text-[10px] md:text-sm">{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CTextArea;
