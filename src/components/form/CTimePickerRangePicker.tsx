import { TCInputProps } from "@/types/cform.types";
import { Form, TimePicker } from "antd";
import { Controller, useFormContext } from "react-hook-form";

const CTimePickerRangePicker = ({ name }: TCInputProps) => {
  const { control } = useFormContext();
  return (
    <div className="">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Form.Item className="m-0">
            <TimePicker.RangePicker
              format="HH:mm"
              className="text-xs md:text-lg"
              {...field}
              id={name}
              size="large"
            />
            {error && (
              <small
                style={{ color: "red" }}
                className="text-[10px] md:text-sm "
              >
                {error.message}
              </small>
            )}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CTimePickerRangePicker;
