import React from 'react'
import CommonCorners from '../../common-style/common-corners'
import SelectBlock from '../select-block/select-block'
import s from './product-icon.module.scss'

import Favorite from '../../../assets/images/favorite.svg'

function IconProduct({
                         id,
                         title,
                         description,
                         favorite = false,
                         img, priceMin, priceMax,
                         currency,
                         isPreorder = false,
                         sale = '',
                         setCounterCard,
                         counterCard,
                         cartProducts,
                         setCartProducts
                     }) {

    let addToCart = () => {
        if (!cartProducts.length) {
            setCartProducts([
                ...cartProducts,
                {
                    id: id,
                    title: title,
                    description: description,
                    priceMin: priceMin,
                    priceMax: priceMax,
                    img:
                        img.imgProd ||
                        img.imgProd1 ||
                        img.imgProd2 ||
                        img.imgProd3 ||
                        img.imgProd4 ||
                        img.imgProd5,
                    counter: 1
                }
            ])
        } else {
            let product = cartProducts.find((el) => id === el.id)
            if (product) {
                product = {
                    ...product,
                    counter: product.counter + 1
                }
            } else {
                product = {
                    id: id,
                    title: title,
                    description: description,
                    priceMin: priceMin,
                    priceMax: priceMax,
                    img:
                        img.imgProd ||
                        img.imgProd1 ||
                        img.imgProd2 ||
                        img.imgProd3 ||
                        img.imgProd4 ||
                        img.imgProd5,
                    counter: 1
                }
            }

            const newCartProduct = cartProducts.filter((el) => id !== el.id)
            setCartProducts([...newCartProduct, product])
        }
    }

    return (
        <div className={s.container}>
            <div className={s.container__product}>
                <div className={s.product__header}>
                    <div className={s.header__name}>
                        <h2 className={s.name__title}>{title}</h2>
                        <p className={s.name__description}>{description}</p>
                    </div>
                    {favorite && <img src={Favorite}/>}
                </div>
                <div className={s.img}>
                    <img
                        className={s.product__image}
                        src={
                            img
                                ? img.imgProd ||
                                img.imgProd1 ||
                                img.imgProd2 ||
                                img.imgProd3 ||
                                img.imgProd4 ||
                                img.imgProd5
                                : null
                        }
                    />
                </div>
                <p className={s.footer__price}>${priceMin}.00-{priceMax}.00</p>
            </div>
            <CommonCorners/>
        </div>
    )
}

export default IconProduct
