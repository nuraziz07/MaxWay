import NavItem from '/src/assets/png/light.png'
import '/src/App.css'

const NavBar = () => {
    return (
        <div className={'container_mobile bg-none  w-full flex justify-center'}>
            <img src={NavItem} className={'w-full'} alt=""/>
        </div>
    );
};

export default NavBar;