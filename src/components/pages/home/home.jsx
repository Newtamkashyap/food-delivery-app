import { useState } from 'react';
import { ExploreMenu } from '../../explore-menu/exploreMenu';
import { Header } from '../../header/header';
import './home.css';
import FoodDisplay from '../../foodDisplay/foodDisplay';
import AppDownload from '../../app-download/appDownload';


export const Home = () => {

    const[category,setCategory]=useState("All");
    return (
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
            <AppDownload/>
        </div>
    )
}