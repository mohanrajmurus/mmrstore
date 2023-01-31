import React, {    useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Signin from "./Signin";
import SignOut from "./SignOut";
import "../css/navbar.css";
import "../css/sign.css";

function Navbar() {
  const user = useSelector(state =>  state.user)
  const cartData = useSelector(state => state.cart)
  const [mobileMenu, setMobileMenu] = useState(true)
  const dispatch = useDispatch()
  return (
    <>
      <nav >
            <div className='mobile__menu' onClick={()=> setMobileMenu(!mobileMenu)}>
                {mobileMenu ? <MdMenu className='menu__open'/>:<MdOutlineClose className='menu__close'/>}
            </div>
            <div className='nav__logo'>
                <Link to={'/'} className='logo__img'>
                    <img src={logo} alt='logo' />
                </Link>
                <Link to={'/'} className='logo__mobile'>
                    <h1>MMR</h1>
                </Link>
            </div>
            <div className="search__bar">
              <input type="text" name="search bar" placeholder='search products' onChange={(e)=> dispatch({
                type: 'SEARCH_BY_NAME',
                payload: e.target.value.toLocaleLowerCase()
              })} />
            </div>
            <div className='nav__user'>
            <div className={mobileMenu?'nav__auth':'nav__auth nav__auth__mobile'} onClick={()=> setMobileMenu(true)}>
                {user ? <SignOut /> :<Signin />}

            </div>
            <div className='nav__cart'>
                <Link to={'/cart'}>
                    <FaShoppingCart  />({cartData.length})
                </Link>
            </div>
            </div>
        </nav>
     {/*  <nav className='nav__bar'>
  const user = useSelector((state) => state.user);
  const cartData = useSelector((state) => state.cart);
  const [mobileMenu, setMobileMenu] = useState(true);
  console.log(user);
  return (
    <>
      <nav>
        <div
          className="mobile__menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? (
            <MdMenu className="menu__open" />
          ) : (
            <MdOutlineClose className="menu__close" />
          )}
        </div>
        <div className="nav__logo">
          <Link to={"/"} className="logo__img">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav__user">
          <div
            className={mobileMenu ? "nav__auth" : "nav__auth nav__auth__mobile"}
          >
            {user ? <SignOut /> : <Signin />}
          </div>
          <div className="nav__cart">
            <Link to={"/cart"}>
              <FaShoppingCart />({cartData.length})
            </Link>
          </div>
        </div>
      </nav>
      {/*  <nav className='nav__bar'>

        {isOpen ? <span className='nav__menu__bar' onClick={()=>{setIsOpen(!isOpen)}}><GiHamburgerMenu/></span>:<span className='nav__menu__bar nav__menu__bar__close' onClick={()=>{setIsOpen(!isOpen)}}><AiOutlineClose /></span>}
        <div className='nav__logo'>
          <Link to={'/'} className='logo__img'>
          <img src={logo} alt='logo' />
          </Link>
          <Link to='/' className='logo'>MMR Store</Link>
        </div>
        <ul className={isOpen ? 'nav__items ': 'nav__items nav__items__mobile'}>
          <li>
            <Link to='/electronics'>Electronics</Link>
          </li>
          <li>
            <Link to='/mens'>Mens</Link>
          </li>
          <li>
            <Link to='/womens'>Women</Link>
          </li>
          <li>
            <Link to='/jewelery'>Jewelery</Link>
          </li>
          <li>
            <Link to='/products'>All Products</Link>
          </li>
        </ul>
        <div className='signin'>
          <div>
            {user ? <SignOut/> :<Signin />}
          </div>
          <div className='nav__cart' onClick={()=>{setIsCartOpen(!isCartOpen)}}>
            <Link to={'/cart'}>
              <FaShoppingCart  />({cartData.length})
            </Link>
          </div>
        </div>

      </nav> */}
    </>
  );
}

export default Navbar;
