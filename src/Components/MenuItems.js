import React from 'react'

function MenuItems({menuItem}) {
    //const randomE = Math.floor(Math.random() * menuItem.length)
    return (
        <div className="portfolios">
            {
                menuItem.map(item => (
                    <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt={item.title} />
                            <ul className="hover-items">
                                <li className="icons">
                                    <a href={item.preview} target="_blank" rel="noreferrer"><img src={item.previewIcon} alt="preview"/></a>
                                    <a href={item.github}><img src={item.githubIcon} alt={item.github}/></a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            <a href={item.preview} target="_blank" rel="noreferrer">{item.title}</a>
                        </h5>
                        {/* <p>Placeholder paragraph</p> */}
                    </div>
                ))
            }
        </div>
    )
}

export default MenuItems
