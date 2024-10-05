
'use client';

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure this is imported to display toast notifications
import { useRouter, useParams } from 'next/navigation'
import axios from 'axios';
// import Dashboard from '../../../dashboard/page';


const Edit = () => {

    
    const [infoKey, setInfoKey] = useState("");
    const [infoValue, setInfoValue] = useState("");

    const router = useRouter()
    const { id } = useParams();


    useEffect(() => {
        getSingleRecord();
    }, [id]);


    const getSingleRecord = async () => {
        try {
            let response = await axios.get(`/api/web-info/${id}`);
            if (response.data) {
                setInfoKey(response.data.infoKey);
                setInfoValue(response.data.infoValue);


            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                // Use API error response if available
                const errorMessage = error.response.data.message || 'Error fetching record';
                toast.error(`Error: ${errorMessage}`);
            } else {
                toast.error('Error fetching record');
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();



        try {

            let formData = {
                infoValue,
                infoKey,
            }

            const response = await axios.put(`/api/web-info/${id}`, formData);

            if (!response.data.success) {
                toast.error(response.data.message);
            } else {
                toast.success(response.data.message);
                setTimeout(() => {
                    router.push('/webinfo-list');
                }, 500);
            }
        } catch (error: any) {
            console.error('Error:', error);
            toast.error(error.response?.data?.message || "An unexpected error occurred");
        }
    };




    return (
        <>



            <ToastContainer />
            <div className="container">
                <h5 className="mb-4"> Edit Web Info   </h5>
                <form action="#" method="post" onSubmit={handleSubmit}>
                    <div className="row row-cols-1">

                        <div className="col">
                            <div className="py-4 border-top" >
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <div>
                                            <h6>Description</h6>
                                            <p className="text-secondary">Add your  necessary information from here</p>
                                        </div>
                                    </div>
                                    <div className="col-md-8">


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
    );
};

export default Edit;
