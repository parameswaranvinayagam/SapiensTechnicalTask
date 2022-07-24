import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { EditOutlined, LogoutOutlined } from "@ant-design/icons";
import Icon from "components/util-components/Icon";

const menuItem = [
  {
    title: "Edit Profile",
    icon: EditOutlined,
    path: "/",
  },
];

export const NavProfile = ({ userInfo, signOut }) => {
  // const [userInfo, setUserInfo] = useState("");
  const logout = () => {
    signOut();
  };
  useEffect(() => {
    // Auth.currentAuthenticatedUser().then((res) => {
    //   setUserInfo(res.username);
    // });
  }, []);
  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          <div className="pl-3">
            <h4 className="mb-0">
              {userInfo && userInfo.slice(1, userInfo.indexOf("@"))}
            </h4>
            {/* <span className="text-muted">Frontend Developer</span> */}
          </div>
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <a href={el.path}>
                  <Icon className="mr-3" type={el.icon} />
                  <span className="font-weight-normal">{el.title}</span>
                </a>
              </Menu.Item>
            );
          })}
          <Menu.Item key={menuItem.legth + 1} onClick={logout}>
            <span>
              <LogoutOutlined className="mr-3" />
              <span className="font-weight-normal">Sign Out</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item>
          <Avatar
            style={{
              backgroundColor: "#f4Ab33",
              color: "black",
              verticalAlign: "middle",
            }}
            size={45}
          >
            {userInfo && userInfo[1].toUpperCase()}
          </Avatar>
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
};

export default NavProfile;
