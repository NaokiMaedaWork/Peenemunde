import React from 'react';

class Header extends React.Component{
    render() {
        return (
            <div className="container">
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">   
                        <div className="col-3"></div>
                        <div className="col-6 text-center"><a className="blog-header-logo text-dark" href="#">THE BLOG</a></div>
                        <div className="col-3 d-flex justify-content-end align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><path d="M21 21l-5.2-5.2"></path></svg>
                                <input type="search" className="form-control" placeholder="Search..." aria-label="Search"></input>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default Header;
