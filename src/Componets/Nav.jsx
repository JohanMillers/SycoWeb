
const Nav = () => {
    return (
        <div className="container-fluid px-0 Nap">
            <div className="row mx-0 dimesion">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse px-0">
                    <div class="position-sticky pt-3 sidebar-sticky p-2 fs-4 t">
                        <ul className="list-unstyled ps-0 text-white">
                            <li className="mb-1">
                                <button className="fs-5 btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#dashboard-collapse"
                                        aria-expanded="false">
                                Cartera de Clientes
                                </button>
                                <div className="collapse" id="dashboard-collapse ">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="{% url 'gestion clientes' %}" className="link-dark d-inline-flex text-decoration-none rounded">Gestión de Clientes</a></li>
                                    <li><a href="{% url 'gestion tipo cliente' %}" className="link-dark d-inline-flex text-decoration-none rounded">Tipos de Clientes</a></li>
                                    <li><a href="{% url 'gestion tipo documento' %}" className="link-dark d-inline-flex text-decoration-none rounded">Gestión de Documentos</a></li>
                                </ul>
                                </div>
                            </li>

                            <li className="mb-1">
                                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fs-5"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#home-collapse"
                                        aria-expanded="false">
                                Productos & Servicios
                                </button>

                                <div className="collapse" id="home-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="{% url 'gestion impuestos'%}" className="link-dark d-inline-flex text-decoration-none rounded">Gestión de Impuestos</a></li>
                                    <li><a href="{% url 'gestion categorias' %}" className="link-dark d-inline-flex text-decoration-none rounded">Gestión de Categorías</a></li>
                                    <li><a href="{% url 'gestion servicios' %}" className="link-dark d-inline-flex text-decoration-none rounded">Gestión de Servicios</a></li>
                                    <li><a href="{% url 'gestion productos' %}" className="link-dark d-inline-flex text-decoration-none rounded">Gestión de Productos</a></li>
                                </ul>
                                </div>
                            </li>
                            <li class="mb-1">
                                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fs-5"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#orders-collapse"
                                        aria-expanded="false">
                                Facturación
                                </button>
                                <div className="collapse" id="orders-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="{% url 'gestion cotizaciones' %}" className="link-dark d-inline-flex text-decoration-none rounded">Gestión de Cotizaciones</a></li>
                                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Processed</a></li>
                                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Shipped</a></li>
                                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Returned</a></li>
                                </ul>
                                </div>
                            </li>

                        <li class="border-top my-3"></li>
                            <li className="mb-1">
                                <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fs-5"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#account-collapse"
                                    aria-expanded="false">
                                Account
                                </button>

                                <div class="collapse" id="account-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">New...</a></li>
                                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Profile</a></li>
                                    <li><a href="#" className="link-dark d-inline-flex text-decoration-none rounded">Settings</a></li>
                                    <li><a href="{% url 'signout' %}" className="link-dark d-inline-flex text-decoration-none rounded">Sign out</a></li>
                                </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main className="col-md-10 mx-0 col-lg-10 nota">
                    
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Dashboard</h1>
                    </div>

                    {/* <div style="height: 82vh; overflow-y: auto;">
                    
                    </div> */}
                </main>
            </div>
            </div>

    
  )
}

export default Nav