/* eslint-disable jsx-a11y/anchor-is-valid */
import "./MyFooter.css";

export default function MyFooter() {
    return (
        <footer className="container-fluid py-5 my-5">

            {/* footer links */}
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item">
                    <a href="#" className="nav-link px-3">
                        Features
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-3">
                        Partners
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-3">
                        FAQ
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link px-3">
                        Contacts
                    </a>
                </li>
            </ul>

            {/* app author */}
            <p className="text-center">
                © Matteo Forni - Epicode 2023
            </p>
        </footer>
    );
}

