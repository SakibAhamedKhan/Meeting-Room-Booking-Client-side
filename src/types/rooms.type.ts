export type Image = {
  url: string;
  public_id: string;
  _id: string;
};

export type Owner = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
  status:  string;
  __v: number;
};

export type Amenity = string;

export type TRoomData = {
  _id: string;
  owner: Owner;
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  totalRatings: number;
  totalReviews: number;
  address: string;
  description: string;
  googleMapURL: string;
  pricePerSlot: number;
  thumbnail: Image[];
  extraImages: Image[];
  amenities: Amenity[];
  isDeleted: boolean;
  isApproved: boolean;
  isBanned: boolean;
  __v: number;
};
