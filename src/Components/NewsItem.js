import React from 'react'

export default function NewsItem(props) {
    return (
        <div>
            <div className={`card ${props.mode === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`} style={{width: "18rem"}}  >
                <img src={props.imgUrl}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}...</h5>
                        <p className="card-text">{props.desc}...</p>
                        <a rel="noreferrer" href={props.newsUrl} target='_blank' className={`btn ${props.mode === "dark" ? "btn-light" : "btn-dark"}`}>Read more</a>
                    </div>
            </div>
        </div>
    )
}
