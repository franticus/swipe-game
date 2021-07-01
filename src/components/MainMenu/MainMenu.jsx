import React, {useState} from 'react';
import classes from './MainMenu.module.css'
import TopScores from "./TopScores/TopScores";
import Info from "./Info/Info";
import Settings from "./Settings/Settings";

const MainMenu = ({
                      setIsStarted, setIsFinished,
                      name, setIsLogin, counter, topScores
                  }) => {

    const [menu, setMenu] = useState(true)
    const [scores, setScores] = useState(false)
    const [info, setInfo] = useState(false)
    const [settings, setSettings] = useState(false)
    const [back, setBack] = useState(false)

    const resetMenu = () => {
        setMenu(true)
        setScores(false)
        setInfo(false)
        setSettings(false)
        setBack(false)
    }
    const switchMenuHandler = (e) => {
        switch (e.target.id) {
            case 'start':
                setIsStarted(true)
                setIsFinished(false)
                console.log('false finish')
                setMenu(false)
                return
            case 'scores':
                setMenu(false)
                setScores(true)
                setBack(true)
                return
            case 'info':
                setMenu(false)
                setInfo(true)
                setBack(true)
                return
            case 'settings':
                setMenu(false)
                setSettings(true)
                setBack(true)
                return
            case 'exit':
                setIsLogin(false)
                return
            case 'back':
                return resetMenu()
            default:
                setIsStarted(false)
        }
    }

    return (
        <>
            {menu &&
            <div className={classes.MainMenu}>
                <ul className={classes.list}
                    onClick={switchMenuHandler}
                >
                    <li>{name}</li>
                    <br/>
                    <li id='start'>Start Game</li>
                    <li id='scores'>Top Scores</li>
                    <li id='info'>Info</li>
                    <li id='settings'>Settings</li>
                    <li id='exit'>Exit</li>
                </ul>
            </div>}

            {scores && <TopScores name={name}
                                  topScores={topScores}
                                  counter={counter}
            />}
            {info && <Info/>}
            {settings && <Settings/>}
            {back && <p className={classes.backBtn}
                        id='back'
                        onClick={switchMenuHandler}
            >Back</p>}
        </>
    );
};

export default MainMenu;
