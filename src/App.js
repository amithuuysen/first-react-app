import './App.css';
import face from "./image-face.png";

const iconList = [
    { id: 1, icon: "home icon", active: 1 },
    { id: 2, icon: "info circle icon", active: 0 },
];
function ReturnIcons() {
    return (
        <div className="navbar-icons">
            {iconList.map((iconObj) => (
                <div
                    className={
                        iconObj.active ? "navbar-icon active" : "navbar-icon"
                    }
                    key={iconObj.id}
                >
                    <i className={iconObj.icon}></i>
                </div>
            ))}
        </div>
    );
}
function App() {
    return (
        <div className="content">
            <div className="navbar">
                <ReturnIcons />
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
            </div>
            <div className="content-hire"></div>
            <div className="content-exp"></div>
        </div>
    );
}

export default App;
