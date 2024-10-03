import React from "react";
import DefaultPage from "../page";


const Withdrawals = () => {

    return (
        <>

            <div className="container">
                <div className="row row-cols-1 g-3 g-md-5">

                    <div className="col">
                        <div className="bg-white px-4 py-5 rounded-3">
                            <div className="d-flex justify-content-between align-items-center mb-5">
                                <h5 className="sec-title position-relative mb-0">Withdrawals</h5>
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
                                        </tr>
                                    </thead>
                                </table>
                                <div className="d-flex align-items-center justify-content-center bg-white p-5 text-center">
                                    <div>
                                        <img className="mb-4" src="img/8ogm1cjoj18m0wa2hec 1.png" alt="" />
                                        <p>Sorry we couldn’t found any data</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default Withdrawals;