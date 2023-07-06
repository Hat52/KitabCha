import '@blocknote/core/style.css';
import { BlockNoteView, useBlockNote } from '@blocknote/react';
import * as styles from './index.css';

type WindowWithProseMirror = Window & typeof globalThis & { ProseMirror: any };

interface IWriteNewSummary {
	isEditable?: boolean;
	onChange?: (value: any) => void;
	initialContent?: any;
}

function WriteNewSummary({ initialContent, isEditable, onChange }: IWriteNewSummary) {
	// const initialContent: string | null = localStorage.getItem('editorContent');
	const editor = useBlockNote({
		onEditorContentChange: (editor) => {
			// console.log(editor.topLevelBlocks);

			localStorage.setItem('editorContent', JSON.stringify(editor.topLevelBlocks));
		},
		editable: isEditable,
		initialContent: initialContent ?? undefined,
		editorDOMAttributes: {
			className: styles.editor,
			'data-test': 'editor'
		},
		theme: 'light'
	});

	// Give tests a way to get prosemirror instance
	(window as WindowWithProseMirror).ProseMirror = editor?._tiptapEditor;

	return (
		<div className="w-screen flex justify-center bg-main pt-10">
			<BlockNoteView editor={editor} />
		</div>
	);
}

export default WriteNewSummary;
