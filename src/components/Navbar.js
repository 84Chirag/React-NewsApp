import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
    useEffect(() => {
        const totop = () => {
            if (window.scrollY > 10) {
                document.querySelector('.screenup').style.display = 'block';
            } else {
                document.querySelector('.screenup').style.display = 'none';
            }
        };
        
        window.addEventListener('scroll', totop);

        return () => {
            window.removeEventListener('scroll', totop);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/general">Hot Newapp</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mob-1" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/general">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                    </ul>
                    <button type='button' onClick={props.togglemode} className='btn btn5'>
                        {props.mode === 'dark' ? (
                            <FontAwesomeIcon icon={faSun} />
                        ) : (
                            <FontAwesomeIcon icon={faMoon} />
                        )}
                    </button>
                </div>
            </nav>
            <footer className='screenup' onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} color='red' size='xl' />
            </footer>
        </>
    );
};

export default Navbar;
