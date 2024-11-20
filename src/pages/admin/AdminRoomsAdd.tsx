import { Button } from "antd";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"; // Import SubmitHandler
import CForm from "@/components/form/CForm"; // Assuming your CForm is working well
import CInput from "@/components/form/CInput";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CSelectAmenities from "@/components/form/CSelectAmenities";

const AdminRoomsAdd = () => {
  const { control, handleSubmit } = useForm(); 

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data); // Handle form data here
  };

  return (
    <div>
      <div className="flex justify-center items-center my-10 md:my-14 lg:my-24 px-8">
        <Card className="w-[350px] p-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold">
              Login now
            </CardTitle>
            <CardDescription>Login for Arrange Meeting</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <CForm onSubmit={handleSubmit(onSubmit)}> 
              <div className="mb-4">
                <CInput
                  type="text"
                  name="email"
                  placeholder="Email"
                  control={control} 
                />
              </div>
              <div className="mb-2">
                <CInput
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  control={control} 
                />
              </div>

              {/* Add CSelect here for selecting amenities */}
              <div className="mb-4">
                <CSelectAmenities
                  name="amenities"
                  label="Select Amenities"
                  placeholder="Choose amenities"
                  control={control} // Pass control here
                />
              </div>

              <div>
                <Button
                  htmlType="submit"
                  className="bg-[#002F76] text-white w-full h-[40px] text-md md:text-lg font-semibold mb-2"
                >
                  Sign in
                </Button>
                <h1 className="text-center mb-2">
                  <CardDescription className="inline">
                    Not have an account?{" "}
                  </CardDescription>{" "}
                </h1>
              </div>
            </CForm>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminRoomsAdd;
