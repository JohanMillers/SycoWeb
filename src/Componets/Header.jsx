

const Header = () => {
  return (
    <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow Bg">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-4 text-white" href="#">Company name</a>
      <button className="navbar-toggler position-absolute d-md-none collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        </header>

     
  )
}

export default Header