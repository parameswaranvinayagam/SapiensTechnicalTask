import React from "react";
import { Input, Row, Col, Card, Form, Upload, message, Select } from "antd";
import AddressField from "../../common/AddressField";
import {
  VENDORS,
  VENDORS_VALIDATION,
  VENDORS_PALACEHOLDER,
} from "../../constants/vendors";

const { Option } = Select;

const rules = {
  name: [
    {
      required: true,
      message: "Please enter first name",
    },
  ],

  lastName: [
    {
      required: true,
      message: "Please enter last name",
    },
  ],
  email: [
    {
      required: true,
      message: "Please enter valid e-mail",
    },
  ],
};

const GeneralField = (props) => (
  <Row gutter={16}>
    <Col xs={24} sm={24} md={17}>
      <Card title={VENDORS.VENDORS_GENERAL} bordered={false}>
        <Form.Item name="name" label="First Name" rules={rules.name}>
          <Input placeholder={VENDORS_PALACEHOLDER.INPUT} />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name" rules={rules.lastName}>
          <Input placeholder={VENDORS_PALACEHOLDER.INPUT} />
        </Form.Item>
        <Form.Item name="email" label="E-mail" rules={rules.email}>
          <Input placeholder={VENDORS_PALACEHOLDER.INPUT} />
        </Form.Item>
      </Card>
    </Col>
  </Row>
);

export default GeneralField;
