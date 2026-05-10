const solutionCode1 = `
//App.js

import Sidebar from './Sidebar'
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <h1 className="title">My React App</h1>
        <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className="btn">Explore now</button>
      </div>
    </div>
  )
}

export default App

`;

const solutionCode2 = `
//Sidebar.js

import SidebarItem from "./SidebarItem"
import items from "./sidebar.json"


export default function Sidebar(){
    return (
        <div className="sidebar">
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}
`;

const solutionCode3 = `
//SidebarItem.js

import { useState } from "react"

export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span> 
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                { item.icon && <i className={item.icon}></i> }
                {item.title}
            </a>
        )
    }
}
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default [solutionCode1, solutionCode2,solutionCode3];