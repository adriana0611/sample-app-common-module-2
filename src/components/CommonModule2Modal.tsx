import { useCallback, useState } from "react";
import { Modal, message, Button } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import { useSampleAppContext } from "sample-app-shared/dist/esm/contexts/sample-app";

import { CommonModulePeople } from "./CommonModulePeople";

// -----------------------------------------------------------------

export type CommonModule2ModalProps = {
  open?: boolean;
  onCancel?: () => void;
};

export const CommonModule2Modal = ({
  open,
  onCancel = () => {},
}: CommonModule2ModalProps) => {
  const { name, updateAppContext } = useSampleAppContext();

  const [value, setValue] = useState(name);

  const saveValue = useCallback(() => {
    updateAppContext({ name: value });

    message.success("Saved value!");

    onCancel();
  }, [value, onCancel]);

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      title={"Common Module 2 - Select Guest"}
      footer={
        <Button onClick={() => saveValue()}>
          <SaveOutlined />
        </Button>
      }
    >
      <CommonModulePeople setValue={setValue} />
    </Modal>
  );
};
