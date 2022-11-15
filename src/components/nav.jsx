import React from "react"

const Nav = ({searchDate}) => {
    return (
        <div class="navbar">
                    <p class="titulo">Buscar Dias feriados </p>
                    <form >
                        <input class="inputs" type="search" name="busqueda" placeholder="Search" aria-label="Search" onChange={searchDate} />
                        
                    </form>
                </div>

          
    )
}
export default Nav