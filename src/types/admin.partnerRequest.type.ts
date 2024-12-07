type TPartnerRequested = {
    bankDetails: {
      accountNumber: string;
      bankName: string;
    };
    identification: {
      idType: string;
      idNumber: string;
    };
    _id: string;
    user: {
      _id: string;
      name: string;
      email: string;
      phone: string;
      address: string;
      role: string;
      status: string;
      __v: number;
    };
    businessName: string;
    businessAddress: string;
    taxIdentificationNumber: string;
    termsAgreed: boolean;
    createdAt: string;
    __v: number;
    isApproved: 'Pending' | 'Approved' | 'Rejected'; // Approval status of the application
  };
  