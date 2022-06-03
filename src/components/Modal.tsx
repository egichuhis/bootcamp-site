import React from 'react'

const Modal = () => {
  return (
      <div className="modal fade" id="enroll" tabIndex={-1} aria-labelledby="enrollLabel">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="enrollLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p className="lead">
                            Fill out this form and we will get back to you
                        </p>
                        <form>
                            <div className="mb-3">
                                <label className="col-form-label">
                                    First Name:
                                </label>
                                <input type="text" className="form-control" id="first-name"/>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">
                                    Last Name:
                                </label>
                                <input type="text" className="form-control" id="last-name"/>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">
                                    Email:
                                </label>
                                <input type="text" className="form-control" id="email"/>
                            </div>
                            <div className="mb-3">
                                <label className="col-form-label">
                                    Phone:
                                </label>
                                <input type="text" className="form-control" id="phone"/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Modal