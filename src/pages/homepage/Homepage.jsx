import { useState, useEffect } from 'react'
import './homepage.css'
import axios from 'axios'

import Navbar from '../../components/navbar/Navbar'
import Product from '../../components/product/Product'

const Homepage = () => {
    const [products, setProducts] = useState([])

    useEffect( async () => {
        const product  = await axios.get('/products')
        setProducts(product.data)

    }, [products])

    console.log(axios.get('/prodcuts'))


    return (
        <div className='container is-fluid p-0 '>
            <div className='blue'>
                <Navbar c='blue' />
            </div>
            <div className='section is-medium blue'>

            </div>
            <div className='p-4 columns is-centered is-vcentered blue'>
                <div className='column' style={{ color: 'white' }}>
                    Get Your Website
                </div>
                <div className='column' style={{ color: 'white' }}>
                    Image Goes here
                </div>

            </div>
            <div className='columns p-4'>
                {products.map((p) => {
                    return (
                        <div className='column is-3 '>
                            <Product product={p} />
                        </div>
                    )
                })}

            </div>


        </div >
    )
}

export default Homepage
