import { useEditor, EditorContent } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";

import { Menu } from "./Menu";

interface Props {}

const Editor = ({}: Props) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: `
      <h1>This is a 1st level heading</h1>
      <h2>This is a 2nd level heading</h2>
      <h3>This is a 3rd level heading</h3>
      <h4>This 4th level heading will be converted to a paragraph, because levels are configured to be only 1, 2 or 3.</h4
    `,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="space-y-3">
      <Menu editor={editor} />
      <EditorContent
        editor={editor}
        className="max-w-full bg-white rounded p-2 prose-sm"
      />
    </div>
  );
};

export default Editor;
