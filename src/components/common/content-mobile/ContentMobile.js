import React from 'react';
import s from './ContentMobile.module.scss'
import IconProduct from "../product-icon/product-icon";
import {new_listings} from '../../../data/data'

const ContentMobile = () => {
    //let data = [1,2,3]
    return (
        <div className={s.onSale_wrapper_mobile}>

            {new_listings.map((e) => {
                return (
                    <IconProduct
                        key={e.id}
                        id={e.id}
                        title={e.title}
                        description={e.description}
                        favorite={e.favorite}
                        img={e.img}
                        priceMin={e.priceMin}
                        priceMax={e.priceMax}
                        currency={e.currency}
                        sale={e.sale}
                        isPreorder={e.isPreorder}
                    />
                )
            })}
        </div>
    );
};

export default ContentMobile;