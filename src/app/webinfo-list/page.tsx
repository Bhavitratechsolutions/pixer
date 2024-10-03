

// 'use client'
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "@/component/Loader";

// interface DataItem {
//     infoKey: string;
//     infoValue: string;
// }

// const WebInfoList = () => {
//     const [dataList, setDataList] = useState<DataItem[]>([]);
//     const [filteredDataList, setFilteredDataList] = useState<DataItem[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [searchTerm, setSearchTerm] = useState("");

//     useEffect(() => {
//         getDataList();
//     }, []);

//     useEffect(() => {
//         // Filter the data list whenever the search term changes
//         const filteredData = dataList.filter((item) =>
//             item.infoKey.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             item.infoValue.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//         setFilteredDataList(filteredData);
//     }, [searchTerm, dataList]);

//     const getDataList = async () => {
//         let response = await axios.get("api/web-info");
//         setDataList(response.data);
//         setFilteredDataList(response.data); // Initialize with full data list
//         setLoading(false);
//     };

//     return (
//         <>
//             <div className="container">
//                 {loading ? (
//                     <Loader />
//                 ) : (
//                     <div className="row row-cols-1 g-3 g-md-5">
//                         <div className="col">
//                             <div className="bg-white px-4 py-5 rounded-3">
//                                 <div className="d-flex justify-content-between align-items-center mb-5">
//                                     <h5 className="sec-title position-relative mb-0">Web Info List </h5>
//                                     <div className="w-50">
//                                         <div className="search-box d-flex align-items-center border rounded overflow-hidden ms-3">
//                                             <div className="h-100 ps-3">
//                                                 <i className="fa-solid fa-search"></i>
//                                             </div>
//                                             <form className="flex-grow-1" action="#">
//                                                 <input
//                                                     className="form-control shadow-none border-0 bg-transparent"
//                                                     type="text"
//                                                     placeholder="Search..."
//                                                     value={searchTerm}
//                                                     onChange={(e) => setSearchTerm(e.target.value)}
//                                                 />
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col">
//                             <div className="p-0 overflow-auto">
//                                 <div>
//                                     <table className="table bg-white rounded-3 shadow-sm">
//                                         <thead>
//                                             <tr>
//                                                 <th>ID</th>
//                                                 <th>Key</th>
//                                                 <th>Value</th>
//                                                 <th>Actions</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {filteredDataList && filteredDataList.map((item, i) => (
//                                                 <tr key={i}>
//                                                     <td>{i + 1}</td>
//                                                     <td>{item.infoKey}</td>
//                                                     <td>{item.infoValue}</td>
//                                                     <td>
//                                                         <div>
//                                                             <a href="#"><i className="fa-solid fa-pencil text-color-1"></i></a>&nbsp;&nbsp;
//                                                             <a href="#"><i className="fa-solid fa-eye text-color-1"></i></a>&nbsp;&nbsp;
//                                                             <a href="#"><i className="fa-solid fa-trash text-danger"></i></a>
//                                                         </div>
//                                                     </td>
//                                                 </tr>
//                                             ))}


//                                         </tbody>
//                                     </table>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };

// export default WebInfoList;




'use client'


import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

interface InfoList {
    id: string;
    infoKey: string;
    infoValue: string;
}

const WebInfoList = () => {
    // const [dataList, setDataList] = useState([]);
    const [dataList, setDataList] = useState<InfoList[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getDataList();
    }, []);



    const getDataList = async () => {
        let response = await axios.get("api/web-info");
        setDataList(response.data);
        setLoading(false);
    };

    // console.log('dataList =>', dataList)

    // useEffect(() => {
    //     dataList.getProductsMini().then(data => setDataList(data));
    // }, []);

    return (
        <>
           

            <div className="card">
                <DataTable value={dataList} paginator rows={5} rowsPerPageOptions={[2,4, 6, 8]} showGridlines tableStyle={{ minWidth: '50rem' }}>
                    <Column field="_id"   header="Id"></Column>
                    <Column field="infoKey" header="infoKey"></Column>
                    <Column field="infoValue" header="infoValue"></Column>
                    {/* <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column> */}
                </DataTable>
            </div>
        </>
    );
};

export default WebInfoList;