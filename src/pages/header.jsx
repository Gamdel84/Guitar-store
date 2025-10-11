import { Link } from "react-router-dom"
function Header() {
    return (
        <>
        <header>
            <Link to= "/"><img className='logo' src="/img//perillas.png" alt="Logo" />
            <h1>Guitar Store</h1></Link>
        </header>
        </>
    )
}
export default Header