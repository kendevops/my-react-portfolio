import React from 'react'

function MenuItems({menuItems}) {
    return (
        <div>
            {
                menuItems.map((item, index) => (
                    <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt={item.title} />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.previewIcon}></a>
                                    <a href={item.github}></a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>Placeholder paragraph</p>
                    </div>
                ))
            }
        </div>
    )
}

export default MenuItems
