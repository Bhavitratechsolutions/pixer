// components/custom-editor.js
'use client' // only in App Router
import { useState } from 'react';

import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function CustomEditor() {
    const [pageDesc, setPageDesc] = useState("");
    
  const handleChange = (e, editor) => {
    setPageDesc(editor.getData());

  }

    return (
        <CKEditor
            editor={ ClassicEditor }
            onChange={(e, editor) => handleChange(e, editor)}
        />
    );
}

export default CustomEditor;
