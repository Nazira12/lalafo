import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import Title from "../../components/title/Title";
import css from './HomePage.module.css'



function HomePage(){
    
    const { isLoading, data } = useSelector((state) => state.houses)
    const { data: carsData } = useSelector((state) => state.cars)

   const renderCards = (d) => {
    return d.length ? (
        d.map((item) => (
            <Card
            key={item.id}
            text={item.title}
            price={item.price}
            img={item.imgUrl}
            id={item.id}
            />
        ))
    ) : (
        <h2>No adds</h2>
    )
   }


    if(isLoading){
        return <Loader />
    }

    return (
        <div className="page">
            <Title position="center">Последние объявления</Title>
            <div className={css.cardsWrapper}>
            {renderCards(data)}
            </div>
            <br />
            <br />
            <Title position="center">Последние объявления по авто</Title>
            <div className={css.cardsWrapper}>
            {renderCards(carsData)}
            </div>
        </div>
    )
}

export default HomePage 