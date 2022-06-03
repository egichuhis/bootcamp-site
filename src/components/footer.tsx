import React from 'react'

const footer = () => {
  return (
    <footer className="p-5 bg-dark text-center text-white position-relative">
      <div className="container">
        <p className="lead">Copyright &copy; 2021 FrontEnd BootCamp</p>
        <a href="#" className="position-absolute bottom-0 end-0 p-5">
          <i className="bi bi-arrow-up-circle h1"></i>
        </a>
      </div>
    </footer>
  );
}

export default footer