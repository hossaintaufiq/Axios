


const Navbar = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/products/:productId', name: 'ProductDetail' },
        { id: 5, path: undefined, name: 'NotFound' }, 
      ];


    return (
        <nav>

            <ul className="flex justify-around">
                
            {
                routes.map(route=><li key={route.id}><a href={route.path}>{route.name}</a></li>)
            }

            </ul>


        </nav>
    );
};

export default Navbar;