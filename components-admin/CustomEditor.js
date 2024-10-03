// import React from 'react'
// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import { data } from 'jquery'

// const CustomEditor = (props) => {
//   return (
//     <CKEditor
//     editor={ ClassicEditor }
//     onReady={ editor => {
//         // You can store the "editor" and use when it is needed.
//         console.log( 'Editor is ready to use!', editor );

//     } }

//     data={ props.initialData }

//     onChange={ ( event,editor ) => {
//       //setBannerName(editor.getData())
//       if(props.data == 'banner_name'){
//       //console.log(editor.getData())
//       localStorage.setItem('banner_name',editor.getData())
//       }else if(props.data == 'banner_desc'){
//         localStorage.setItem('desc',editor.getData())
//       }
//     } }
//     onBlur={ ( event, editor ) => {
//         //console.log( 'Blur.', editor );
//     } }
//     onFocus={ ( event, editor ) => {
//        // console.log( 'Focus.', editor );
//     } }
// />
//   )
// }

// export default CustomEditor


import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
// import { data } from 'jquery'

const CustomEditor = (props) => {

  const [pageDesc, setPageDesc] = useState("");

  const handleChange = (e, editor) => {
    setPageDesc(editor.getData());

  }


  console.log('descriptio is =>', pageDesc)

  return (
    //     <CKEditor
    //     editor={ ClassicEditor }

    //     onChange={(e,editor) => handleChange(e,editor)}
    // />
    <CKEditor
      editor={ClassicEditor}
      onChange={(e, editor) => handleChange(e, editor)}
    />
  )
}

export default CustomEditor

