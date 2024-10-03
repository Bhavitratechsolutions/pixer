

'use client'
import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loader from '@/component/Loader';


interface list {
    _id: string,
    heading: string;
    description: string;
}
const Page = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [heading, setHeading] = useState("")
    const [description, setDescription] = useState("")
    const [dataList, setDataList] = useState<list[]>([])
    const [loading, setLoading] = useState(true)
    const [searchItem, setSearchItem] = useState("")
    const [isEdit, setIsEdit] = useState(false);
    const [editItemId, setEditItemId] = useState("");






    useEffect(() => {
        getFlashList()
    }, [editItemId])




    const getFlashList = async () => {
        let response = await axios.get('api/flash');
        setDataList(response.data)
        setLoading(false)
        console.log(response.data)
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        let formData = {
            heading,
            description
        }

        if (isEdit) {


            let response = await axios.put(`api/flash/${editItemId}`, formData);

            if (response.data.success) {
                setHeading("");
                setDescription("")
                setEditItemId("")
                getFlashList()
                handleClose()

                throw toast.success("Record Updated Successfully ");
            }


        } else {


            try {
                let response = await axios.post('api/flash', formData);
                // console.log(response)
                if (response.data.success) {
                    getFlashList()
                    handleClose()
                    setHeading("");
                    setDescription("")
                    throw toast.success("Record Added Successfully ");

                } else {
                    throw toast.error("something went wrong ");
                }
            } catch (error) {

            }
        }



    }


    const handleEdit = async (item: any, id: string) => {
        setShow(true)
        // let editItem = dataList.filter((item) => item._id === id);
        // console.log(editItem)
        if (item) {
            setIsEdit(true);
            setHeading(item.heading);
            setDescription(item.description)
            setEditItemId(item._id)
        }
        // console.log(item)
    }


    const handleDelete = async (id: String) => {
        let response = await axios.delete(`api/flash/${id}`)
        if (response.data.success) {
            getFlashList()
            throw toast.success("Record Deleted Successfully ");

        }
    }

    return (
        <>

            <ToastContainer />



            <div className="container">

                {loading ? (
                    <Loader />
                ) : (
                    <div className="row row-cols-1 g-3 g-md-5">

                        <div className="col">
                            <div className="bg-white px-4 py-5 rounded-3">

                                <div className="d-flex justify-content-between align-items-center mb-5">
                                    <h5 className="sec-title position-relative mb-0"> <button className="btn btn-sm btn-primary" style={{ float: 'right' }}
                                        onClick={handleShow}> + Add Flash</button><br /> </h5>
                                    <div className="w-50">

                                        <div className="search-box d-flex align-items-center border rounded overflow-hidden ms-3">
                                            <div className="h-100 ps-3">
                                                <i className="fa-solid fa-search"></i>
                                            </div>
                                            <form className="flex-grow-1" action="#">
                                                <input
                                                    className="form-control shadow-none border-0 bg-transparent"
                                                    type="text"
                                                    placeholder="Search..."
                                                    value={searchItem}
                                                    onChange={(e) => setSearchItem(e.target.value)}
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">




                            <div className="p-0 overflow-auto">
                                <div>
                                    <table className="table bg-white rounded-3 shadow-sm">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Headig</th>
                                                <th>Description</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataList && dataList
                                                .filter((item) => {
                                                    return searchItem.toLocaleLowerCase() === "" ? item : item.heading.toLowerCase().includes(searchItem)
                                                })
                                                .map((item, i) => (
                                                    <tr key={i}>
                                                        <td>{i + 1}</td>
                                                        <td>{item.heading}</td>
                                                        <td>{item.description}</td>
                                                        <td>
                                                            <div>
                                                                <i className="fa-solid fa-pencil text-color-1" onClick={(e) => handleEdit(item, item._id)} style={{ cursor: 'pointer' }}></i>&nbsp;&nbsp;
                                                               &nbsp;&nbsp;
                                                                <i className="fa-solid fa-trash text-danger" style={{ cursor: 'pointer' }} onClick={(e) => handleDelete(item._id)}></i>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}


                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                )}
            </div>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Flash </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label >Flash Heading</label>
                            <input type="text" className="form-control" placeholder="Enter Heading" onChange={(e) => setHeading(e.target.value)} value={heading} />
                        </div>
                        <br />
                        <div className="form-group">
                            <label >Flash Description</label>
                            <textarea className="form-control" rows={5} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <br />

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </Modal.Body>

            </Modal>



        </>


    )
}

export default Page;


