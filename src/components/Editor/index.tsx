import { useEditor, EditorContent } from "@tiptap/react";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";

import { Menu } from "./Menu";

interface Props {
  content: string;
  onUpdateContent: (content: string) => void;
  isEditable?: boolean;
}

export const Editor = ({
  content,
  onUpdateContent,
  isEditable = true,
}: Props) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onUpdateContent(html);
    },
    editorProps: {
      attributes: {
        class: "outline-none",
      },
      editable: () => {
        return isEditable;
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="space-y-3">
      <Menu editor={editor} />
      <EditorContent
        editor={editor}
        className="max-w-none overflow-y-auto h-[600px] bg-white rounded p-2 prose prose-sm prose-p:my-1 prose-zinc"
      />
    </div>
  );
};
