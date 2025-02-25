import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  return <ReactQuill theme="snow" value={value} onChange={onChange} />;
};

export default RichTextEditor;
