import CForm from "@/components/form/CForm";
import CInput from "@/components/form/CInput";
import CSelect from "@/components/form/CSelect";
import { Card } from "@/components/ui/card";
import { logout } from "@/redux/features/auth/authSlice.slice";
import {
  useRequestedPartnerMutation,
  useSignlePartnerRequestQuery,
} from "@/redux/features/customer/customerRoomApi.api";
import { useAppDispatch } from "@/redux/hook";
import { partnerRequestSchemas } from "@/schemas/customer.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Spin } from "antd";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";


const optionsType = [
  { value: "PASSPORT", label: "PASSPORT" },
  { value: "NATIONAL_ID", label: "NATIONAL_ID" },
  { value: "DRIVER_LICENSE", label: "DRIVER_LICENSE" },
];

const CustomerToPartner = () => {
  const [termsAgreed, settermsAgreed] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const [requestedPartner] =
    useRequestedPartnerMutation();

  const {
    data: signlePartnerRequestData,
    isFetching: signlePartnerRequestFetching,
  } = useSignlePartnerRequestQuery(undefined);

  console.log(signlePartnerRequestData);
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Requesting...");
    const partnerRequestData = {
      businessName: data.businessName,
      businessAddress: data.businessAddress,
      taxIdentificationNumber: data.taxIdentificationNumber,
      bankDetails: {
        accountNumber: data.accountNumber,
        bankName: data.bankName,
      },
      identification: {
        idType: data.idType,
        idNumber: data.idNumber,
      },
      termsAgreed: termsAgreed,
    };
    console.log(partnerRequestData);
    try {
      const res = (await requestedPartner(partnerRequestData).unwrap()) as any;
      console.log(res);
      toast.success(res?.message, { id: toastId, duration: 2000 });
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message, { id: toastId, duration: 1000 });
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if(signlePartnerRequestFetching ){
    return <div className="flex justify-center items-center h-20">
       <Spin size="large"/>
    </div>
  }
  console.log(signlePartnerRequestData?.data?.isApproved);
  return (
    <div className="">
      {/* {signlePartnerRequestFetching && (
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <div className="h-7 sm:h-8 bg-gray-200 rounded w-3/4 mb-2 sm:mb-0"></div>
              <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-4 sm:h-5 bg-gray-200 rounded w-full mb-4"></div>
            <div className="mb-4">
              <div className="h-6 sm:h-7 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="h-4 bg-gray-200 rounded w-full relative overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 bottom-0 -translate-x-full animate-[shimmer_2s_infinite]
                                   bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <div className="h-6 sm:h-7 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="h-4 bg-gray-200 rounded w-full relative overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 right-0 bottom-0 -translate-x-full animate-[shimmer_2s_infinite]
                                   bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-2 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 bottom-0 -translate-x-full animate-[shimmer_2s_infinite]
                             bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
              ></div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-1/2 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 bottom-0 -translate-x-full animate-[shimmer_2s_infinite]
                             bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
              ></div>
            </div>
          </div>
        </div>
      )} */}
      {signlePartnerRequestData?.data?.isApproved === "Pending" && (
        <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                {signlePartnerRequestData?.data?.businessName}
              </h2>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  signlePartnerRequestData?.data?.isApproved === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {signlePartnerRequestData?.data?.isApproved}
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              {signlePartnerRequestData?.data?.businessAddress}
            </p>
            <div className="mb-4">
              <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">
                Bank Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <span className="text-gray-600">Account Number:</span>
                <span className="text-gray-800">
                  {signlePartnerRequestData?.data?.bankDetails?.accountNumber}
                </span>
                <span className="text-gray-600">Bank Name:</span>
                <span className="text-gray-800">
                  {signlePartnerRequestData?.data?.bankDetails?.bankName}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">
                Identification
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <span className="text-gray-600">ID Type:</span>
                <span className="text-gray-800">
                  {signlePartnerRequestData?.data?.identification?.idType}
                </span>
                <span className="text-gray-600">ID Number:</span>
                <span className="text-gray-800">
                  {signlePartnerRequestData?.data?.identification?.idNumber}
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">TIN:</span>{" "}
              {signlePartnerRequestData?.data?.taxIdentificationNumber}
            </div>
            <div className="text-xs text-gray-500">
              Request on{" "}
              {signlePartnerRequestData?.data?.createdAt &&
                new Date(
                  signlePartnerRequestData?.data?.createdAt
                ).toLocaleDateString()}
            </div>
          </div>
        </Card>
      )}
      {signlePartnerRequestData?.data?.isApproved === "Approved" && (
        <Card className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                {signlePartnerRequestData?.data?.businessName}
              </h2>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  signlePartnerRequestData?.data?.isApproved === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {signlePartnerRequestData?.data?.isApproved}
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              {signlePartnerRequestData?.data?.businessAddress}
            </p>
            <div className="mb-4">
              <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">
                Bank Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <span className="text-gray-600">Account Number:</span>
                <span className="text-gray-800">
                  {signlePartnerRequestData?.data?.bankDetails?.accountNumber}
                </span>
                <span className="text-gray-600">Bank Name:</span>
                <span className="text-gray-800">
                  {signlePartnerRequestData?.data?.bankDetails?.bankName}
                </span>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">
                Identification
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <span className="text-gray-600">ID Type:</span>
                <span className="text-gray-800">
                  {signlePartnerRequestData?.data?.identification?.idType}
                </span>
                <span className="text-gray-600">ID Number:</span>
                <span className="text-gray-800">
                  {signlePartnerRequestData?.data?.identification?.idNumber}
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">TIN:</span>{" "}
              {signlePartnerRequestData?.data?.taxIdentificationNumber}
            </div>
            <div className="text-xs text-gray-500">
              Request on{" "}
              {signlePartnerRequestData?.data?.createdAt &&
                new Date(
                  signlePartnerRequestData?.data?.createdAt
                ).toLocaleDateString()}
            </div>
            <h1 className="text-lg md:text-2xl font-semibold my-4 pt-4 border-t-2">
              To access your Partner Account at first you have{" "}
              <span
                onClick={() => handleLogout()}
                className="text-blue-700 underline cursor-pointer"
              >
                Logout
              </span>
            </h1>
          </div>
        </Card>
      )}
      {(signlePartnerRequestData?.data?.isApproved === "Rejected" ||
        signlePartnerRequestData?.data?.isApproved === undefined) &&
        !signlePartnerRequestFetching && (
          <Card className="bg-white shadow-lg rounded-lg p-4 md:px-10 md:py-6">
            <div>
              <CForm
                onSubmit={onSubmit}
                resolver={zodResolver(partnerRequestSchemas)}
              >
                {/*------------ Business Information -----------*/}
                <h2 className="text-2xl mb-4 mt-4">Business Information</h2>
                <div className="flex md:flex-row flex-col">
                  <div className="mb-2 md:mb-4 mr-2 md:mr-4 w-full">
                    <CInput
                      type="text"
                      name="businessName"
                      placeholder="Business Name"
                    />
                  </div>
                  <div className="mb-2 md:mb-4 w-full">
                    <CInput
                      type="text"
                      name="taxIdentificationNumber"
                      placeholder="Tax Identification Number"
                    />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col">
                  <div className="mb-2 md:mb-4 w-full">
                    <CInput
                      type="text"
                      name="businessAddress"
                      placeholder="Business Address"
                    />
                  </div>
                </div>

                {/*------------ Bank Details -----------*/}
                <h2 className="text-2xl mb-4 mt-4">Bank Details</h2>
                <div className="flex md:flex-row flex-col">
                  <div className="mb-2 md:mb-4 mr-2 md:mr-4 w-full">
                    <CInput
                      type="text"
                      name="accountNumber"
                      placeholder="Account Number"
                    />
                  </div>
                  <div className="mb-2 md:mb-4 w-full">
                    <CInput
                      type="text"
                      name="bankName"
                      placeholder="Bank Name"
                    />
                  </div>
                </div>

                {/*------------ Identification -----------*/}
                <h2 className="text-2xl mb-4 mt-4">Identification</h2>
                <div className="flex md:flex-row flex-col">
                  <div className="mb-2 md:mb-4 mr-2 md:mr-4 w-full">
                    <CSelect
                      name="idType"
                      placeholder="Identification Type"
                      options={optionsType}
                    />
                  </div>
                  <div className="mb-2 md:mb-4 w-full">
                    <CInput
                      type="text"
                      name="idNumber"
                      placeholder="ID Number"
                    />
                  </div>
                </div>

                <div className="mb-2 md:mb-4 w-fit flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="termsAgreed"
                    onChange={(e) => settermsAgreed(e.target.checked)}
                  />
                  <p className="text-xs md:text-sm cursor-default">
                    I agree to the terms and conditions
                  </p>
                </div>

                <div className="flex justify-center md:justify-normal">
                  <Button
                    htmlType="submit"
                    className="bg-blue-50 text-[#002F76] md:h-[43px] text-sm md:text-lg font-semibold mb-2 md:px-10"
                  >
                    Request
                  </Button>
                </div>
              </CForm>
            </div>
          </Card>
        )}
    </div>
  );
};

export default CustomerToPartner;
