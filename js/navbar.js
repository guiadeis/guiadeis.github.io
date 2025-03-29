export const GetNavbar = (active) =>
{
    let navbar = `
        <div class="container">
            <a class="navbar-brand" href="/"><img width="24px" class="me-2" src="/assets/logo.png"> Guía de IS</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mainNavbar">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    `;
    if(active == "inicio")
    {
        navbar += `
                        <li class="nav-item"><a class="nav-link active" href="/">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="/online/">Leer online</a></li>
                        <li class="nav-item"><a class="nav-link" href="/recursos/">Recursos</a></li>
                    </ul>
                </div>
            </div>`
        ;
    }
    else if(active == "leerOnline")
    {
        navbar += `
                        <li class="nav-item"><a class="nav-link" href="/">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link active" href="/online/">Leer online</a></li>
                        <li class="nav-item"><a class="nav-link" href="/recursos/">Recursos</a></li>
                    </ul>
                </div>
            </div>`
        ;
    }
    else if(active == "recursos")
    {
        navbar += `
                        <li class="nav-item"><a class="nav-link" href="/">Inicio</a></li>
                        <li class="nav-item"><a class="nav-link" href="/online/">Leer online</a></li>
                        <li class="nav-item"><a class="nav-link active" href="/recursos/">Recursos</a></li>
                    </ul>
                </div>
            </div>`
        ;
    }

    $('.navbar').html(navbar);
}
