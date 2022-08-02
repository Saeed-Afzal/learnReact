import React from 'react'
import "./style.css"

const Resturant = () => {
    // const myStyle = {color: 'red'};
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <div className="card-body">
                        <span className="card-number card-circle subtle ">1</span>
                        <span className="card-author subtle" >Breakfast</span>
                        <h2 className="card-title">Maggi</h2>
                        <span className="card-description subtle">
                            I like maggi Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus similique neque, atque ratione commodi debitis consectetur fugiat reprehenderit beatae sapiente aliquam accusamus non aspernatur quasi quam dolore numquam vel.
                        </span>
                        <div className="card-read">Read</div>

                    </div>
                    <img src={image} alt="images"  className='card-media'/>
                    <span className="card-tag subtle">Order Now</span>
                </div>
            </div>
        </>
    )
}

export default Resturant;
