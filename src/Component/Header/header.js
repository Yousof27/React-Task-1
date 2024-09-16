import './header.css';

export default function Header() {
    return (
        <header>
            <div className="logo">
                <img src={require("../../Imgs/صور الصلاة على النبي محمد 2.jpg")} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href='gg'>Home</a></li>
                    <li><a href='gg'>Aboud</a></li>
                    <li><a href='gg'>Projects</a></li>
                    <li><a href='gg'>Content</a></li>
                </ul>
            </nav>
        </header>
    );
}