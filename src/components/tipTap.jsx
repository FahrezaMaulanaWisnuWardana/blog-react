import '../style.scss'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

  return (
    <>
      <button type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        bold
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        italic
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        strike
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        code
      </button>
      <button type="button" onClick={() => editor.chain().focus().unsetAllMarks().run()} className='p-1 rounded-md border-2 border-slate-900 mr-1'>
        clear marks
      </button>
      <button type="button" onClick={() => editor.chain().focus().clearNodes().run()} className='p-1 rounded-md border-2 border-slate-900 mr-1'>
        clear nodes
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        paragraph
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        h1
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        h2
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        h3
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        h4
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        h5
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        h6
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        bullet list
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        ordered list
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        code block
      </button>
      <button type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'bg-zinc-900 text-white p-1 rounded-md border-2 border-slate-900 mr-1' : 'p-1 rounded-md border-2 border-slate-900 mr-1'}
      >
        blockquote
      </button>
      <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()} className='p-1 rounded-md border-2 border-slate-900 mr-1'>
        horizontal rule
      </button>
      <button type="button" onClick={() => editor.chain().focus().setHardBreak().run()} className='p-1 rounded-md border-2 border-slate-900 mr-1'>
        hard break
      </button>
      <button type="button" onClick={() => editor.chain().focus().undo().run()} className='p-1 rounded-md border-2 border-slate-900 mr-1'>
        undo
      </button>
      <button type="button" onClick={() => editor.chain().focus().redo().run()} className='p-1 rounded-md border-2 border-slate-900 mr-1'>
        redo
      </button>
    </>
  )
}
export default MenuBar