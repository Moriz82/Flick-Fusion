import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'; // Make sure to create a corresponding CSS file

class Header extends React.Component<{ title: any }> {
    render() {
        let {title} = this.props;
        return (
            <header className="header">
                <div className="logo">
                    <img src={"/favicon.ico"} alt={title} className="card-image"/>
                </div>
                <h1 className="header-title">{title}</h1>
                <div className="search-container">
                    <input type="text" placeholder="Search movies and TV shows..." className="search-input"/>
                </div>
                <Link to="/movies" className="header-link">Movies</Link>
                <Link to="/tvshows" className="header-link">TV Shows</Link>
            </header>
        );
    }
}

export default Header;