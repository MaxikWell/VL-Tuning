import React from 'react'
import {useSpring, animated} from 'react-spring'
import DropdownList from './UI/DropdownList'

const Step = ({type, index}) => {

    const animatedStep = useSpring({
        to: {opacity: 1, transform: "translateX(0)"},
        from: {opacity: 0, transform: "translateX(-100%)"}
    })

        return(
            <animated.div style = {animatedStep}>
                <h2 className = "mb-4">{index}. Choose <br /> <span className = "specialText">{type}</span></h2>
                <DropdownList 
                    valueType = {type}
                />
            </animated.div>
        )
}


export default Step