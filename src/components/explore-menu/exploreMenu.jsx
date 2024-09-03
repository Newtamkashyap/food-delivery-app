import { menu_list } from './menuList';
import './exploreMenu.css';

export const ExploreMenu = ({category,setCategory}) => {

    return (
        <div className="explore-menu" id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes crafts with the finest ingredients and culinary expertise.Our mission is to satisfy your craving and elevate your dining experience,one delicious meal at a time</p>
            <div className='explore-menu-list'>
                {menu_list.map((obj,index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===obj.menu_name?"All":obj.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===obj.menu_name?"active":""} src={obj.menu_image} />
                            <p>{obj.menu_name}</p>

                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    )
}