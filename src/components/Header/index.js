import Nav from "../Nav";
import "./style.css";

function Header({ currentPage, handlePageChange }) {

    return (
        <div className="header">
            <section>
                <header className="d-flex justify-content-around py-2">
                    <div>
                        <h1>Kida's Portfolio</h1>
                    </div>
                    <div>
                        <Nav
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                        ></Nav>
                    </div>
                </header>
            </section>
            <section className="text-center">
                <div>
                    <p className="bg-image">
                        Welcome to Kida's portfolio page built with React.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Header;