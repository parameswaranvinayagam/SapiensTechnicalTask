import React, { useState, useEffect } from "react";
import { Card, Table, Button } from "antd";
import Flex from "components/shared-components/Flex";
import utils from "utils";
import "assets/less/styles/vendors/customStyles.scss";
import AntCustomModal from "./antCustomModal";
import { useHistory } from "react-router-dom";
import { VENDORS_ARCHIVE_POPUP } from "../../constants/vendors";
import Axios from "axios";

const VendorsList = () => {
  const [list, setList] = useState();
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [openModal, setopenModal] = useState([]);
  const [vendorName, setVendorName] = useState([]);
  const [loading, setLoading] = useState({ loading: true });
  let history = useHistory();

  const handleCloseModal = () => {
    setopenModal(false);
    setVendorName("");
  };

  const getAllVendors = async () => {
    Axios.get("http://localhost:8001/getUsers").then((response) => {
      setList(response.data);
    });

    setLoading({ loading: false });
  };

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getAllVendors();
  }, []);

  const tableColumns = [
    {
      title: "First Name",
      dataIndex: "name",
      sorter: (a, b) => utils.antdTableSorter(a, b, "name"),
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      render: (_, record) => (
        <div className="d-flex tableRowFieldData">{record.lastname}</div>
      ),
      sorter: (a, b) => utils.antdTableSorter(a, b, "lastname"),
    },
    {
      title: "E-mail",
      dataIndex: "email",
      render: (_, record) => (
        <div className="d-flex tableRowFieldData">{record.email}</div>
      ),
      sorter: (a, b) => utils.antdTableSorter(a, b, "email"),
    },
  ];

  const rowSelection = {
    onChange: (key, rows) => {
      setSelectedRows(rows);
      setSelectedRowKeys(key);
    },
  };

  const addVendors = () => {
    history.push(`/app/vendors/addVendors`);
  };

  return (
    <Card className="tableCard">
      <Flex alignItems="center" justifyContent="between" mobileFlex={false}>
        <Flex className="mb-1" mobileFlex={false} className="tableHeadButtons">
          <div className="mr-md-3 mb-3"></div>
          <div>
            <Button
              type="primary"
              block
              onClick={addVendors}
              className="tableCreateNewVendorButton buttonWidthHeight"
              id="createVendorBtn"
            >
              Create a User
            </Button>
          </div>
        </Flex>
      </Flex>
      <div className="table-responsive">
        <Table
          columns={tableColumns}
          dataSource={list}
          rowKey="id"
          rowSelection={{
            selectedRowKeys: selectedRowKeys,
            type: "checkbox",
            preserveSelectedRowKeys: false,
            ...rowSelection,
          }}
          className="tableCSS"
          {...loading}
        />
      </div>
      <AntCustomModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        // content={[`Are you sure you want to archive`,<strong>{vendorName}</strong><br />,` (Unused QR Codes can be used for other Vendors)`]}
        title="Create a User"
        content={[
          VENDORS_ARCHIVE_POPUP.CONTENT_1,
          <>
            <strong>{vendorName} ?</strong>
            <br />
          </>,
          VENDORS_ARCHIVE_POPUP.CONTENT_2,
        ]}
      />
    </Card>
  );
};

export default VendorsList;
