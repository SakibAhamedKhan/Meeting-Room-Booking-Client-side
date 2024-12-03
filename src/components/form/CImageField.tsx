import { Button, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Controller } from "react-hook-form";
import { TCInputProps } from "@/types/cform.types";

const CImageField = ({
  name,
  label,
  placeholder,
  maxImage,
}: TCInputProps) => {

  return (
    <div>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label} className="m-0">
            {/* Ant Design Upload Component */}
            <Upload
              {...field} // Bind the field to react-hook-form
              listType="picture"
              maxCount={maxImage} // Limit the number of images
              beforeUpload={() => false} // Prevent auto upload
              onChange={({ file, fileList }) => {
                // Update react-hook-form state when the file is selected
                if (file.status === "done") {
                  message.success(`${file.name} uploaded successfully.`);
                } else if (file.status === "error") {
                  message.error(`${file.name} upload failed.`);
                }
                // Store the file(s) in react-hook-form's state
                field.onChange(fileList); 
              }}
              fileList={field.value || []} 
            >
              <Button
                size="large"
                icon={<UploadOutlined />}
                className="border-none !text-sm !md:text-lg"
              >
                {`${placeholder} max Image - (${maxImage})`}
              </Button>
            </Upload>

            {/* Display error message if there's an issue */}
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </Form.Item>
        )}
      />
    </div>
  );
};

export default CImageField;
