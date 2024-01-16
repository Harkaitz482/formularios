import React from 'react';
import Pregunta from './pregunta';

const PreguntasCreadas = ({ preguntas, setPreguntas }) => {

    const eliminarPregunta = id => {
        setPreguntas(prev => prev.filter(p => p.id !== id));
    };

    return (
        <div>
            <ul className="list-group">
                {preguntas.map(p => (
                    <Pregunta key={p.id} pregunta={p} onEliminar={eliminarPregunta} />
                ))}
            </ul>
        </div>
    );
};

export default PreguntasCreadas;
