"use client";

const Footer = () => {
    return (
        <footer className="footer flex flex-col sm:flex-row bg-neutral text-neutral-content items-center p-4">
            <aside className="flex items-center gap-2">
                <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="fill-current">
                    <path d="M22.672 15.226l-2.432..."></path>
                </svg>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>

            <nav className="flex gap-4 sm:ml-auto">
                <a href="#">
                    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883..."></path>
                    </svg>
                </a>

                <a href="#">
                    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604..."></path>
                    </svg>
                </a>

                <a href="#">
                    <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5..."></path>
                    </svg>
                </a>
            </nav>
        </footer>
    );
};

export default Footer;