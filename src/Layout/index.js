import React,{children} from 'react'
import Header from '../Header';

const Layout = ({children}) => (
    <div className="App">
        <Header/>
            {children}
     </div>
);


export default Layout