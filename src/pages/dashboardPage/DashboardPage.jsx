import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import Title from "../../components/title/Title";
import css from '../homePage/HomePage.module.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



function DashboardPage(){
    const { isLoading, data } = useSelector((state) => state.houses)
    if(isLoading){
        return <Loader />
    }

    return (
        <div className="page">
            <Title position="center">Мои объявления</Title>
            <Link className="btn-primary" to="/create-ad">+ Create new ad</Link>
            <div className={css.cardsWrapper}>
            {data.length 
             ? data.map((item) => 
             <Card 
             key={item.id} 
             text={item.title} 
             price={item.price} 
             img={item.imgUrl}
             id={item.id}
             isAdmin={true}
             />)
             : <h1>Последних объявлений нет</h1>
        }
            </div>
            
        </div>
    )
}

export default DashboardPage