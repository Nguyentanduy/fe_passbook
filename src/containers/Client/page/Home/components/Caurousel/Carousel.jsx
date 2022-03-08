import React from 'react'
import carousel from '../../../../../../assets/images/passbook-1.jpg'
import styles from './style.module.scss'
import { useNavigate } from 'react-router';

export default function Carousel() {
    const navigate = useNavigate();

    return (
        <div className={styles.carousel} style={{ backgroundImage: `url(${carousel})` }}>
            <button className={styles.button} onClick={()=>navigate('/passbook')}>Mở sổ ngay</button>
        </div>
    )
}
