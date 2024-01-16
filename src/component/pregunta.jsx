import React from 'react';
import Swal from 'sweetalert2';

export default function Pregunta({ pregunta, onEliminar }) {

    const borrarPregunta = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡No podrás revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, bórralo!'
        }).then((result) => {
            if (result.isConfirmed) {
                onEliminar(pregunta.id);
                Swal.fire(
                    '¡Eliminado!',
                    'La pregunta ha sido eliminada.',
                    'success'
                );
            }
        });
    };
    return (
        <div className="card" style={{width: "18rem"}} >
            <button type="button" className="align-baseline btn-close " aria-label="Close" onClick={borrarPregunta}></button>
            <div className="card-body">              
                <h5 className="card-title">Pregunta nº{pregunta.id}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{pregunta.enunciado}</h6>
                <div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                <input type="radio" className="btn-check" name="btn-respuesta" id={`${pregunta.id}vbtn-radio1"`} autoComplete="off"></input>
                <label className="btn btn-outline-danger" htmlFor={`${pregunta.id}vbtn-radio1"`}>{pregunta.respuesta1}</label>
                <input type="radio" className="btn-check" name="btn-respuesta" id={`${pregunta.id}vbtn-radio2"`} autoComplete="off"></input>
                <label className="btn btn-outline-danger" htmlFor={`${pregunta.id}vbtn-radio2"`}>{pregunta.respuesta1}</label>
                <input type="radio" className="btn-check" name="btn-respuesta" id={`${pregunta.id}vbtn-radio3"`} autoComplete="off"></input>
                <label className="btn btn-outline-danger" htmlFor={`${pregunta.id}vbtn-radio3"`}>{pregunta.respuesta1}</label>
                <input type="radio" className="btn-check" name="btn-respuesta" id={`${pregunta.id}vbtn-radio4"`} autoComplete="off"></input>
                <label className="btn btn-outline-danger" htmlFor={`${pregunta.id}vbtn-radio4"`}>{pregunta.respuesta1}</label>
                </div>
            </div>
        </div>
    )

}




