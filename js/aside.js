export const aside_elements = [
    {
        id: "inicio"
        ,link: "/online/index.html"
        ,text: "Inicio"
    }
    ,{
        id: "cap1"
        ,link: "/online/cap1/index.html"
        ,text: "1. Introducci&oacute;n a la Ingenier&iacute;a de Sistemas"
    }
    ,{
        id: "cap2"
        ,link: "/online/cap2/index.html"
        ,text: "2. Ciencia de Sistemas y Pensamiento Sist&eacute;mico"
    }
    ,{
        id: "cap3"
        ,link: "/online/cap3/index.html"
        ,text: "3. Ciclo de Vida de Sistemas"
    }
    ,{
        id: "cap4"
        ,link: "/online/cap4/index.html"
        ,text: "4. Modelo ISO 15288"
    }
    ,{
        id: "cap5"
        ,link: "/online/cap5/index.html"
        ,text: "5. Representando Sistemas con Modelos"
    }
    ,{
        id: "cap6"
        ,link: "/online/cap6/index.html"
        ,text: "6. Campos y Dominio de la Ingenier&iacute;a de Sistemas"
    }
    ,{
        id: "cap7"
        ,link: "/online/cap7/index.html"
        ,text: "7. Tendencias, Desaf&iacute;os y Futuro"
    }
    ,{
        id: "cap8"
        ,link: "/online/cap8/index.html"
        ,text: "8. Recursos Adicionales"
    }
    ,{
        id: "cap9"
        ,link: "/online/cap9/index.html"
        ,text: "9. Ejemplos de Implementaci&oacute;n"
    }
    ,{
        id: "bibliografia"
        ,link: "/online/bibliografia/index.html"
        ,text: "Bibliograf&iacute;a"
    }
];

export const GetAside = (active) =>
{
    for(let aside of aside_elements)
    {
        if(active == aside.id)
        {
            $('#aside_contents').append($(`
                <li class="nav-item">
                    <a class="nav-link active text-white text-decoration-underline" aria-current="page" href="${aside.link}">
                        ${aside.text}
                    </a>
                </li>
            `));
        }
        else
        {
            $('#aside_contents').append($(`
                <li class="nav-item">
                    <a class="nav-link text-white" aria-current="page" href="${aside.link}">
                        ${aside.text}
                    </a>
                </li>
            `));
        }
    }
}
