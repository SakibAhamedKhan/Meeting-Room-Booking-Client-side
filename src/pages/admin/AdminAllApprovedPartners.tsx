import AdminNewRequestedRoomModal from "@/components/admin/AdminNewRequestedRoomModal";
import { Card } from "@/components/ui/card";
import { TQueryParam } from "@/types";
import {
  Button,
  Modal,
  Pagination,
  Row,
  Select,
  Space,
  Table,
  TableColumnsType,
} from "antd";
import { useState } from "react";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { LuRefreshCw } from "react-icons/lu";
import { TPartnerRequested } from "@/types/admin.partnerRequest.type";
import getTimeAgo from "@/utils/getTimeAgo";
import {
  useDecisionMakePartnerMutation,
  useGetAllPartnersQuery,
} from "@/redux/features/admin/adminPartnerApi.api";
import { toast } from "sonner";
import { FaRegEye } from "react-icons/fa6";
import AdminPartnerRequestDetailsModal from "@/components/admin/AdminPartnerRequestDetailsModal";

type TDataType = TPartnerRequested;
const { confirm } = Modal;

const actionOpitions = [
  { value: "Approved", label: "Approved" },
  { value: "Rejected", label: "Rejected" },
];

const AdminAllApprovedPartners = () => {
  const [page, setPage] = useState(1);
  const [params, setParams] = useState<TQueryParam[]>([]);
  const {
    data: adminGetAllPartnersData,
    isFetching: adminGetAllPartnersDataFetching,
    refetch: adminGetAllPartnersDataRefetch,
  } = useGetAllPartnersQuery([
    { name: "limit", value: 10 },
    { name: "page", value: page },
    { name: "isApproved", value: "Approved" },
    ...params,
  ]);
  const [decisionMakePartner, { isLoading: decisionMakePartnerLoading }] =
    useDecisionMakePartnerMutation();
  const [modalData, setModalData] = useState<any>(null);

  const handleActionChange = async (selectData: string, record: TDataType) => {
    const userData = {
      args: [{ name: "operation", value: selectData }],
      partnerData: {
        user: record?.user?._id,
        requestedId: record?._id,
      },
    };
    try {
      const res = (await decisionMakePartner(userData)) as any;
      console.log(res);

      toast.success(res?.data?.message, { duration: 2000 });
    } catch (error: any) {
      toast.error(error?.message, { duration: 2000 });
    }
  };

  const columns: TableColumnsType<TDataType> = [
    {
      title: "Id",
      key: "id",
      render: (text, record) => {
        return (
          <Space>
            <p className="!text-xs">{record?._id}</p>
          </Space>
        );
      },
    },
    {
      title: "Time",
      key: "time",
      render: (text, record) => {
        console.log(record);
        return (
          <Space>
            <p className="!text-xs">{getTimeAgo(record?.createdAt)}</p>
          </Space>
        );
      },
    },
    {
      title: "Partner Name",
      key: "partnerName",
      render: (text, record) => {
        return (
          <Space>
            <p className="!text-xs">{record?.user?.name}</p>
          </Space>
        );
      },
    },
    {
      title: "Business Name",
      key: "businessName",
      render: (text, record) => {
        return (
          <Space>
            <p className="!text-xs">{record?.businessName}</p>
          </Space>
        );
      },
    },

    {
      title: "Business Address",
      key: "businessAddress",
      render: (text, record) => {
        return (
          <Space>
            <p className="!text-xs">{record?.businessAddress}</p>
          </Space>
        );
      },
    },
    {
      title: "Status",
      key: "status",
      render: (text, record) => {
        return (
          <Space>
            {record?.isApproved === "Approved" && (
              <Button
                style={{ borderColor: "#40FF40", color: "#008000" }}
                className="font-semibold bg-green-50"
              >
                {record?.isApproved}
              </Button>
            )}
          </Space>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <Space>
            {record?.isApproved === "Approved" && (
              <Select
                options={actionOpitions}
                placeholder="Select Action"
                onChange={(value) => {
                  handleActionChange(value, record);
                }}
              />
            )}
          </Space>
        );
      },
    },
    {
      title: "Details",
      key: "details",
      render: (text, record) => {
        return (
          <Space>
            <Button
              style={{
                borderColor: "#002f76",
                backgroundColor: "#002f76",
                color: "white",
              }}
              className="px-2"
              onClick={() => showModal(record)}
            >
              <FaRegEye className="text-[16px]" />
            </Button>
          </Space>
        );
      },
    },
  ];
  let tableData = [];
  if (!adminGetAllPartnersDataFetching) {
    tableData = [...adminGetAllPartnersData?.data].reverse();
  }

  const rowClassName = (record: TDataType, index: number) => {
    return "table-custom-row";
  };

  const showModal = (item: any) => {
    setModalData(item); // Store the item whose details should be shown in the modal
  };

  const handleOk = () => {
    setModalData(null); // Close the modal
  };

  const handleCancel = () => {
    setModalData(null); // Close the modal
  };

  return (
    <div>
      <Button
        onClick={() => adminGetAllPartnersDataRefetch()}
        className="absolute z-10 right-6 mt-[-37px] md:mt-[-45px]"
      >
        <LuRefreshCw />
      </Button>
      <Card className="overflow-x-scroll lg:overflow-hidden">
        <Table<TDataType>
          className="!z-0"
          columns={columns}
          loading={
            adminGetAllPartnersDataFetching || decisionMakePartnerLoading
          }
          dataSource={tableData}
          rowClassName={rowClassName}
          pagination={false}
        />
        <Row justify="center" className="my-5">
          <Pagination
            pageSize={adminGetAllPartnersData?.meta?.limit}
            total={adminGetAllPartnersData?.meta?.total}
            onChange={(value) => setPage(value)}
          />
        </Row>
      </Card>
      <AdminPartnerRequestDetailsModal
        modalData={modalData}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default AdminAllApprovedPartners;
