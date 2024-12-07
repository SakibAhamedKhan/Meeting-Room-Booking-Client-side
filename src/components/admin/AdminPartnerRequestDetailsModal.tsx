import { Modal } from "antd";

const AdminPartnerRequestDetailsModal = ({
  modalData,
  handleOk,
  handleCancel,
}: any) => {
  console.log(modalData);
  return (
    <Modal
      open={modalData !== null} // Show modal if modalData is not null
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      className="!w-full md:!w-4/6"
    >
      {modalData && (
        <div className="">
          <div className="mx-auto max-w-7xl md:px-6 lg:px-8 my-8 md:my-12">
            <div className="max-w-4xl mx-auto bg-white rounded-lg space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800 pb-2">
                Partner Request Details
              </h2>

              {/* User Information */}
              <div className="space-y-4 border p-4 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 bg-blue-50 cursor-default">
                <h3 className="text-xl font-medium text-gray-800">
                  User Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  <p>
                    <strong>Name:</strong> {modalData.user.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {modalData.user.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {modalData.user.phone}
                  </p>
                  <p>
                    <strong>Address:</strong> {modalData.user.address}
                  </p>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-4 border p-4 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 bg-blue-50 cursor-default">
                <h3 className="text-xl font-medium text-gray-800">
                  Business Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  <p>
                    <strong>Business Name:</strong> {modalData.businessName}
                  </p>
                  <p>
                    <strong>Business Address:</strong>{" "}
                    {modalData.businessAddress}
                  </p>
                  <p>
                    <strong>Tax ID:</strong> {modalData.taxIdentificationNumber}
                  </p>
                </div>
              </div>

              {/* Bank Details */}
              <div className="space-y-4 border p-4 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 bg-blue-50 cursor-default">
                <h3 className="text-xl font-medium text-gray-800">
                  Bank Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  <p>
                    <strong>Bank Name:</strong> {modalData.bankDetails.bankName}
                  </p>
                  <p>
                    <strong>Account Number:</strong>{" "}
                    {modalData.bankDetails.accountNumber}
                  </p>
                </div>
              </div>

              {/* Identification */}
              <div className="space-y-4 border p-4 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 bg-blue-50 cursor-default">
                <h3 className="text-xl font-medium text-gray-800">
                  Identification
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  <p>
                    <strong>ID Type:</strong> {modalData.identification.idType}
                  </p>
                  <p>
                    <strong>ID Number:</strong>{" "}
                    {modalData.identification.idNumber}
                  </p>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4 border p-4 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 bg-blue-50 cursor-default">
                <h3 className="text-xl font-medium text-gray-800">
                  Additional Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  <p>
                    <strong>Terms Agreed:</strong>{" "}
                    {modalData.termsAgreed ? "Yes" : "No"}
                  </p>
                  <p>
                    <strong>Approval Status:</strong> {modalData.isApproved}
                  </p>
                  <p>
                    <strong>Request At:</strong>{" "}
                    {new Date(modalData.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default AdminPartnerRequestDetailsModal;
