import React from 'react'
import {
    Link
} from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-green-600 shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">
                    <Link to="/" className="text-2xl text-white hover:text-green-900 no-underline text-grey-darkest hover:text-blue-dark">QuranKu</Link>
                    <Link to="/favorite" className="pl-4 text-lg no-underline text-white hover:text-green-900 text-grey-darkest hover:text-blue-dark ml-2">Favorite</Link>
                </div>
            </nav>
        )
    }
}

export default NavBar