'use client'
import Link from "next/link";

import React, { useEffect, useState } from "react";
import DefaultPage from "../page";
import axios from "axios";
import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser';
// import Summery from '../../components/dashboard/Summary';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



interface list {
    _id: string,
    about_image: string;
    description: string;
}

const ProductList = () => {


    const [dataList, setDataList] = useState<list[]>([]);
    const [searchItem, setSearchItem] = useState("")

    useEffect(() => {
        getDataList()
    }, []);


    const getDataList = async () => {
        let response = await axios.get('/api/about-brief');
        if (response.data) {
            setDataList(response.data)
        }
    }


    const handleEdit = async (item: any, id: string) => {
        // setShow(true)
        // let editItem = dataList.filter((item) => item._id === id);
        // console.log(editItem)

    }


    const handleDelete = async (id: String) => {
        let response = await axios.delete(`api/about-brief/${id}`)
        if (response.data.success) {
            getDataList()
            // throw toast.success({message:response.data.message});
            toast.success(response.data.message);

        }
    }

    return (
        <>
            <ToastContainer />
            <div className="container">
                <div className="row row-cols-1 g-3 g-md-5">

                    <div className="col">
                        <div className="bg-white px-4 py-5 rounded-3">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                                <h5 className="sec-title position-relative mb-0">Products</h5>
                                <div className="w-50">
                                    <div className="search-box d-flex align-items-center border rounded overflow-hidden ms-3">
                                        <div className="h-100 ps-3">
                                            <i className="fa-solid fa-search"></i>
                                        </div>
                                        <form className="flex-grow-1" action="#">
                                            <input className="form-control shadow-none border-0 bg-transparent" type="text" name="" placeholder="Search..." />
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
                                            <th>Image</th>
                                            <th>Description</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dataList && dataList
                                            .filter((item) => {
                                                return searchItem.toLocaleLowerCase() === "" ? item : item.description.toLowerCase().includes(searchItem)
                                            })
                                            .map((item, i) => (
                                                <tr key={i}>
                                                    <td>{i + 1}</td>

                                                    <td>
                                                        <div className="d-flex align-items-center">

                                                            {/* <Image className="rounded me-2" src={item.about_image ? `/images/${item.about_image}` : './images/placeholder.png'} alt="this is about grif image" height={400} width={400} /> */}
                                                            <Image className="rounded me-2" src={item.about_image ? `/images/${item.about_image}` : '/images/placeholder.png'} alt="" width={50} height={50}
                                                            />

                                                        </div>
                                                    </td>

                                                    <td>
                                                        {/* {item.description} */}
                                                        {ReactHtmlParser(item.description)}
                                                    </td>
                                                    <td>
                                                        <div>
                                                           <Link  href={`/edit-about-brief/${item._id}`}> <i className="fa-solid fa-pencil text-color-1" onClick={(e) => handleEdit(item, item._id)} style={{ cursor: 'pointer' }}></i>&nbsp;&nbsp;
                                                            &nbsp;&nbsp;
                                                            </Link>
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
            </div>

            {/* main start */}




        </>
    )
}


export default ProductList;