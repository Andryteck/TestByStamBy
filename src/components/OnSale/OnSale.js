import React, {useEffect, useState} from "react";
import BlockWithTitle from "../common/block-with-title/block-with-title";
import OnSaleHeader from "./OnSaleHeader/OnSaleHeader";
import OnSaleContent from "./OnSaleContent/OnSaleContent";
import s from './OnSale.module.scss'
import data from '../../data/data'

export const OnSale = React.memo((props) => {
    const [spin, setSpin] = useState(true)

    useEffect(() => {
        setSpin(false)
        setTimeout(() => {
            setSpin(true)
        }, 1200)
    }, [])


    return (
        <BlockWithTitle title='ON SALE'>
            <div className={s.onsale_wrapper}>
                <OnSaleHeader/>
                {spin ?
                    data.map(i => <OnSaleContent key={i.id} release={i.release} manufacturer={i.manufacturer}
                                                 model={i.model} hash={i.hash} algorithm={i.algorithm}
                                                 efficiency={i.efficiency} profit={i.profit} minPrice={i.minPrice}
                                                 maxPrice={i.maxPrice}/>) :
                    <span style={{'color': 'white'}}>loading...</span>
                }
            </div>
        </BlockWithTitle>
    )
})