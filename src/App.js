
import './App.css';
import './component/formularioPregunta'
import FormularioPregunta from './component/formularioPregunta';
import PreguntaCreada from './component/preguntaCreada';
import { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const  CharactersContext = createContext();
function App() {
  let idActualPregunta = 1
  const [preguntas, setPreguntas] = useState([]);

  const addQuestion = (nueva) => {

    nueva.id = idActualPregunta;
    idActualPregunta++;
    setPreguntas([...preguntas, nueva]);
  }
  <QuestionProvider>
    <App />
</QuestionProvider>

  const borrarpregunta = (id) => {
    setPreguntas(preguntas.filter(p => p.id !== id));
  };

  return (
    <div>
      <FormularioPregunta
        aniadePregunta={addQuestion}
      ></FormularioPregunta>

      <PreguntaCreada
        preguntas={preguntas}
      ></PreguntaCreada>

    </div>
  )
}


export default App;
