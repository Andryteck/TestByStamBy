import React from 'react';
import s from "./Footer.module.scss";
import Icons from "../../assets/svg/Icon";
import CommonCorners from "../common-style/common-corners"

const Footer = () => {
    return (
        <div className={s.container__footer}>
            <div className={s.footer__links}>
                <a className={s.links__link} href='#'>
                    <Icons name='facebook'/>
                    <CommonCorners/>
                </a>
                <a className={s.links__link} href='#'>
                    <Icons name='twitter'/>
                    <CommonCorners/>
                </a>
                <a className={s.links__link} href='#'>
                    <Icons name='youtube'/>
                    <CommonCorners/>
                </a>
                <a className={s.links__link} href='#'>
                    <Icons name='reddit'/>
                    <CommonCorners/>
                </a>
            </div>
        </div>
    );
};

export default Footer;