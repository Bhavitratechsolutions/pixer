


// 'use client'
// import Link from "next/link";
// import React, { useState } from "react";



// const AddProduct = () => {

//     const [prevImg, setPrevImg] = useState<string | null>(null);
//     const [description, setDescription] = useState<string>('');

//     const [image, setImage] = useState("")

//     const [file, setFile] = useState<File | null>(null);

//     const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         const selectedFile = event.target.files?.[0];
//         if (selectedFile) {
//             setFile(selectedFile)
//             const reader = new FileReader();
//             reader.onloadend = () => {
//                 setPrevImg(reader.result as string);
//             };
//             reader.readAsDataURL(selectedFile);
//         }
//     };

//     const handleRemoveImage = () => {
//         setPrevImg(null);
//         setFile(null); // Optional: clear the file state if needed
//     };

//     const handleChangeDesc = (event: any, editor: any) => {
//         const data = editor.getData();
//         setDescription(data); // Update the state with the new content
//         console.log("Editor data: ", data); // Optional: log the content
//     };



//     console.log('file is ===============>', file)




//     return (
//         <>



//             <div className="container">
//                 <h5 className="mb-4">Add Banner </h5>
//                 <form action="#" method="post">
//                     <div className="row row-cols-1">





//                         <div className="col">
//                             <div className="py-4 border-top" >
//                                 <div className="row align-items-center">
//                                     <div className="col-md-4">
//                                         <div>
//                                             <h6>Featured Image</h6>
//                                             <p className="text-secondary">Upload your product featured image here <br /> Image size should not be more than 2 MB</p>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-8">
//                                         <div className="card border-0 p-3 shadow-sm">
//                                             <div className="card-body">
//                                                 <div className="file-uploader">
//                                                     <label className="w-100">
//                                                         <div className="border border-2 text-center p-3" style={{
//                                                             '--bs-border-style': 'dashed',
//                                                             cursor: 'pointer'
//                                                         } as React.CSSProperties}>
//                                                             <svg className="text-body-tertiary m-3" xmlns="http://www.w3.org/2000/svg" width="41px" height="30px" viewBox="0 0 40.909 30"><g transform="translate(0 -73.091)"><path data-name="Path 2125" d="M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z" transform="translate(0)" fill="currentColor"></path></g></svg>
//                                                             <p style={{ fontSize: '14px' }}><span className="text-color-1 fw-medium">Upload an image</span> or drag and drop <br /> PNG, JPG</p>
//                                                             <input className="form-control" type="file" name="" id="img" hidden onChange={handleImageChange} /> <label htmlFor="img" style={{ cursor: 'pointer' }}>
//                                                                 Upload Image
//                                                             </label>





//                                                         </div>
//                                                     </label>
//                                                     <div className="mt-3 file-previews">
//                                                         <img className="rounded" src="" height="70px" width="70px" alt="" id="prevImg" />
//                                                     </div>

//                                                     {prevImg && (
//                                                         <>
//                                                             <img
//                                                                 src={prevImg}
//                                                                 alt="Preview"
//                                                                 style={{ width: '100px', height: '100px' }} // Adjust as needed
//                                                             />
//                                                             {/* <button type="button" onClick={handleRemoveImage} className="btn btn-info btn-sm mt-2">Remove Image</button> */}
//                                                             <button type="button" onClick={handleRemoveImage} className="btn btn-outline-primary" style={{ padding: '.25rem .5rem', fontSize: '.75rem' }}> Remove </button>
//                                                         </>


//                                                     )}

//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col">
//                             <div className="py-4 border-top" >
//                                 <div className="row align-items-center">
//                                     <div className="col-md-4">
//                                         <div>
//                                             <h6>Description</h6>
//                                             <p className="text-secondary">Edit your product description and necessary information from here</p>
//                                         </div>
//                                     </div>
//                                     <div className="col-md-8">
//                                         <div className="card border-0 p-3 shadow-sm">
//                                             <div className="card-body">
//                                                 <div className="row mb-3">
//                                                     <div className="col-12">
//                                                         <label className="form-label fw-medium">Heading *</label>
//                                                         <input className="form-control" type="text" name="" placeholder="Name" />
//                                                     </div>
//                                                 </div>


//                                                 <div className="row mb-3">
//                                                     <div className="col-12">
//                                                         <label className="form-label fw-medium">Description</label>

//                                                         <div>
//                                                         {/* <CKEditor data='banner_name'/> */}
//                                                             <textarea className="form-control" rows={5} id="comment" name="text"></textarea>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>


//                         <div className="col sticky-bottom">
//                             <div className="mt-4 bg-gray-1 py-3 border-top border-primary" >
//                                 <div className="row">
//                                     <div className="col-auto">
//                                         <div>
//                                             <a className="btn btn-outline-primary btn-lg fw-semibold" href="#">Back</a>
//                                         </div>
//                                     </div>
//                                     <div className="col-auto ms-auto">
//                                         <div>
//                                             <button className="btn btn-primary btn-lg fw-semibold" type="submit">Submit</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </form>
//             </div>






//         </>
//     )
// }


// export default AddProduct;



// 'use client'


// import { useState } from 'react';

// // import ImageFile from '../api/upload'


// export default function Home() {
//     const [file, setFile] = useState(null);
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [message, setMessage] = useState(''); // For success or error messages

//     const fileHandler = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const removeImage = () => {
//         setFile(null);
//     };




//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = {
//             title,
//             description
//         }

//         console.log('formData is =====>',formData)

//         try {

//             const res = await fetch('/admin/api/upload', {
//               method: 'POST',
//               body: formData
//             })
//             // handle the error
//             if (!res.ok) {
//               throw new Error(await res.text())
//             } else {
//               handleClose()
//               location.reload()

//             }

//           } catch (error) {

//           }






//         // const formData = new FormData();
//         // formData.append('file', file);
//         // formData.append('title', title);
//         // formData.append('title', description);

//         try {
//             const res = await fetch('ign-up', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (res.ok) {
//                 setMessage('File uploaded successfully!');
//             } else {
//                 setMessage('Failed to upload file.');
//             }
//         } catch (err) {
//             console.error(err);
//             setMessage('Error occurred during upload.');
//         }
//     };





//     // const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
//     //     setIsSubmitting(true);
//     //     try {
//     //       const response = await axios.post<ApiResponse>('/api/sign-up', data);

//     //       toast({
//     //         title: 'Success',
//     //         description: response.data.message,
//     //       });

//     //       router.replace(`/verify/${username}`);

//     //       setIsSubmitting(false);
//     //     } catch (error) {
//     //       console.error('Error during sign-up:', error);

//     //       const axiosError = error as AxiosError<ApiResponse>;

//     //       // Default error message
//     //       let errorMessage = axiosError.response?.data.message;
//     //       ('There was a problem with your sign-up. Please try again.');

//     //       toast({
//     //         title: 'Sign Up Failed',
//     //         description: errorMessage,
//     //         variant: 'destructive',
//     //       });

//     //       setIsSubmitting(false);
//     //     }
//     //   };


//     return (
//         <>
//             <div className="mt-4 p-5 bg-primary text-white rounded">
//                 <div className="container bg-primary text-white rounded mt-5">
//                     <div className="row">
//                         <div className="col-sm-2"></div>
//                         <div className="col-sm-8">
//                             <div>
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="form-group">
//                                         <label htmlFor="titleInput">Title</label>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             name="title"
//                                             onChange={(e) => setTitle(e.target.value)}
//                                             value={title}
//                                             required
//                                         />
//                                     </div>
//                                     <br />
//                                     {/* <div className="form-group">
//                                         <label htmlFor="imageInput">Image</label>
//                                         <div>
//                                             {file && (
//                                                 <div>
//                                                     <img
//                                                         src={URL.createObjectURL(file)}
//                                                         alt={file.name}
//                                                         style={{ width: '150px', height: 'auto', marginBottom: '10px' }}
//                                                     />
//                                                     <button
//                                                         type="button"
//                                                         className="btn btn-danger btn-sm"
//                                                         onClick={removeImage}
//                                                     >
//                                                         Remove Image
//                                                     </button>
//                                                 </div>
//                                             )}

//                                             <br />
//                                             <input type="file" onChange={fileHandler} required />
//                                         </div>
//                                     </div> */}
//                                     <br />
//                                     <div className="form-group">
//                                         <label htmlFor="descriptionTextarea">Description</label>
//                                         <textarea
//                                             className="form-control"
//                                             onChange={(e) => setDescription(e.target.value)}
//                                             name="description"
//                                             rows="3"
//                                             value={description}
//                                             required
//                                         ></textarea>
//                                     </div>
//                                     <br />
//                                     <div className="form-group">
//                                         <button type="submit" className="btn btn-info">
//                                             Submit
//                                         </button>
//                                     </div>
//                                 </form>
//                                 {message && <p>{message}</p>}
//                             </div>
//                         </div>
//                         <div className="col-sm-2"></div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }



'use client'
import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import axios from 'axios';

const Page = () => {

    //const router = useRouter()
    //const cookie = getCookie('cookieuser')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const [file, setFile] = useState("")

    const [result,setResult] = useState([])



    useEffect(() =>{

        getData()
           
        //   console.log('response ============>',response)
    },[])


    const getData = async() =>{
        const response =  await  axios.get('/admin/api/upload');
       
         setResult(response.data.products)
        //  console.log(result)
    }

    result && console.log(result)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!file) return

        try {
            const data = new FormData()
            data.set('file', file)
            data.set('category', category)
            data.set("slug", category.replace(/\s+/g, '-').toLowerCase())

            // console.log('data',file)
            // return

            //   const res = await fetch('/admin/api/categoryupload', {
            const res = await fetch('/admin/api/upload', {

                method: 'POST',
                body: data
            })

            // handle the error
            if (!res.ok) {
                throw new Error(await res.text())
            } else {
                handleClose()
                location.reload()

            }

        } catch (error) {
            // Handle errors here
            //console.error(error)
        }

    }

    const categoryChangeImage = (e) => {
        setFile(e.target.files?.[0])
        var reader = new FileReader();
        reader.onload = function () {

            setImage(reader.result)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <>



            <div class="jumbotron jumbotron-fluid mt-5">
                <div class="container">

                    <div className="content-wrapper">
                        <div className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        {/* <h1 className="m-0">Categories</h1> */}
                                    </div>

                                </div>
                            </div>
                        </div>

                        <section className="content">
                            <div className="container-fluid">
                                <button class="btn btn-sm btn-primary" style={{ float: 'right' }}
                                    onClick={handleShow}>+Add Category</button><br />




                            </div>

                        </section>
                    </div>

                    <h1 class="display-4">Fluid jumbotron</h1>
                    <p class="lead">
                        <table class="table table-striped">
                            <thead>
                               
                                   
                                     <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Post Title </th>
                                    {/* <th scope="col">Post Description</th> */}
                                    <th scope="col">Post Image </th>
                                </tr>
                                    
                               
                               
                            </thead>
                            <tbody>
                            {result && result.map((res,i) =>(
                                <tr key={i}>
                                    <th scope="row"> {i+1}</th>
                                    <td> {res.cat_name} </td>
                                    {/* <td> {res.cat_name} </td> */}
                                    <td>
                                    <Image  src={`/images/${res.cat_image}`} width={50} height={50} alt='Category picture' /> 
                                    {/* <img  src={`/category/${res.cat_image}`} width="50px"  alt='abc' /> */}
                                    {/* <Image  src={`/category/${res.cat_image}`} width="50px"  alt='abc' /> */}
                                    {/* <img src={`/category/contact-img.png`} width="50px"/> */}
                                    </td>
                                </tr>

                                 ))}
                               
                            </tbody>
                        </table>
                    </p>
                </div>
            </div>









            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form action="" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="title">Category Name</label>
                            <input type="text" class="form-control" id="title" placeholder="Enter category name" onChange={(e) => setCategory(e.target.value)} value={category} />
                        </div>
                        <div class="form-group">
                            <label for="file">Image</label>
                            <input type="file" class="form-control" id="file" onChange={(e) => categoryChangeImage(e)} />
                        </div>
                        {
                            image != '' ?
                                <div class="form-group">
                                    <img src={image} style={{ width: '100px', height: '100px', border: '1px solid grey', borderRadius: '50px' }} />
                                </div>
                                :
                                ''

                        }

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </Modal.Body>

            </Modal>



        </>


    )
}

export default Page;


