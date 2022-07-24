import React, { useState, useEffect } from "react";
import PageHeaderAlt from "components/layout-components/PageHeaderAlt";
import { Tabs, Form, Button, message, Card, Divider } from "antd";
import Flex from "components/shared-components/Flex";
import GeneralField from "./GeneralField";
import { useHistory } from "react-router-dom";
import { VENDORS } from "../../constants/vendors";
import { FIELD } from "../../constants/common";
import Axios from "axios";

const { TabPane } = Tabs;
const ADD = "ADD";

const VendorsForm = (props) => {
  const { mode = ADD, param } = props;
  const [form] = Form.useForm();
  const [submitLoading, setSubmitLoading] = useState(false);

  let history = useHistory();
  useEffect(() => {}, [form, mode, param, props]);

  const parseCreateData = async (data, mode) => {
    try {
      if (mode === "ADD") {
        Axios.post(
          "http://localhost:8001/createUser",
          data
        ).then((response) => {});
        if (mode === ADD) {
          message.success("Sucessfully Created");
        }
      } else {
      }
    } catch (error) {
      console.error(
        `Failed to import ${JSON.stringify(data, null, 4)}: \n${JSON.stringify(
          error,
          null,
          4
        )}`
      );
      throw error;
    }
  };

  const onFinish = () => {
    setSubmitLoading(true);
    form
      .validateFields()
      .then((values) => {
        setTimeout(() => {
          setSubmitLoading(false);
          const parseData = {
            name: values.name,
            lastname: values.lastName,
            email: values.email,
          };
          parseCreateData(parseData, mode);
        }, 1500);
      })
      .catch((info) => {
        setSubmitLoading(false);
        message.error(FIELD.REQURIED);
      });
  };

  const onCancel = () => {
    history.push("/app/vendors/overview");
  };

  return (
    <>
      <Form
        layout="vertical"
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        initialValues={{
          ["country"]: "United Kingdom",
        }}
      >
        <Card>
          <PageHeaderAlt className="border-bottom" overlap>
            <div className="container">
              <Flex
                className="py-2"
                mobileFlex={false}
                justifyContent="between"
                alignItems="center"
              >
                <h2 className="mb-3">
                 Create a User
                </h2>
              </Flex>
              <Divider style={{ margin: 0 }} />
              <Tabs
                defaultActiveKey="1"
                // style={{ marginTop: 30 }}
                tabPosition="left"
              >
                <TabPane tab={VENDORS.VENDORS_GENERAL} key="1">
                  <GeneralField />
                </TabPane>
              </Tabs>
            </div>
            <div className="container">
              <Flex
                className="py-2"
                mobileFlex={false}
                justifyContent="between"
                alignItems="center"
              >
                <h2 className="mb-3"></h2>
                <div className="mb-3">
                  <Button
                    danger
                    className="buttonWidthHeight mr-2"
                    onClick={() => onCancel()}
                  >
                    {FIELD.CANCEL}
                  </Button>
                  <Button
                    className="tableCreateNewVendorButton buttonWidthHeight"
                    onClick={() => onFinish()}
                    htmlType="submit"
                    loading={submitLoading}
                  >
                    {mode === "ADD" ? FIELD.CREATE : FIELD.SAVE}
                  </Button>
                </div>
              </Flex>
            </div>
          </PageHeaderAlt>
        </Card>
      </Form>
    </>
  );
};

export default VendorsForm;
