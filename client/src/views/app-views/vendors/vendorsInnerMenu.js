import React, { Component } from "react";
import { Menu, Button, Badge } from "antd";
import {
  InboxOutlined,
  FileTextOutlined,
  MailOutlined,
  StarOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export class VendorsInnerMenu extends Component {
  render() {
    const { match, location } = this.props;
    return (
      <div className="w-100">
        <Menu
          defaultSelectedKeys={`${match.url}/create`}
          mode="inline"
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key={`${match.url}`}>
            <InboxOutlined />
            <span>Ganeral </span>
            <Link to={`${match.url}/create`} />
          </Menu.Item>
          <Menu.Item key={`${match.url}/assetTypes`}>
            <MailOutlined />
            <span>Asset types</span>
            <Link to={`${match.url}/assetTypes`} />
          </Menu.Item>
          <Menu.Item key={`${match.url}/assets`}>
            <FileTextOutlined />
            <span>Assets</span>
            <Link to={`${match.url}/assets`} />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default VendorsInnerMenu;
