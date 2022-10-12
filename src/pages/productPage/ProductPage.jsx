import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import { base_url } from "../../components/constants";
import ErrorBlock from "../../components/errorBlock/ErrorBlock";
import Loader from "../../components/loader/Loader";
import Title from "../../components/title/Title";
import css from "./ProductPage.module.css"

const imagesArray = [
    "https://www.bhg.com/thmb/a-NwJnw4qLipa1EWsJThQyc7Bik=/1280x1280/smart/filters:no_upscale():focal(899x639:901x641)/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    "https://images.adsttc.com/media/images/629f/3517/c372/5201/650f/1c7f/large_jpg/hyde-park-house-robeson-architects_1.jpg?1654601149",
    "https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
]

function ProductPage(){
    const params = useParams()
    const [isLoading, setLoading] = useState(true)
    const [detail, setDetail] = useState(null)
    const [error, setError] = useState("")

    useEffect(() => {
        fetch(base_url + "houses/" + params.id )
        .finally(() => {
            setLoading(false)
        })
        .then((res) => {
            if(!res.ok){
                setError("Somethin went wrong. Please try later!")
            }
            return res.json()
        })
        .then((data) => {
            setDetail(data)
        })
        .catch((error) =>{

        })
    }, [params.id])

    if(isLoading || !detail) return <Loader />
    if(error) return <ErrorBlock text={error}/>
    
    return (
        <div className="page">
            <div className={css.mainBlock}>
                <div>
                    <Carousel autoPlay swipeable showIndicators={false}>
                    <img src={detail.imgUrl} alt={detail.title} />
                    {imagesArray.map((item) => <img src={item} /> )}
                    </Carousel>
                </div>
                <div className={css.infoWrapper}>
                    <Title>{detail.title}</Title>
                    <Title>Price: {detail.price}$</Title>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aliquid quia voluptates aut, neque, ab reprehenderit ut facere accusamus totam soluta dolorum? Nobis eum tenetur cum voluptates ipsum vitae impedit.</div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage

