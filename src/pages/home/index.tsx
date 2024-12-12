import dining from '../../assets/category/images/category-dining.png'
import living from '../../assets/category/images/category-living.png'
import bedroom from '../../assets/category/images/category-bedroom.png'
import { useNavigate } from 'react-router'
import { path } from '../../routers'
import ProductCard from '../../components/ProductCard'
import { useEffect, useState } from 'react'
import { IDataProduct } from '../../types'
import { getListProduct } from '../../services'
import { MAX_OUR_PRODUCTS } from '../../constants'

let limit = 0
export default function Home() {
  const navigate = useNavigate()
  const [ourProducts, setOurProducts] = useState<IDataProduct[]>([])

  const getData = async () => {
    limit = limit < MAX_OUR_PRODUCTS ? limit + 8 : 8
    const productData = await getListProduct(1, limit)
    setOurProducts(productData.data)
  }

  const goToShop = () => {
    navigate(path.shop)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='container home'>
      {/* HERO */}
      <div className='hero'>
        <div className='hero-intro'>
          <p className='intro-label font-600'>New Arrival</p>
          <p className='intro-title font-700'>Discover Our New Collection</p>
          <p className='intro-desc font-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div className='btn-primary font-700'>BUY NOW</div>
        </div>
      </div>

      {/* CATEGORY */}
      <div className='category'>
        <div className='category-title'>Browse The Range</div>
        <div className='category-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className='category-list'>
          <div className='category-item'>
            <div className='category-img' onClick={() => goToShop()}>
              <img src={dining} alt='' />
            </div>
            <div className='item-name'>Dining</div>
          </div>
          <div className='category-item'>
            <div className='category-img' onClick={() => goToShop()}>
              <img src={living} alt='' />
            </div>
            <div className='item-name'>Living</div>
          </div>
          <div className='category-item'>
            <div className='category-img' onClick={() => goToShop()}>
              <img src={bedroom} alt='' />
            </div>
            <div className='item-name'>Bedroom</div>
          </div>
        </div>
      </div>

      {/* OUR PRODUCT */}
      <div className='our-product'>
        <div className='our-product-title'>Our Products</div>
        <div className='product-list'>
          {ourProducts.map((productItem: IDataProduct) => (
            <ProductCard key={productItem.id} productItem={productItem} />
          ))}
        </div>
        <div className='btn-show-more' onClick={() => getData()}>
          {ourProducts.length < MAX_OUR_PRODUCTS ? 'Show More' : 'Show Less'}
        </div>
      </div>
    </div>
  )
}
