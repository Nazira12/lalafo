import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { base_url } from "../../components/constants";
import Loader from "../../components/loader/Loader";
import Title from "../../components/title/Title";
import css from './HomePage.module.css'



function HomePage(){
    const [isShow, setItShow] = useState(false)

    const [housesArray, setHousesArray ]= useState([])
    const [isLoading, setLoading]= useState(true)
    useEffect(() => {
        fetch(base_url + "houses")
        .finally(()=>{
            setLoading(false)
        })
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then((data) => {
            console.log(data);
            setHousesArray(data)
        })
        .catch()
    }, [])    

    if(isLoading){
        return <Loader />
    }

    return (
        <div className="page">
            <Title position="center">Последние объявления</Title>
            <div className={css.cardsWrapper}>
            {housesArray.length 
             ? housesArray.map((item) => <Card 
             key={item.id} 
             text={item.title} 
             price={item.price} 
             img={item.imgUrl}
             id={item.id}
             />)
             : <h1>Последних объявлений нет</h1>
        }
            </div>
            
        </div>
    )
}

export default HomePage 