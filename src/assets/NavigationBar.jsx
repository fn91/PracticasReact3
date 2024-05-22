import {Link, Outlet} from "react-router-dom";


function NavigationBar ()  {


    

  return (


<nav  className="navbar">

<ul className="navbar-list">
<li  className="navbar-item">
    <Link to="/" className="navbar-link">
        Inicio
    </Link>
</li>
<li className="navbar-item">
<Link to="/products " className="navbar-link">
Productos
</Link>
</li>
<li className="navbar-item">
<Link to="/profile" className="navbar-link"></Link>
Perfil

</li>



</ul>


</nav>







  )

}

export default NavigationBar