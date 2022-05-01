import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/navbar";
import { useDispatch, useSelector } from 'react-redux';
import { getMovies, getSucursales, newTicket } from "../redux/actions";


export default function AddTickets(){

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        numero: "",
        fecha_hora: "",
        precio: 0,
        descuento: 0,
        numero_sala: "" ,
        peliculaId: "",
        sucursalId: ""
    });
    const movies = useSelector(state => state.movies);
    const sucursales = useSelector(state => state.sucursales);

    useEffect(() => {
        dispatch(getMovies());
        dispatch(getSucursales());
    }, []);

    const handleChangeInput = async (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        console.log(input);
    }

    const handleChangeMovie = async (e) => {
        e.preventDefault();
        setInput({
            ...input,
            peliculaId: e.target.value 
        });
        console.log(input);
    }

    const handleChangeSucursal = async (e) => {
        e.preventDefault();
        setInput({
            ...input,
            sucursalId: e.target.value 
        });
        console.log(input);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(newTicket(input));
    }

    return(
        <div>
            <NavBar/>
            <form onSubmit={handleSubmit}>
                <label>Número</label>
                <input onChange={handleChangeInput} name="numero" value={input.numero}/>

                <label>Fecha y Hora</label>
                <input onChange={handleChangeInput} name="fecha_hora" value={input.fecha_hora}/>

                <label>Precio</label>
                <input onChange={handleChangeInput} name="precio" value={input.precio}/>

                <label>Descuento</label>
                <input onChange={handleChangeInput} name="descuento" value={input.descuento}/>

                <label>Número de sala</label>
                <input onChange={handleChangeInput} name="numero_sala" value={input.numero_sala}/>
                
                <select onChange={handleChangeMovie}>
                    <option defaultValue>Movie</option>
                    {
                        movies?.map(m => {
                            return(
                                <option value={m.id}>{m.nombre}</option>
                            )
                        })
                    }
                </select>

                <select onChange={handleChangeSucursal}>
                    <option defaultValue>Sucursal</option>
                    {
                        sucursales?.map(s => {
                            return(
                                <option value={s.id}>{s.pais}, {s.provincia}, {s.ciudad}</option>
                            )
                        })
                    }
                </select>

                <button type="submit">GUARDAR</button>
            </form>
        </div>
    )
}