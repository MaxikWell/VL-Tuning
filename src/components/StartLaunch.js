import React, {useEffect, useRef} from 'react'
import Button from './UI/Button'
import bgImgStart from '../assets/images/home/startBg.jpg'

const StartLaunch = ({goFindStuff}) => {

    const mainText = useRef()
    const mainButton = useRef()

    const backgroundStyles = {
        backgroundImage: `url(${bgImgStart})`
    }

    useEffect(() => {
        mainText.current.classList.add("loadedMainContent")
        mainButton.current.classList.add("loadedButton")
    },[])

    return(
        <section className = "startScreen" style = {backgroundStyles}>
                        <div className = "row h-100">
                            <div className = "col-6 rightImageSection"></div>
                            <div className = "col-6 leftTextSection" ref = {mainText}>
                                <div className = "titleContainer">
                                    <h1>VL-Tuning</h1>
                                    <p>Lorem ipsum</p>
                                </div>
                            </div>
                        </div>
                        <div className = "startButton" ref = {mainButton}>
                            <Button 
                                onClickAction = {goFindStuff}
                            >See more</Button>
                        </div>
        </section>
    )
}

export default StartLaunch