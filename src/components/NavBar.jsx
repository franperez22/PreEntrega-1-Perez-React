import { NavLink } from "react-router-dom";

export default function NavBar () {
  const routes = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'About',
      path: '/about',
    },
    {
      id: 3,
      name: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <nav className="flex justify-center">
      <div className="container flex justify-between items-center py-8">
        <div>
          <img className="w-20" src="/images/logoCospe.png" alt="logo" />
        </div>
        <ul className="list-none flex gap-4 justify-center items-center">
          {routes.map(route => (
            <li className="" key={route.id}>
              <NavLink to={route.path}>{route.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>  
  )
}