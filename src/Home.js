import React from 'react'
import Products from './Products';
import './Home.css'

function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/adrive/images/Amazon_Drive/EN_drive_desktop_hero.jpg" alt=""/>
            <div className="home_row">
            <Products id={22} title="Nihal" rating={3} price={200} image="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D"/>
            <Products id={22} title="Nihal" rating={5} price={200} image="https://image.shutterstock.com/image-photo/earth-crystal-glass-globe-ball-260nw-1500154991.jpg"/>
            </div>
            <div className="home_row">
            <Products id={22} title="Nihal" rating={2} price={200} image="https://image.shutterstock.com/image-photo/autumn-forest-nature-vivid-morning-600w-766886038.jpg"/>
            <Products id={22} title="Nihal" rating={2} price={200} image="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D"/>
            <Products id={22} title="Nihal" rating={1} price={200} image="https://image.shutterstock.com/image-photo/autumn-nature-landscape-sunny-forest-260nw-1467813803.jpg"/>
            
            </div>
            <div className="home_row">
            <Products id={22} title="Nihal" rating={4} price={200} image="https://image.shutterstock.com/image-photo/autumn-forest-scenery-rays-warm-260nw-315523706.jpg"/>
            </div>
        </div>
    )
}

export default Home
