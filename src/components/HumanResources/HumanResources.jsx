import React from 'react'
import { Link } from 'react-router-dom';
import useApp from "../../hook/AppHook"
import Computer from "../../assets/Computer.png"
import User from "../../assets/User.png"
import Calendar from "../../assets/Calendar.png"
import { Fade, Zoom } from 'react-reveal'
import './HumanResources.css'


function HumonResources() {

    const { HumanResources } = useApp();

    return (
        <div className="human-resource-container">
            <Zoom>
                <h1 className='human-resource-title'>{HumanResources["HumanResourcesTitle"]}</h1>
            </Zoom>
            <div className="jobs">
                <Fade left>
                    <div className="window1" align="center">
                        <img src={Computer} alt="" />
                        <b>{HumanResources["Window1Title"]}</b>
                        <hr />
                        <img src={User} alt="" />
                        {HumanResources["Developers"]}
                        <br />
                        <img src={Calendar} alt="" />
                        {HumanResources["WindowFullTime"]}
                        <br />
                        <Link to="front-end">
                            <button className='job-button'>{HumanResources["Button"]}</button>
                        </Link>
                    </div>
                </Fade>
                <Fade down>
                    <div className="window2" align="center">
                        <img src={Computer} alt="" />
                        <b>{HumanResources["Window2Title"]}</b>
                        <hr />
                        <img src={User} alt="" />
                        {HumanResources["Developers"]}
                        <br />
                        <img src={Calendar} alt="" />
                        {HumanResources["WindowFullTime"]}
                        <br />
                        <Link to="flutter">
                            <button className='job-button'>{HumanResources["Button"]}</button>
                        </Link>
                    </div>
                </Fade>
                <Fade right>
                    <div className="window3" align="center">
                        <img src={Computer} alt="" />
                        <b>{HumanResources["Window3Title"]}</b>
                        <hr />
                        <img src={User} alt="" />
                        {HumanResources["Developers"]}
                        <br />
                        <img src={Calendar} alt="" />
                        {HumanResources["WindowFullTime"]}
                        <br />
                        <Link to="back-end">
                            <button className='job-button'>{HumanResources["Button"]}</button>
                        </Link>
                    </div>
                </Fade>
            </div>
        </div >
    )
}

export default HumonResources