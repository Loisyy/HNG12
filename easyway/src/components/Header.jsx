import "./Header.css"

export function Header() {
   return (
     <header className="header">
       <div className="container">
         <nav className="nav">
           <div className="logo">
             <img src="/logo1.png" className="logo-icon" alt="logo" /> 
             <span className="logo-text">EasyWay</span>
           </div>
           <div className="nav-links">
               <a href="#" className="nav-link">Create Events</a>
               <a href="#" className="nav-link">Find Tickets</a>
               <a href="#" className="nav-link">About Us</a>
               <button className="btn btn-outline">Get Started</button>
           </div>
         </nav>
       </div>
     </header>
   );
 }
 