import './product.css'

const Product = ({ product }) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">

                    <div className="media-content">
                        <p className="title is-4">{product.itemName}</p>
                    </div>
                </div>

                <div className="content">
                    Product Description to be added later
                    <br />
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br />
                    <div className='columns ml-5 is-vcentered'>
                        <div className='column '>
                            <span className='bold is-size-4'>₹ {product.price}</span>
                        </div>
                        <div className='column'>
                            <button className='button is-primary'>Buy Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
