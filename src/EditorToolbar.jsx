
function EditorToolbar(props) {

   const {editor} = props

  if (!editor) {
    return null;
  }

  return (
    <div className="editor-toolbar">
      <button
        type="button"
        onClick={() =>
          editor.chain().focus().toggleBold().run()
        }
        className={
          editor.isActive('bold')
          ? 'is-active'
          : ''
        }
      >
        B
      </button>
      <button
        type="button"
        onClick={() =>
          editor.chain().focus().toggleItalic().run()
        }
        className={
          editor.isActive('italic')
          ? 'is-active'
          : ''
        }
      >
        I
      </button>
      <button
        type="button"
        onClick={() =>
          editor.chain().focus().toggleStrike().run()
        }
        className={
          editor.isActive('strike')
          ? 'is-active'
          : ''
        }
      >
        S
      </button>
      <div className="toolbar-divider" />
      <button
        type="button"
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
        className={
          editor.isActive('heading', { level: 2 })
            ? 'is-active'
            : ''
        }
      >
        H2
      </button>
      <div className="toolbar-divider" />
      <button
        type="button"
        onClick={() =>
          editor.chain().focus().toggleOrderedList().run()
        }
        className={
          editor.isActive('orderedList')
            ? 'is-active'
            : ''
        }
      >
        1.
      </button>
      <button
        type="button"
        onClick={() =>
          editor.chain().focus().toggleBulletList().run()
        }
        className={
          editor.isActive('bulletList')
          ? 'is-active'
          : ''
        }
      >
        •
      </button>
      <button
        type="button"
        onClick={() =>
          editor.chain().focus().toggleTaskList().run()
        }
        className={
          editor.isActive('taskList')
            ? 'is-active'
            : ''
        }
      >
        ☑
      </button>
      <div className="toolbar-divider" />
      <button
        type="button"
        onClick={() =>
          editor.chain().focus().toggleBlockquote().run()
        }
        className={
          editor.isActive('blockquote')
            ? 'is-active'
            : ''
        }
      >
        "
      </button>
      <button
        type="button"
        onClick={() =>
          editor.chain().focus().toggleCodeBlock().run()
        }
        className={
          editor.isActive('codeBlock')
            ? 'is-active'
            : ''
        }
      >
        {'</>'}
      </button>
      <div className="toolbar-divider" />
      <button
        type="button"
        onClick={() =>
          editor.chain().focus().setHorizontalRule().run()
        }
      >
        —
      </button>
    </div>
  );
}

export default EditorToolbar;