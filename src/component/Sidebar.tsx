import Link from "next/link";
import Image from 'next/image'


const SideBar = () => {

    const sidebarToggle = () => {
       
    };

    return (
        <>
            <aside>

                <div className="sidebar border-end bg-white overflow-hidden sticky-top" id="sidebar">
                    <div className="sidebar-header d-flex align-items-center justify-content-between ps-4">
                        <div className="logo">
                            <img className="default-logo" src="img/pixer_dark.webp" width="115"  alt="Logo" />
                            <img className="collapsed-logo" src="yimg/pixer-collapse-logo.webp"  alt="Logo" />
                        </div>
                        <div>
                            <button className="btn d-md-none" type="button" onClick={sidebarToggle}>
                            {/* <button className="btn d-md-none" type="button" > */}
                                <div className="icon icon-sm sidebar-close-btn">
                                    <i className="fa-solid fa-close"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="h-100 overflow-auto p-4" id="sidebar-scroller" data-overlayscrollbars-initialize>

                        <ul className="menu">

                            <li className="menu-item">
                                <a href="/" className="menu-link active">
                                    <span className="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" d="M8.75 4.375v3.75a.625.625 0 0 1-.625.625h-3.75a.625.625 0 0 1-.625-.625v-3.75a.625.625 0 0 1 .625-.625h3.75a.625.625 0 0 1 .625.625Zm6.875-.625h-3.75a.625.625 0 0 0-.625.625v3.75a.625.625 0 0 0 .625.625h3.75a.625.625 0 0 0 .625-.625v-3.75a.625.625 0 0 0-.625-.625Zm-7.5 7.5h-3.75a.625.625 0 0 0-.625.625v3.75a.625.625 0 0 0 .625.625h3.75a.625.625 0 0 0 .625-.625v-3.75a.625.625 0 0 0-.625-.625Zm7.5 0h-3.75a.624.624 0 0 0-.625.625v3.75a.624.624 0 0 0 .625.625h3.75a.624.624 0 0 0 .625-.625v-3.75a.624.624 0 0 0-.625-.625Z" opacity="0.2"></path><path fill="currentColor" d="M15.625 10.625h-3.75a1.25 1.25 0 0 0-1.25 1.25v3.75a1.25 1.25 0 0 0 1.25 1.25h3.75a1.25 1.25 0 0 0 1.25-1.25v-3.75a1.25 1.25 0 0 0-1.25-1.25Zm0 5h-3.75v-3.75h3.75v3.75Zm-7.5-12.5h-3.75a1.25 1.25 0 0 0-1.25 1.25v3.75a1.25 1.25 0 0 0 1.25 1.25h3.75a1.25 1.25 0 0 0 1.25-1.25v-3.75a1.25 1.25 0 0 0-1.25-1.25Zm0 5h-3.75v-3.75h3.75v3.75Zm7.5-5h-3.75a1.25 1.25 0 0 0-1.25 1.25v3.75a1.25 1.25 0 0 0 1.25 1.25h3.75a1.25 1.25 0 0 0 1.25-1.25v-3.75a1.25 1.25 0 0 0-1.25-1.25Zm0 5h-3.75v-3.75h3.75v3.75Zm-7.5 2.5h-3.75a1.25 1.25 0 0 0-1.25 1.25v3.75a1.25 1.25 0 0 0 1.25 1.25h3.75a1.25 1.25 0 0 0 1.25-1.25v-3.75a1.25 1.25 0 0 0-1.25-1.25Zm0 5h-3.75v-3.75h3.75v3.75Z"></path></svg></span>
                                    <span className="menu-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link">
                                    <span className="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" d="m17.5 5.625-2.228 7.243a1.25 1.25 0 0 1-1.196.882H6.568a1.25 1.25 0 0 1-1.202-.906L3.304 5.625H17.5Z" opacity="0.2"></path><path fill="currentColor" d="M7.5 16.875a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm6.875-1.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm3.723-9.816-2.23 7.243a1.866 1.866 0 0 1-1.791 1.323H6.568a1.883 1.883 0 0 1-1.802-1.36l-2.827-9.89H.625a.625.625 0 0 1 0-1.25h1.314a1.256 1.256 0 0 1 1.202.906L3.775 5H17.5a.625.625 0 0 1 .598.809Zm-1.444.441H4.132l1.835 6.422a.625.625 0 0 0 .601.453h7.509a.625.625 0 0 0 .597-.441l1.98-6.434Z"></path></svg></span>
                                    <span className="menu-text">Shops</span>
                                </a>
                            </li>

                            <li className="menu-item has-menu-sub">
                                <li className="menu-link menu-toggle" style={{ cursor: 'pointer' }}>
                                    <span className="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" d="M10 10.085v8.04a.625.625 0 0 1-.3-.078l-6.875-3.764a.625.625 0 0 1-.325-.547V6.264c0-.087.019-.174.055-.254L10 10.085Z" opacity="0.2"></path><path fill="currentColor" d="M17.475 5.168 10.6 1.406a1.24 1.24 0 0 0-1.2 0L2.525 5.17a1.25 1.25 0 0 0-.65 1.094v7.472a1.25 1.25 0 0 0 .65 1.094L9.4 18.592a1.24 1.24 0 0 0 1.2 0l6.875-3.763a1.251 1.251 0 0 0 .65-1.094V6.264a1.25 1.25 0 0 0-.65-1.096ZM10 2.5l6.277 3.437-2.326 1.274-6.278-3.438L10 2.5Zm0 6.875L3.723 5.937l2.649-1.45 6.276 3.438L10 9.375ZM3.125 7.031l6.25 3.42v6.703l-6.25-3.418V7.03Zm13.75 6.702-6.25 3.42v-6.698l2.5-1.368v2.788a.625.625 0 1 0 1.25 0V8.402l2.5-1.37v6.7Z"></path></svg></span>
                                    <span className="menu-text">Section </span>
                                </li>
                                
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <Link href="/add-section" className="menu-link"> Add Section</Link>
                                    </li>
                                    
                                </ul>
                            </li>

                            <li className="menu-item has-menu-sub">
                                <li className="menu-link menu-toggle" style={{ cursor: 'pointer' }}>
                                    <span className="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" d="M10 10.085v8.04a.625.625 0 0 1-.3-.078l-6.875-3.764a.625.625 0 0 1-.325-.547V6.264c0-.087.019-.174.055-.254L10 10.085Z" opacity="0.2"></path><path fill="currentColor" d="M17.475 5.168 10.6 1.406a1.24 1.24 0 0 0-1.2 0L2.525 5.17a1.25 1.25 0 0 0-.65 1.094v7.472a1.25 1.25 0 0 0 .65 1.094L9.4 18.592a1.24 1.24 0 0 0 1.2 0l6.875-3.763a1.251 1.251 0 0 0 .65-1.094V6.264a1.25 1.25 0 0 0-.65-1.096ZM10 2.5l6.277 3.437-2.326 1.274-6.278-3.438L10 2.5Zm0 6.875L3.723 5.937l2.649-1.45 6.276 3.438L10 9.375ZM3.125 7.031l6.25 3.42v6.703l-6.25-3.418V7.03Zm13.75 6.702-6.25 3.42v-6.698l2.5-1.368v2.788a.625.625 0 1 0 1.25 0V8.402l2.5-1.37v6.7Z"></path></svg></span>
                                    <span className="menu-text">About info  </span>
                                </li>
                                
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                    <Link href="/add-about-brief" className="menu-link"> Add brif-info</Link>
                                    </li>

                                    <li className="menu-item">
                                        <Link href="/about-brif-list" className="menu-link"> Abou Brif List </Link>
                                    </li>
                                    
                                    
                                </ul>
                            </li>

                           

                            <li className="menu-item has-menu-sub">
                                <li className="menu-link menu-toggle" style={{ cursor: 'pointer' }}>
                                    <span className="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" d="M10 10.085v8.04a.625.625 0 0 1-.3-.078l-6.875-3.764a.625.625 0 0 1-.325-.547V6.264c0-.087.019-.174.055-.254L10 10.085Z" opacity="0.2"></path><path fill="currentColor" d="M17.475 5.168 10.6 1.406a1.24 1.24 0 0 0-1.2 0L2.525 5.17a1.25 1.25 0 0 0-.65 1.094v7.472a1.25 1.25 0 0 0 .65 1.094L9.4 18.592a1.24 1.24 0 0 0 1.2 0l6.875-3.763a1.251 1.251 0 0 0 .65-1.094V6.264a1.25 1.25 0 0 0-.65-1.096ZM10 2.5l6.277 3.437-2.326 1.274-6.278-3.438L10 2.5Zm0 6.875L3.723 5.937l2.649-1.45 6.276 3.438L10 9.375ZM3.125 7.031l6.25 3.42v6.703l-6.25-3.418V7.03Zm13.75 6.702-6.25 3.42v-6.698l2.5-1.368v2.788a.625.625 0 1 0 1.25 0V8.402l2.5-1.37v6.7Z"></path></svg></span>
                                    <span className="menu-text">Banner </span>
                                </li>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <Link href="/add-banner" className="menu-link"> Add Banner</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="/banner" className="menu-link">Banner List </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item has-menu-sub">
                                <li className="menu-link menu-toggle" style={{ cursor: 'pointer' }}>
                                    <span className="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" d="M10 10.085v8.04a.625.625 0 0 1-.3-.078l-6.875-3.764a.625.625 0 0 1-.325-.547V6.264c0-.087.019-.174.055-.254L10 10.085Z" opacity="0.2"></path><path fill="currentColor" d="M17.475 5.168 10.6 1.406a1.24 1.24 0 0 0-1.2 0L2.525 5.17a1.25 1.25 0 0 0-.65 1.094v7.472a1.25 1.25 0 0 0 .65 1.094L9.4 18.592a1.24 1.24 0 0 0 1.2 0l6.875-3.763a1.251 1.251 0 0 0 .65-1.094V6.264a1.25 1.25 0 0 0-.65-1.096ZM10 2.5l6.277 3.437-2.326 1.274-6.278-3.438L10 2.5Zm0 6.875L3.723 5.937l2.649-1.45 6.276 3.438L10 9.375ZM3.125 7.031l6.25 3.42v6.703l-6.25-3.418V7.03Zm13.75 6.702-6.25 3.42v-6.698l2.5-1.368v2.788a.625.625 0 1 0 1.25 0V8.402l2.5-1.37v6.7Z"></path></svg></span>
                                    <span className="menu-text">Category</span>
                                </li>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <Link href="add-category" className="menu-link">Add New Category</Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="category-list" className="menu-link">Category List</Link>
                                    </li>
                                </ul>
                            </li>

                           

                            <li className="menu-item has-menu-sub">
                                <li className="menu-link menu-toggle" style={{ cursor: 'pointer' }}>
                                    <span className="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" d="M10 10.085v8.04a.625.625 0 0 1-.3-.078l-6.875-3.764a.625.625 0 0 1-.325-.547V6.264c0-.087.019-.174.055-.254L10 10.085Z" opacity="0.2"></path><path fill="currentColor" d="M17.475 5.168 10.6 1.406a1.24 1.24 0 0 0-1.2 0L2.525 5.17a1.25 1.25 0 0 0-.65 1.094v7.472a1.25 1.25 0 0 0 .65 1.094L9.4 18.592a1.24 1.24 0 0 0 1.2 0l6.875-3.763a1.251 1.251 0 0 0 .65-1.094V6.264a1.25 1.25 0 0 0-.65-1.096ZM10 2.5l6.277 3.437-2.326 1.274-6.278-3.438L10 2.5Zm0 6.875L3.723 5.937l2.649-1.45 6.276 3.438L10 9.375ZM3.125 7.031l6.25 3.42v6.703l-6.25-3.418V7.03Zm13.75 6.702-6.25 3.42v-6.698l2.5-1.368v2.788a.625.625 0 1 0 1.25 0V8.402l2.5-1.37v6.7Z"></path></svg></span>
                                    <span className="menu-text">Web Info </span>
                                </li>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <Link href="add-webinfo" className="menu-link"> Add Web Info </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link href="webinfo-list" className="menu-link">Web Info List  </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item has-menu-sub">
                                <li className="menu-link menu-toggle" style={{ cursor: 'pointer' }}>
                                    <span className="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" d="M10 10.085v8.04a.625.625 0 0 1-.3-.078l-6.875-3.764a.625.625 0 0 1-.325-.547V6.264c0-.087.019-.174.055-.254L10 10.085Z" opacity="0.2"></path><path fill="currentColor" d="M17.475 5.168 10.6 1.406a1.24 1.24 0 0 0-1.2 0L2.525 5.17a1.25 1.25 0 0 0-.65 1.094v7.472a1.25 1.25 0 0 0 .65 1.094L9.4 18.592a1.24 1.24 0 0 0 1.2 0l6.875-3.763a1.251 1.251 0 0 0 .65-1.094V6.264a1.25 1.25 0 0 0-.65-1.096ZM10 2.5l6.277 3.437-2.326 1.274-6.278-3.438L10 2.5Zm0 6.875L3.723 5.937l2.649-1.45 6.276 3.438L10 9.375ZM3.125 7.031l6.25 3.42v6.703l-6.25-3.418V7.03Zm13.75 6.702-6.25 3.42v-6.698l2.5-1.368v2.788a.625.625 0 1 0 1.25 0V8.402l2.5-1.37v6.7Z"></path></svg></span>
                                    <span className="menu-text">Flash Message </span>
                                </li>
                                <ul className="menu-sub">
                                    <li className="menu-item">
                                        <Link href="add-flash" className="menu-link"> Add Flash  </Link>
                                    </li>
                                   
                                </ul>
                            </li>

                           
                            <li className="menu-item">
                                <Link href="withdrawals" className="menu-link">
                                    <span className="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" d="m5 5 3.125 9.375h-6.25L5 5Zm10.625.938a3.438 3.438 0 1 0-6.875 0 3.438 3.438 0 0 0 6.875 0Zm-5 5.937v4.375H17.5v-4.375h-6.875Z" opacity="0.2"></path><path fill="currentColor" d="M17.5 11.25h-6.875a.625.625 0 0 0-.625.625v4.375a.625.625 0 0 0 .625.625H17.5a.625.625 0 0 0 .625-.625v-4.375a.625.625 0 0 0-.625-.625Zm-.625 4.375H11.25V12.5h5.625v3.125ZM5.593 4.802a.625.625 0 0 0-1.186 0l-3.125 9.375a.625.625 0 0 0 .593.823h6.25a.625.625 0 0 0 .593-.823L5.593 4.802Zm-2.85 8.948L5 6.977l2.258 6.773H2.742ZM16.25 5.937a4.062 4.062 0 1 0-8.125 0 4.062 4.062 0 0 0 8.125 0Zm-6.875 0a2.812 2.812 0 1 1 5.625 0 2.812 2.812 0 0 1-5.625 0Z"></path></svg></span>
                                    <span className="menu-text">Withdrawals</span>
                                </Link>
                            </li>

                        </ul>

                    </div>
                </div>

            </aside>
        </>
    )
}


export default SideBar;