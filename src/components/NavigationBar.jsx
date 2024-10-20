import React from "react";
import {Link} from 'react-router-dom'

function NavigationBar() {
  return (
    <div className='text-center bg-weightedGray mt-8 mb-8 !sticky top-0 z-50'>
        <nav>
            {/* nav element pointing specific filtered news */}
          <ul className='flex justify-evenly h-7'>
                <li className="hover:underline hover:decoration-red-950 hover:decoration-4"><Link to='/category/general'>ALL</Link></li>
                <li className="hover:underline hover:decoration-red-950 hover:decoration-4"><Link to='/category/health'>HEALTH</Link></li>
                <li className="hover:underline hover:decoration-red-950 hover:decoration-4"><Link to='/category/entertainment'>ENTERTAINMENT</Link></li>
                <li className="hover:underline hover:decoration-red-950 hover:decoration-4"><Link to='/category/technology'>TECHNOLOGY</Link></li>
                <li className="hover:underline hover:decoration-red-950 hover:decoration-4"><Link to='/category/sports'>SPORTS</Link></li>
            </ul>
        </nav>
</div>
  )
}

export default NavigationBar


