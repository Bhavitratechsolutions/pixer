


// 'use client'


// import React, { useState, useEffect } from 'react';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import axios from 'axios';

// interface InfoList {
//     id: string;
//     infoKey: string;
//     infoValue: string;
// }

// const WebInfoList = () => {
//     // const [dataList, setDataList] = useState([]);
//     const [dataList, setDataList] = useState<InfoList[]>([]);
//     const [loading, setLoading] = useState(true);


//     useEffect(() => {
//         getDataList();
//     }, []);



//     const getDataList = async () => {
//         let response = await axios.get("api/web-info");
//         setDataList(response.data);
//         setLoading(false);
//     };

//     // console.log('dataList =>', dataList)

//     // useEffect(() => {
//     //     dataList.getProductsMini().then(data => setDataList(data));
//     // }, []);

//     return (
//         <>


//             <div className="card">
//                 <DataTable value={dataList} paginator rows={5} rowsPerPageOptions={[2,4, 6, 8]} showGridlines tableStyle={{ minWidth: '50rem' }}>
//                     <Column field="_id"   header="Id"></Column>
//                     <Column field="infoKey" header="infoKey"></Column>
//                     <Column field="infoValue" header="infoValue"></Column>
//                     {/* <Column field="category" header="Category"></Column>
//                     <Column field="quantity" header="Quantity"></Column> */}
//                 </DataTable>
//             </div>
//         </>
//     );
// };

// export default WebInfoList;





'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from 'next/image';
import ReactHtmlParser from 'react-html-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "react-js-pagination";


interface List {
    _id: string;
    infoKey: String,
    infoValue: String,

}

const ItemtList = () => {
    const [dataList, setDataList] = useState<List[]>([]);
    const [searchItem, setSearchItem] = useState("");
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 10; // Items per page

    useEffect(() => {
        getDataList();
    }, []);

    const getDataList = async () => {
        try {
            const response = await axios.get('/api/web-info');
            if (response.data) {
                console.log('responsedata', response.data)
                setDataList(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            toast.error("Failed to fetch data.");
        }
    }


    const handleDelete = async (id: string) => {
        try {
            const response = await axios.delete(`api/web-info/${id}`);
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
        searchItem.toLowerCase() === "" ? item : item.infoValue.toLowerCase().includes(searchItem)
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
                                    <Link href={'/add-webinfo'} className="btn btn-sm btn-primary" style={{ float: 'right' }}> + Add Web Info </Link><br />
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
                                        <th>Key </th>
                                        <th>Value </th>

                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems.map((item, i) => (

                                        <tr key={item._id}>
                                            {/* {item.testimonial_img} */}
                                            <td>{indexOfFirstItem + i + 1}</td>

                                            <td>{item.infoKey}</td>
                                            <td>{item.infoValue}</td>

                                            <td>
                                                <div>
                                                    <Link href={`/edit-webinfo/${item._id}`}>
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

export default ItemtList;
