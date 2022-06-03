import React from 'react'

const contact = () => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md">
            <h2 className="text-center mb-4">Contact Info</h2>
            <ul className="list-group list-group-flush lead">
              <li className="list-group-item">
                <span className="fw-bold">Main Location:</span> 12 Kenyatta Avenue,
                NBI
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Phone:</span> +123 456 789
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Phone:</span> +123 456 789
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Enrollment Email:</span> abcd@gmail.com
              </li>
              <li className="list-group-item">
                <span className="fw-bold">Student Email:</span> abcd@gmail.com
              </li>
            </ul>
          </div>
          <div className="col-md">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default contact