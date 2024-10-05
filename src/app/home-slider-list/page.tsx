

'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "react-js-pagination";


interface List {
    _id: string;
    heading: String,
    slider_img: string;
}

const ItemList = () => {
    const [dataList, setDataList] = useState<List[]>([]);
    const [searchItem, setSearchItem] = useState("");
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 3; // Items per page

    useEffect(() => {
        getDataList();
    }, []);

    const getDataList = async () => {
        try {
            const response = await axios.get('/api/home-slider');

            if (response.data) {

                setDataList(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Failed to fetch data.");
        }
    }


    const handleDelete = async (id: string) => {
        try {
            const response = await axios.delete(`api/home-slider/${id}`);
            if (response.status === 200 && response.data.success) {
                getDataList();
                toast.success(response.data.message || "Item deleted successfully");
            }
        } catch (error: any) {

            console.error("Error deleting item:", error);

            // Ensure that error.response exists before trying to access error details
            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Failed to delete item.");
            }


        }
    }

    // Pagination Logic
    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const filteredDataList = dataList.filter(item =>
        searchItem.toLowerCase() === "" ? item : item.heading.toLowerCase().includes(searchItem)
    );
    const currentItems = filteredDataList.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber);
    };

    return (
        <>

            <ToastContainer />
            <div className="container">
                <div className="row row-cols-1 g-3 g-md-5">

                    <div className="col">
                        <div className="bg-white px-4 py-5 rounded-3">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                                <h5 className="sec-title position-relative mb-0">
                                    <Link href={'/add-home-slider'} className="btn btn-sm btn-primary" style={{ float: 'right' }}> + Add Home Slider </Link><br />
                                </h5>
                                <div className="w-50">
                                    <div className="search-box d-flex align-items-center border rounded overflow-hidden ms-3">
                                        <div className="h-100 ps-3">
                                            <i className="fa-solid fa-search"></i>
                                        </div>
                                        <form className="flex-grow-1" action="#">
                                            <input
                                                className="form-control shadow-none border-0 bg-transparent"
                                                type="text"
                                                value={searchItem}
                                                onChange={(e) => setSearchItem(e.target.value)}
                                                placeholder="Search..."
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-0 overflow-auto">
                            <table className="table bg-white rounded-3 shadow-sm">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Image</th>
                                        <th>Heading</th>

                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((item, i) => (

                                        <tr key={item._id}>
                                            {/* {item.company_img} */}
                                            <td>{indexOfFirstItem + i + 1}</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <Image
                                                        className="rounded me-2"
                                                        src={!item.slider_img ? '/images/placeholder.png' : `/images/${item.slider_img}`}

                                                        alt=""
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>
                                            </td>
                                            <td>{item.heading}</td>

                                            <td>
                                                <div>
                                                    <Link href={`/edit-home-slider/${item._id}`}>
                                                        <i className="fa-solid fa-pencil text-color-1" style={{ cursor: 'pointer' }}></i>
                                                    </Link>
                                                    &nbsp;&nbsp;    &nbsp;&nbsp;
                                                    {/* <i className="fa-solid fa-trash text-danger" style={{ cursor: 'pointer' }} onClick={() => handleDelete(item._id)}></i> */}
                                                    <i
                                                        className="fa-solid fa-trash text-danger"
                                                        style={{ cursor: 'pointer' }}
                                                        onClick={() => {
                                                            const confirmDelete = window.confirm("Are you sure you want to delete this item?");
                                                            if (confirmDelete) {
                                                                handleDelete(item._id);
                                                            }
                                                        }}
                                                    ></i>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="container d-flex align-items-center justify-content-center">



                                <Pagination
                                    activePage={activePage}
                                    itemsCountPerPage={itemsPerPage}
                                    totalItemsCount={filteredDataList.length}
                                    pageRangeDisplayed={5}
                                    onChange={handlePageChange}
                                    innerClass="pagination"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
}

export default ItemList;
