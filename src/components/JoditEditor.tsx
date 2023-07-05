import React from "react";
import JoditEditor from "jodit-react";
import { config } from "../types/config";

interface JoditEditorProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Editor = ({ value, setValue }: JoditEditorProps) => {
  const size = window.screen.width;
  return (
    <JoditEditor
      value={value}
      onChange={(e) => setValue(e)}
      config={size > 640 ? config : { ...config, width: "75vw" }}
    />
  );
};

export default Editor;
