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

    const [result, setResult] = useState([])



    useEffect(() => {

        getData()

        //   console.log('response ============>',response)
    }, [])


    const getData = async () => {
        const response = await axios.get('/admin/api/upload');

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
                                {result && result.map((res, i) => (
                                    <tr key={i}>
                                        <th scope="row"> {i + 1}</th>
                                        <td> {res.cat_name} </td>
                                        {/* <td> {res.cat_name} </td> */}
                                        <td>
                                            <Image src={`/images/${res.cat_image}`} width={50} height={50} alt='Category picture' />
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


