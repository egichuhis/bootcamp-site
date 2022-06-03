import React from 'react'

const learn = () => {
    return (
      <>
    <section id="learn" className="p-5">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md">
                        <img src="img/fundamentals.svg" alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md p-5">
                        <h2>Learn The Fundamentals</h2>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores itaque fugiat. Error,
                            cumque ut?
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam corrupti molestiae, ducimus
                            assumenda veniam provident soluta adipisci aut quasi a ipsum, mollitia sed voluptatum vitae
                            nesciunt non voluptate ex molestias!
                        </p>
                        <a href="#" className="btn btn-light mt-3">
                            <i className="bi bi-chevron-right"></i> Read More
                        </a>

                    </div>
                </div>
            </div>
        </section>

        <section id="learn" className="p-5 bg-dark text-light">
            <div className="container">
                <div className="row align-items-center justify-content-between">

                    <div className="col-md p-5">
                        <h2>Learn React</h2>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores itaque fugiat. Error,
                            cumque ut?
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam corrupti molestiae, ducimus
                            assumenda veniam provident soluta adipisci aut quasi a ipsum, mollitia sed voluptatum vitae
                            nesciunt non voluptate ex molestias!
                        </p>
                        <a href="#" className="btn btn-light mt-3">
                            <i className="bi bi-chevron-right"></i> Read More
                        </a>

                    </div>
                    <div className="col-md">
                        <img src="img/react.svg" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
            </section>
            </>
  )
}

export default learn