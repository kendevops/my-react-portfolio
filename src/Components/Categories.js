import React from 'react'

function Categories({filter, categories}) {
    return (
        <div className="buttons">
            {
            categories.map((category, i) => <button type="button" className="btn-portfolio" key={i} onClick={() => filter(category)}>{category}</button>)
    }
        </div>
    )
}

export default Categories
