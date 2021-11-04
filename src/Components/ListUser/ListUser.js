import React, { useEffect,useState } from 'react'
import axios from 'axios'
import UserCard from '../UserCard/UserCard'
import "./ListUser.css"
import BtnSlider from '../BtnSlider'
function ListUser() {
        const [user, setUser] = useState([])
            useEffect(() => {
                axios.get ('https://jsonplaceholder.typicode.com/users')
                .then((res) => setUser(res.data))
                .catch(err => console.log(err));
                
            }, []) 
        /////////////////////////////////////////////////
        const [slideIndex, setSlideIndex] = useState(1)

        const nextSlide = () => {
            if(slideIndex !== user.length){
                setSlideIndex(slideIndex + 1)
            } 
            else if (slideIndex === user.length){
                setSlideIndex(1)
            }
        }
    
        const prevSlide = () => {
            if(slideIndex !== 1){
                setSlideIndex(slideIndex - 1)
            }
            else if (slideIndex === 1){
                setSlideIndex(user.length)
            }
        }
    
        const moveDot = index => {
            setSlideIndex(index)
        }
 
        ////////////////////////////////////////////////
          

 
    return (

        <div className="container-slider">
        {user.map((user, index) => {
            return (
                <div
                key={user.id}
                className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                >
                    <div className="usercards">
                        { <UserCard user={user}/> }
                    </div>

                </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className="container-dots">
            {Array.from({length: 10}).map((item, index) => (
                <div 
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
            ))}
        </div>
        </div>
    )
}

export default ListUser
