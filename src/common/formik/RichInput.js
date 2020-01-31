import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const RichInput = ({ field, label, onChange }) => {
  const config = {
    toolbar: [
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "|",
      "outdent",
      "indent",
      "|",
      "bulletedList",
      "numberedList",
      "|",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "|",
      "undo",
      "redo"
    ]
  };
  return (
    <div className="form-group">
      <label>{label}</label>
      <CKEditor
        editor={ClassicEditor}
        config={config}
        data={field.value}
        onChange={(event, editor) => onChange(editor.getData())}
      />
    </div>
  );
};

export default RichInput;
