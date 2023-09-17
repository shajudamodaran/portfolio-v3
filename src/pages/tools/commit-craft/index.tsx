import { Button, Form, Input, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { Assets } from "../../../Assets/Icons";
import Seo from "../../../components/layouts/Seo/Seo";
import { AntUtils } from "../../../utils/ant.utils";
import { DataUtils } from "../../../utils/data.utils";

export default function Index() {
  const [types, setTypes] = useState([]);
  const [output, setOutput] = useState<string>();
  const [messageApi, contextHolder] = message.useMessage();

  const handFieldChange = (e: any, v: any) => {
    const field = e[0]?.name[0];
    const value = e[0]?.value;

    if (field === "stack") {
      const _types = DataUtils.commitCraft.stacks.find(
        (e) => e.value === value
      );
      setTypes(
        AntUtils.convertAnyDataToAnySelectInput(
          _types?.options || [],
          "label",
          "label"
        )
      );
    }
  };

  const loadStacks = () => {
    return AntUtils.convertAnyDataToAnySelectInput(
      DataUtils.commitCraft.stacks,
      "label",
      "value"
    );
  };

  const handleFormFinish = (e: any) => {
    const message = `[ ${e?.type} ] - ${e?.comment}`;
    setOutput(message);
  };

  function copyToClipboard() {
    navigator.clipboard
      .writeText(output || "")
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Text copied to clipboard",
        });
        // You can show a success message or perform other actions here.
      })
      .catch((error) => {
        messageApi.open({
          type: "error",
          content: error,
        });
        // Handle errors, e.g., show an error message to the user.
      });
  }

  return (
    <Seo>
      {contextHolder}
      <div className="commit-craft-container">
        <div className="commit-craft-header">
          <h1>Commit Craft</h1>
          <p>"Simplify Git commits with Commit Craft."</p>
        </div>
        <div className="commit-craft-body">
          <div className="card">
            <h2 className="title">Craft now</h2>
            <span className="caption">What are the changes ?</span>

            <Form onFinish={handleFormFinish} onFieldsChange={handFieldChange}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please select stack*",
                  },
                ]}
                name="stack"
              >
                <Select
                  allowClear
                  options={loadStacks()}
                  placeholder="Select stack"
                />
              </Form.Item>

              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please select type*",
                  },
                ]}
                name="type"
              >
                <Select
                  allowClear
                  options={types}
                  placeholder="Select change type"
                />
              </Form.Item>

              <Form.Item name="comment">
                <Input.TextArea rows={4} allowClear placeholder="Type here" />
              </Form.Item>

              <Button
                htmlType="submit"
                className="generate-button"
                type="primary"
              >
                Generate
              </Button>
            </Form>
          </div>
          <div className="card output-card">
            <div className="output-card-body">
              <h2 className="title">Output</h2>
              <div className="caption">
                Use the generated content as you please
              </div>

              <Input.TextArea
                rows={12}
                value={output}
                onChange={(e) => {
                  setOutput(e?.target?.value);
                }}
              />
            </div>

            <div>
              <Button
                disabled={!output}
                onClick={() => {
                  copyToClipboard();
                }}
                type="text"
                icon={<Assets.CLIPBOARD />}
              >
                {" "}
                Copy to clipboard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Seo>
  );
}
