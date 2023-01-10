import React from "react"

export const Card = (paragraph, textButton) => (
        <div className="card text-bg-light m-5 col-lg-2">
            <div className="card-body">
                <p className="card-text">{paragraph}</p>
            </div>
                <button className="btn btn-primary w-100">{textButton}</button>
        </div>
)