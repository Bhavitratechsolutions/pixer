'use client'
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



const AddWebInfo = () => {


    const [infoKey, setInfoKey] = useState("");
    const [infoValue, setInfoValue] = useState("");

    const [values, setValues] = useState([])
    const [title, setTitle] = useState("")
    const [pageDesc, setPageDesc] = useState("");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let dormData = {
            infoKey,
            infoValue,
        }

        const data = JSON.stringify(dormData);

        const res = await fetch('api/web-info', {
            method: 'POST',
            body: data
        })

        // handle the error
        if (!res.ok) {
            throw new Error(await res.text())
        } else {
            // handleClose()
            location.reload()

        }

    }

    const handleChange = (e: any, editor: any) => {
        setPageDesc(editor.getData());

    }



    return (
        <>

<ToastContainer />
            <div className="container">
                <h5 className="mb-4"> Web Info   </h5>
                <form action="#" method="post" onSubmit={handleSubmit}>
                    <div className="row row-cols-1">

                        <div className="col">
                            <div className="py-4 border-top" >
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <div>
                                            <h6>Description</h6>
                                            <p className="text-secondary">Edit your product description and necessary information from here</p>
                                        </div>
                                    </div>
                                    <div className="col-md-8">

                                        <CKEditor
                                            editor={ClassicEditor}
                                            onChange={(e, editor) => handleChange(e, editor)}
                                        />

                                        <div className="card border-0 p-3 shadow-sm">
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-12">
                                                        <label className="form-label fw-medium">Key*</label>
                                                        <input className="form-control" type="text" name="" placeholder="Info Key"
                                                            onChange={(e) => setInfoKey(e.target.value)}
                                                            value={infoKey}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="row mb-3">
                                                    <div className="col-12">
                                                        <label className="form-label fw-medium">Value*</label>
                                                        <input className="form-control" type="text" name="" placeholder="Info Value"
                                                            onChange={(e) => setInfoValue(e.target.value)}
                                                            value={infoValue}
                                                        />
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="col sticky-bottom">
                            <div className="mt-4 bg-gray-1 py-3 border-top border-primary" >
                                <div className="row">
                                    <div className="col-auto">
                                        <div>
                                            <a className="btn btn-outline-primary btn-lg fw-semibold" href="#">Back</a>
                                        </div>
                                    </div>
                                    <div className="col-auto ms-auto">
                                        <div>
                                            <button className="btn btn-primary btn-lg fw-semibold" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default AddWebInfo;