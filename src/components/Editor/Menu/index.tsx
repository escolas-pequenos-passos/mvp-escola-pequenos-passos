import { Editor } from "@tiptap/react";
import {
  FaBold,
  FaItalic,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaStrikethrough,
  FaUnderline,
} from "react-icons/fa";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import { GoHorizontalRule } from "react-icons/go";

interface Props {
  editor: Editor;
}

export function Menu({ editor }: Props) {
  return (
    <div className="flex items-center">
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className="p-2 text-white bg-zinc-900 hover:bg-zinc-800 transition-colors data-[active=true]:text-light-green"
        data-active={editor.isActive("heading", { level: 1 })}
      >
        <LuHeading1 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className="p-2 text-white bg-zinc-900 hover:bg-zinc-800 transition-colors data-[active=true]:text-light-green"
        data-active={editor.isActive("heading", { level: 2 })}
      >
        <LuHeading2 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className="p-2 text-white bg-zinc-900 hover:bg-zinc-800 transition-colors data-[active=true]:text-light-green"
        data-active={editor.isActive("heading", { level: 3 })}
      >
        <LuHeading3 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className="p-2 text-white bg-zinc-900 hover:bg-zinc-800 transition-colors data-[active=true]:text-light-green"
        data-active={editor.isActive("underline")}
      >
        <FaUnderline />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="p-2 text-white bg-zinc-900 hover:bg-zinc-800 transition-colors data-[active=true]:text-light-green"
        data-active={editor.isActive("bold")}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className="p-2 text-white bg-zinc-900 hover:bg-zinc-800 transition-colors data-[active=true]:text-light-green"
        data-active={editor.isActive("italic")}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className="p-2 text-white bg-zinc-900 hover:bg-zinc-800 transition-colors data-[active=true]:text-light-green"
        data-active={editor.isActive("strike")}
      >
        <FaStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className="p-2 text-white bg-zinc-900 hover:bg-zinc-800 transition-colors data-[active=true]:text-light-green"
        data-active={editor.isActive("bulletList")}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className="p-2 text-white bg-zinc-900 hover:bg-zinc-800 transition-colors data-[active=true]:text-light-green"
        data-active={editor.isActive("orderedList")}
      >
        <FaListOl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className="p-2 text-white bg-zinc-900 hover:bg-zinc-800 transition-colors data-[active=true]:text-light-green"
        data-active={editor.isActive("blockquote")}
      >
        <FaQuoteLeft />
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="p-2 text-white bg-zinc-900 hover:bg-zinc-800 transition-colors data-[active=true]:text-light-green"
      >
        <GoHorizontalRule />
      </button>
    </div>
  );
}
