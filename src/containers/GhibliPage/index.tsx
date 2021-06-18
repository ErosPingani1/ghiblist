import React from "react";
import { useEffect } from "react";
import { store } from "../..";

export const Ghibli: React.FC = () => {

  /** Metodo che esegue il dispatch dell'action getMovies che recupera i dati dei film
   * (creato con useCallback in quanto inserito come param di useEffect)
   */
  const getMoviesList = React.useCallback(() => {
    store.dispatch({ type: 'ghibli/getMovies' });
  }, []);

  /**
   * Evento di lifecycle eseguito al mount del componente pagina (grazie all' []).
   * Questo esegue la action di getMoveList che lancia il servizio saga
   */
  useEffect(() => {
    getMoviesList();
  }, [getMoviesList]);

  return(
    <>
      <div>
        <h1>Studio Ghibli collection</h1>
        { store.getState().movies.length < 1 ? <h3>No movies available!</h3> : <h2>A lot of movies!</h2> }
      </div>
    </>
  );

}
export default Ghibli;