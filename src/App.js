import { useState } from "react";
import "./App.css";
import face from "./image-face.png";

var navList = [
    { id: 1, icon: "home icon", active: 1 },
    { id: 2, icon: "info circle icon", active: 0 },
];

var statsList = [
    {
        id: 1,
        icon: "angle double up icon",
        header: "1.5",
        footer: "Years of Experience",
        color: "#cb9de3",
    },
    {
        id: 2,
        icon: "mail icon",
        header: "Contact",
        footer: "amithuuysen@gmail.com",
        color: "#4dd75b",
    },
    {
        id: 3,
        icon: "linkedin icon",
        header: "2",
        footer: "Languages Known",
        color: "#7fa5ff",
    },
];
function App() {
    const [iconJson, updateActive] = useState(navList);

    const changeActive = (id) => {
        iconJson.map((Obj) =>
            Obj.id === id ? (Obj.active = 1) : (Obj.active = 0)
        );
        updateActive([...iconJson]);
    };

    const ReturnNavs = () => {
        return (
            <div className="navbar-icons">
                {iconJson.map((iconObj) => (
                    <div
                        className={
                            iconObj.active
                                ? "navbar-icon active"
                                : "navbar-icon"
                        }
                        onClick={() => changeActive(iconObj.id)}
                        key={iconObj.id}
                    >
                        <i className={iconObj.icon}></i>
                    </div>
                ))}
            </div>
        );
    };

    const ReturnProfileStats = () => {
        return (
            <div className="profile-stats">
                {statsList.map((Obj) => (
                    <div className="stats">
                        <div
                            className="stats-icon"
                            style={{ color: Obj.color }}
                        >
                            <i className={Obj.icon}></i>
                        </div>
                        <div className="stats-desc">
                            <span className="desc-header">{Obj.header}</span>
                            <span className="desc-footer">{Obj.footer}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    };
    return (
        <div className="content">
            <div className="navbar">
                <ReturnNavs />
            </div>
            <div className="content-profile">
                <div className="profile-photo">
                    <img src={face} alt="" />
                </div>
                <div className="profile-label">
                    <div className="label-name">Amithu Uysen</div>
                    <div className="label-role">Full Stack Developer</div>
                </div>
                <hr className="profile-hr" />
                <ReturnProfileStats />
            </div>
            <div className="content-hire"></div>
            <div className="content-exp"></div>
        </div>
    );
}

export default App;
