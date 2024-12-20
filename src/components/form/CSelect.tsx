import { TCInputProps } from "@/types/cform.types";
import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

const CSelect = ({ name, label, options, placeholder }: TCInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label} className="m-0">
            <Select
              {...field}
              style={{ width: "100%" }}
              options={options}
              placeholder={placeholder}
              size="large"
              className="md:!h-[43px]"
             
            />
            {error && (
              <small style={{ color: "red" }} className="text-[10px] md:text-sm">
                {error.message}
              </small>
            )}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CSelect;
