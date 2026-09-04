import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSearchView } from '../utils/searchSlice'
import { changeLanguage } from '../utils/configSlice'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showSearch = useSelector(store => store.search.showSearchView);

  const handleSearchClick = () => {
    dispatch(toggleSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error("Sign out failed:", error);
    });
  };

  return (
    <div className='absolute w-full px-4 md:px-8 py-2 md:py-4 bg-gradient-to-b from-black flex justify-between items-center z-20'>
         <img src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAUkLCBtHBbguPPqzaFOzEv4Pw_eS79j0y7ADR4hkB30-HkahpsUb5yvfzgKsfU2oNda-7hpkfYLnXhjc23JVT07PHsGgfsaHAB7qOhy2_5gn-nuKOVSUSBzn-i-O3ea2QQaXx3PYkHes.svg"
         alt="logo" className='w-24 md:w-44'/>
         {user && (
           <div className='flex items-center gap-2 md:gap-4'>
             {showSearch && (
               <select className='p-1 md:p-2 bg-gray-900/80 text-white text-xs md:text-base rounded-md border border-gray-600 focus:outline-none' onChange={handleLanguageChange}>
                 <option value="en">English</option>
                 <option value="hi">Hindi</option>
                 <option value="es">Spanish</option>
               </select>
             )}
            <button onClick={handleSearchClick} className='py-1 px-2 md:py-2 md:px-4 text-white cursor-pointer bg-purple-600 hover:bg-purple-700 transition-colors rounded-md text-xs md:text-base font-semibold'>{showSearch ? "Home" : "Search"}</button>
             <button
               onClick={handleSignOut}
               className='bg-[#E50914] text-white font-semibold px-2 py-1 md:px-4 md:py-2 rounded-md cursor-pointer hover:bg-red-700 transition-colors text-xs md:text-base'
             >
               Sign Out
             </button>
           </div>
         )}
    </div>
  )
}

export default Header
