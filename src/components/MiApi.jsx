import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import Nav from "./nav";


const MiApi = () => {
    const [info, setInfo] = useState([])
    const [buscador, setBuscador] = useState("")
    

    const searchDate = (e) => {
        setBuscador(e.target.value)
    }

    useEffect(() => {
        consultarApi();
    }, [])

    const consultarApi = async () => {
        const url = 'https://api.victorsanmartin.com/feriados/en.json'
        const resp = await fetch(url)
        const data = await resp.json()
        setInfo(data.data)
    }
    return (
        <div>
            <Nav searchDate={searchDate} />
            <div class="boxes">
                {info.filter(
                    (dia) => {
                        return dia.title.toLowerCase().includes(buscador.toLowerCase())
                    }
                ).map((feriado) =>
                    <div class="box">
                        <div class="item" key={feriado.date}>
                            <div>
                                <h5>{feriado.title}</h5></div>
                                <p className="card-title ">{feriado.date}</p>
                                <p className="card-text ">{feriado.extra}</p>
                        </div>
                    </div>

                ).reverse()}
            </div>
        </div>
    )

}
export default MiApi