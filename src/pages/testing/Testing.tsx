import React, { useState } from 'react';

const Testing = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessAddress: '',
    taxIdentificationNumber: '',
    accountNumber: '',
    bankName: '',
    idType: 'PASSPORT', // Default value
    idNumber: '',
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Business Information</h2>

      <form onSubmit={handleSubmit}>
        {/* Business Name */}
        <div className="mb-4">
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Business Address */}
        <div className="mb-4">
          <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700">Business Address</label>
          <input
            type="text"
            id="businessAddress"
            name="businessAddress"
            value={formData.businessAddress}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Tax Identification Number */}
        <div className="mb-4">
          <label htmlFor="taxIdentificationNumber" className="block text-sm font-medium text-gray-700">Tax Identification Number</label>
          <input
            type="text"
            id="taxIdentificationNumber"
            name="taxIdentificationNumber"
            value={formData.taxIdentificationNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Bank Details */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Bank Details</h3>
          
          {/* Account Number */}
          <div className="mb-4">
            <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number</label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Bank Name */}
          <div className="mb-4">
            <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name</label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
        </div>

        {/* Identification */}
        <div className="mb-4">
          <label htmlFor="idType" className="block text-sm font-medium text-gray-700">Identification Type</label>
          <select
            id="idType"
            name="idType"
            value={formData.idType}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="PASSPORT">Passport</option>
            <option value="ID_CARD">ID Card</option>
            <option value="DRIVER_LICENSE">Driver's License</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">ID Number</label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Terms Agreed */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="termsAgreed"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
          <label htmlFor="termsAgreed" className="ml-2 text-sm text-gray-700">
            I agree to the terms and conditions
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Testing;
