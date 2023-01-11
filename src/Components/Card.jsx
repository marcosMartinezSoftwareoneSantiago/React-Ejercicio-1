import React from "react"

export const Card = (paragraph, textButton) => (
        <div className="card text-bg-light m-1 mt-5">
            <div className="card-body">
                <p className="card-text">{paragraph}</p>
            </div>
            <button className="btn btn-primary">{textButton}</button>
        </div>
)