import React from "react";
import {
  SIDE_NAV_WIDTH,
  SIDE_NAV_COLLAPSED_WIDTH,
  NAV_TYPE_TOP,
} from "constants/ThemeConstant";

import { connect } from "react-redux";
import utils from "utils";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const getLogoWidthGutter = (props, isMobile) => {
  const { navCollapsed, navType } = props;
  const isNavTop = navType === NAV_TYPE_TOP ? true : false;
  if (isMobile && !props.mobileLogo) {
    return 0;
  }
  if (isNavTop) {
    return "auto";
  }
  if (navCollapsed) {
    return `${SIDE_NAV_COLLAPSED_WIDTH}px`;
  } else {
    return `${SIDE_NAV_WIDTH}px`;
  }
};

export const Logo = (props) => {
  const isMobile = !utils.getBreakPoint(useBreakpoint()).includes("lg");
  console.log("props", props);
  return (
    <div style={{ width: `${getLogoWidthGutter(props, isMobile)}` }}>
      {/* Smart Track */}
    </div>
  );
};

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, navType } = theme;
  return { navCollapsed, navType };
};

export default connect(mapStateToProps)(Logo);
