import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar bg-dark border-bottom border-body navbar-expand-md" data-bs-theme="dark">
                <div className="container">
                    <a className="navbar-brand" href="/">NARUTO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/prueba">Clanes</a>
                                <a className="nav-link active" aria-current="page" href="/villages">Aldeas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;