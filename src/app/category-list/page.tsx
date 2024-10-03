'use client'
import Link from "next/link";
import React from "react";
import DefaultPage from "../page";
// import Summery from '../../components/dashboard/Summary';



const ProductList = () => {



    return (
        <>

           
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
                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div>
                                            <label className="form-label fw-medium">Filter By Layout</label>
                                            <select className="form-select" name="" id="">
                                                <option value="">Select</option>
                                                <option value="">Fixed</option>
                                                <option value="">Responsive</option>
                                                <option value="">N/A</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <label className="form-label fw-medium">Filter By Category</label>
                                            <select className="form-select" name="" id="">
                                                <option value="">Select</option>
                                                <option value="">Fixed</option>
                                                <option value="">Responsive</option>
                                                <option value="">N/A</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div>
                                            <label className="form-label fw-medium">Filter by Product Type</label>
                                            <select className="form-select" name="" id="">
                                                <option value="">Select</option>
                                                <option value="">Fixed</option>
                                                <option value="">Responsive</option>
                                                <option value="">N/A</option>
                                            </select>
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
                                                <th>Product</th>
                                                <th>Product Type</th>
                                                <th>Quantity</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>#ID: 1</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img className="rounded me-2" src="img/image52-thumbnail.webp" alt="" height="40px" width="40px" />
                                                        <div>
                                                            <p style={{ marginBottom: '1px' }}>Scholar Multipurpose Education</p>
                                                            <span className="text-secondary fw-normal" style={{ fontSize: '14px' }}>Liquid</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Simple</td>
                                                <td>500</td>
                                                <td>
                                                    <span className="badge bg-primary text-primary p-2 px-3 text-capitalize" style={{ '--bs-bg-opacity': 0.1 } as React.CSSProperties}>publish</span>
                                                </td>
                                                <td>
                                                    <div>
                                                        <a href="#"><i className="fa-solid fa-pencil text-color-1"></i></a>&nbsp;&nbsp;
                                                        <a href="#"><i className="fa-solid fa-eye text-color-1"></i></a>&nbsp;&nbsp;
                                                        <a href="#"><i className="fa-solid fa-trash text-danger"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#ID: 1</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img className="rounded me-2" src="img/image52-thumbnail.webp" alt="" height="40px" width="40px" />
                                                        <div>
                                                            <p style={{ marginBottom: '1px' }}>Scholar Multipurpose Education</p>
                                                            <span className="text-secondary fw-normal" style={{ fontSize: '14px' }}>Liquid</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Simple</td>
                                                <td>500</td>
                                                <td>
                                                    <span className="badge bg-danger text-danger p-2 px-3 text-capitalize" style={{ '--bs-bg-opacity': 0.1 } as React.CSSProperties}>inactive</span>
                                                </td>
                                                <td>
                                                    <div>
                                                        <a href="#"><i className="fa-solid fa-pencil text-color-1"></i></a>&nbsp;&nbsp;
                                                        <a href="#"><i className="fa-solid fa-eye text-color-1"></i></a>&nbsp;&nbsp;
                                                        <a href="#"><i className="fa-solid fa-trash text-danger"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#ID: 1</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img className="rounded me-2" src="img/image52-thumbnail.webp" alt="" height="40px" width="40px" />
                                                        <div>
                                                            <p style={{ marginBottom: '1px' }}>Scholar Multipurpose Education</p>
                                                            <span className="text-secondary fw-normal" style={{ fontSize: '14px' }}>Liquid</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Simple</td>
                                                <td>500</td>
                                                <td>
                                                    <span className="badge bg-primary text-primary p-2 px-3 text-capitalize" style={{ '--bs-bg-opacity': 0.1 } as React.CSSProperties}>publish</span>
                                                </td>
                                                <td>
                                                    <div>
                                                        <a href="#"><i className="fa-solid fa-pencil text-color-1"></i></a>&nbsp;&nbsp;
                                                        <a href="#"><i className="fa-solid fa-eye text-color-1"></i></a>&nbsp;&nbsp;
                                                        <a href="#"><i className="fa-solid fa-trash text-danger"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#ID: 1</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img className="rounded me-2" src="img/image52-thumbnail.webp" alt="" height="40px" width="40px" />
                                                        <div>
                                                            <p style={{ marginBottom: ' 1px' }}>Scholar Multipurpose Education</p>
                                                            <span className="text-secondary fw-normal" style={{ fontSize: '14px' }}>Liquid</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Simple</td>
                                                <td>500</td>
                                                <td>
                                                    <span className="badge bg-primary text-primary p-2 px-3 text-capitalize" style={{ '--bs-bg-opacity': 0.1 } as React.CSSProperties}>publish</span>
                                                </td>
                                                <td>
                                                    <div>
                                                        <a href="#"><i className="fa-solid fa-pencil text-color-1"></i></a>&nbsp;&nbsp;
                                                        <a href="#"><i className="fa-solid fa-eye text-color-1"></i></a>&nbsp;&nbsp;
                                                        <a href="#"><i className="fa-solid fa-trash text-danger"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#ID: 1</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img className="rounded me-2" src="/img/image52-thumbnail.webp" alt="" height="40px" width="40px" />
                                                        <div>
                                                            <p style={{ marginBottom: '1px' }}>Scholar Multipurpose Education</p>
                                                            <span className="text-secondary fw-normal" style={{ fontSize: '14px' }}>Liquid</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>Simple</td>
                                                <td>500</td>
                                                <td>
                                                    <span className="badge bg-primary text-primary p-2 px-3 text-capitalize" style={{ '--bs-bg-opacity': 0.1 } as React.CSSProperties}>publish</span>
                                                </td>
                                                <td>
                                                    <div>
                                                        <a href="#"><i className="fa-solid fa-pencil text-color-1"></i></a>&nbsp;&nbsp;
                                                        <a href="#"><i className="fa-solid fa-eye text-color-1"></i></a>&nbsp;&nbsp;
                                                        <a href="#"><i className="fa-solid fa-trash text-danger"></i></a>
                                                    </div>
                                                </td>
                                            </tr>
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