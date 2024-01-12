import React, { createContext, useState } from 'react'
export const WishlistContext = createContext()

const WishlistProvider = ({children}) => {
    const [wishList, setWishList] = useState([])

    function addWishlist(item){
        wishList.findIndex((x)=>x.id===item.id)
    }

  return (
    <WishlistContext.Provider>
        {children}
    </WishlistContext.Provider>
  )
}

export default WishlistProvider