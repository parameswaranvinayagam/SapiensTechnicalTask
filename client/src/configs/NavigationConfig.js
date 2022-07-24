import {
  DashboardOutlined,
  QrcodeOutlined,
  UserOutlined,
  UsergroupAddOutlined,
  AntDesignOutlined,
  SettingOutlined,
  CopyOutlined,
  FileTextOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const smartTrackNavTree = [
  {
    key: "smartTrackMenu",
    path: `${APP_PREFIX_PATH}/content/overview`,
    title: "sidenav.smartTrackmenu",
    icon: AntDesignOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "vendors",
        path: `${APP_PREFIX_PATH}/vendors/overview`,
        title: "sidenav.vendors",
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const usersNavTree = [
  {
    key: "users",
    path: `${APP_PREFIX_PATH}/users/overview`,
    title: "sidenav.users",
    icon: UserOutlined,
    breadcrumb: false,
    submenu: [],
  },
];

const settingsNavTree = [
  {
    key: "settings",
    path: `${APP_PREFIX_PATH}/settings/overview`,
    title: "sidenav.settings",
    icon: SettingOutlined,
    breadcrumb: true,
    submenu: [
      {
        key: "settings-assetTypes",
        path: `${APP_PREFIX_PATH}/settings/assettypes`,
        title: "sidenav.settings.assetTypes",
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "settings-users",
        path: `${APP_PREFIX_PATH}/settings/usermanagement`,
        title: "sidenav.settings.users",
        icon: SettingOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [
  ...smartTrackNavTree,
  // ...usersNavTree,
  // ...settingsNavTree,
];

export default navigationConfig;
