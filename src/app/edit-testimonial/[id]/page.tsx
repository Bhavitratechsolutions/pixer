
'use client';

import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure this is imported to display toast notifications
import { useRouter, useParams } from 'next/navigation'
import axios from 'axios';
// import Dashboard from '../../../dashboard/page';


const Edit = () => {

    const [fullName, setFullName] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const router = useRouter()
    const { id } = useParams();


    useEffect(() => {
        getSingleRecord();
    }, [id]);


    const getSingleRecord = async () => {
        try {
            let response = await axios.get(`/api/testimonial/${id}`);
            if (response.data) {
                setFullName(response.data.fullName);
                setTitle(response.data.title);
                setDescription(response.data.description);


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
                fullName,
                title,
                description,
            }

            const response = await axios.put(`/api/testimonial/${id}`, formData);

            if (!response.data.success) {
                toast.error(response.data.message);
            } else {
                toast.success(response.data.message);
                setTimeout(() => {
                    router.push('/testimonial-list');
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
                <h5 className="mb-4">Edit Testimonial </h5>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="row row-cols-1">


                        <div className="col">
                            <div className="py-4 border-top">
                                <div className="row align-items-center">

                                    <div className="col-md-10">
                                        <div className="card border-0 p-3 shadow-sm">
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-12">
                                                        <label className="form-label fw-medium">Name *</label>
                                                        <input className="form-control" type="text" name="" placeholder="Name"
                                                            value={fullName}
                                                            onChange={(e) => setFullName(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card border-0 p-3 shadow-sm">
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-12">
                                                        <label className="form-label fw-medium">Title *</label>
                                                        <input className="form-control" type="text" name="" placeholder="Title"
                                                            value={title}
                                                            onChange={(e) => setTitle(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card border-0 p-3 shadow-sm">
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-12">
                                                        <label className="form-label fw-medium" >Description</label>
                                                        <textarea className="form-control" value={description} rows={5} onChange={(e) => setDescription(e.target.value)} id="comment" name="text"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col sticky-bottom">
                            <div className="mt-4 bg-gray-1 py-3 border-top border-primary">
                                <div className="row">
                                    <div className="col-auto">
                                        <a className="btn btn-outline-primary btn-lg fw-semibold" href="#">
                                            Back
                                        </a>
                                    </div>
                                    <div className="col-auto ms-auto">
                                        <button className="btn btn-primary btn-lg fw-semibold" type="submit">
                                            Submit
                                        </button>
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
