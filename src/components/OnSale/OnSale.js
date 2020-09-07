import React, {useEffect} from "react";
import BlockWithTitle from "../common/block-with-title/block-with-title";
import OnSaleHeader from "./OnSaleHeader/OnSaleHeader";
import OnSaleContent from "./OnSaleContent/OnSaleContent";
import s from './OnSale.module.scss'
import data from '../../data/data'
import {useDispatch} from "react-redux";
import {addProductTC} from "../../redux/card-reducer";

export function OnSale(props) {
    let dispatch = useDispatch
    // useEffect(() => {
    //     dispatch(addProductTC())
    // }, [])
    //     const getProduct = () => {
    //         setTimeout(() => {
    //         }, 1000)
    //     }

    return (
        <BlockWithTitle title='ON SALE'>
            <div className={s.onsale_wrapper}>
                <OnSaleHeader/>
                {
                    data.map(i => <OnSaleContent key={i.id} release={i.release} manufacturer={i.manufacturer}
                                                 model={i.model} hash={i.hash} algorithm={i.algorithm}
                                                 efficiency={i.efficiency} profit={i.profit} minPrice={i.minPrice}
                                                 maxPrice={i.maxPrice}/>)
                }
            </div>
        </BlockWithTitle>
    )
}