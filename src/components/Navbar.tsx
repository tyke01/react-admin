// import "../App.css"

const Navbar = () => {
  return (
    <nav className="w-full p-5 flex justify-between">
        <div className="logo flex gap-2 items-center font-bold">
            <img src="logo.svg" alt="logo" />
            <span>Vikadmin</span>
        </div>

        <div className="icons flex items-center gap-5">

            <img src="/search.svg" alt="search" className="link"/>
            <img src="/app.svg" alt="app" className="link"/>
            <img src="/expand.svg" alt="expand" className="link"/>

            <div className="notifty relative link" >
                <img src="/notifications.svg" alt="notification" />
                <span className="absolute -top-3 -right-2 bg-red-600 w-4 h-4 flex items-center justify-center text-xs rounded-full">1</span>
            </div>

            <div className="user flex items-center link gap-2">
                <img src="https://images.pexels.com/photos/163347/war-desert-guns-gunshow-163347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="profile" className="w-6 h-6 rounded-full object-cover"/>
                <span>Viki</span>
            </div>

            <img src="/settings.svg" alt="settings" className="link"/>
        </div>
    </nav>
  )
}

export default Navbar