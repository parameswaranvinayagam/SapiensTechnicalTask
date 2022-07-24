import { Modal } from "antd";
import React from "react";
import {VENDORS_ARCHIVE_POPUP} from "../../constants/vendors";


class AntCustomModal extends React.Component {
  render() {
    return (
      <>
        <Modal
          centered
          visible={this.props.openModal === true ? true : false}
          onOk={() => this.props.handleCloseModal()}
          onCancel={() => this.props.handleCloseModal()}
          footer={false}
          className="modalTag"
        >
          <div className="modalMainDiv">
            <span className="modalTitle">{this.props.title}</span>
            <div className="modalContent">{this.props.content}</div>
            <br />
            <div className="modalFooterButtonsDiv">
              <div
                className="modalCancelButton"
                onClick={() => this.props.handleCloseModal()}
              >
                {VENDORS_ARCHIVE_POPUP.CANCEL}
              </div>
              <div
                className="modalArchiveButton"
                onClick={() => this.props.handleArchiveVendors()}
              >
                {VENDORS_ARCHIVE_POPUP.ARCHIVE}              
              </div>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default AntCustomModal;
