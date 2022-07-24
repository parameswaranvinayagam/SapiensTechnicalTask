import React from "react";
import { Input, Row, Col, Card, Form, Upload, message, Select } from "antd";
import { VENDORS_PALACEHOLDER, VENDORS_VALIDATION } from "../constants/vendors";
import { ADDRESS_FIELD, FIELD } from "../constants/common";

const { Option } = Select;

const rules = {
  firstLine: [
    {
      required: true,
      message: VENDORS_VALIDATION.FLINE,
    },
  ],
  secondLine: [
    {
      required: true,
      message: VENDORS_VALIDATION.SLINE,
    },
  ],
  city: [
    {
      required: true,
      message: VENDORS_VALIDATION.CITY,
    },
  ],
  postCode: [
    {
      required: true,
      message: VENDORS_VALIDATION.POSTCODE,
    },
  ],
};

const AddressField = (props) => (
  <div>
    <h4>{FIELD.ADDRESS}</h4>
    <Row gutter={16}>
      <Col xs={24} sm={24} md={12}>
        <Form.Item
          name="firstLine"
          label={ADDRESS_FIELD.FIRSTLINE}
          rules={rules.firstLine}
        >
          <Input placeholder="Please Enter" />
        </Form.Item>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <Form.Item name="secondLine" label={ADDRESS_FIELD.SECONDLINE}>
          <Input placeholder={VENDORS_PALACEHOLDER.INPUT} />
        </Form.Item>
      </Col>
    </Row>
  </div>
);

export default AddressField;
