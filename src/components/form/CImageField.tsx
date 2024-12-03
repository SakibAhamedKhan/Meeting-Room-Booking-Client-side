import { TCInputProps } from "@/types/cform.types";
import { Button, Form, Input, Upload } from "antd";
import { Controller } from "react-hook-form";
import { UploadOutlined } from "@ant-design/icons";

const CImageField = ({
  type,
  name,
  label,
  placeholder,
  maxImage,
}: TCInputProps) => {
  return (
    <div className="">
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label} className="m-0">
            {/* <Input
              {...field}
              type={type}
              id={name}
              size="large"
              placeholder={placeholder}
            />
            {error && <small style={{ color: "red" }}>{error.message}</small>} */}
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              maxCount={1}
            >
              <Button
                size="large"
                icon={<UploadOutlined />}
                className="border-none"
              >
                {`${placeholder} max Image - (${maxImage})`}
              </Button>
            </Upload>
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CImageField;
