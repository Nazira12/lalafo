import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import Title from "../../components/title/Title";
import css from './HomePage.module.css'



function HomePage(){
    
    const { isLoading, data } = useSelector((state) => state.houses)
    if(isLoading){
        return <Loader />
    }

    return (
        <div className="page">
            <Title position="center">Последние объявления</Title>
            <div className={css.cardsWrapper}>
            {data.length 
             ? data.map((item) => <Card 
             key={item.id} 
             text={item.title} 
             price={item.price} 
             img={item.imgUrl}
             id={item.id}
             />)
             : <h1>Последних объявлений нет</h1>
        }
            </div>
            <br />
            <Title position="center">Последние объявления по авто</Title>
        </div>
    )
}

export default HomePage 