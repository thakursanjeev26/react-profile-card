import React from "react";

export default function Greetings({ title, para, img }) {
  return (
    <>
      <div
        className="card col-12 col-sm-6 col-md-4 col-lg-3 col-xl-1"
        style={{ width: "18rem" }}
      >
        <img
          src={img}
          className="card-img-top img-hover mt-3"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "100px",
            display: "block",
            margin: "auto",
          }}
          alt="..."
        />
        <div className="card-body ">
          <h5 className="card-title text-center fw-bold">{title}</h5>
          <p className="card-text">{para}</p>
          <a href="#" className="btn btn-primary btn-hover ">
            Check Profile
          </a>
        </div>
      </div>
    </>
  );
}
