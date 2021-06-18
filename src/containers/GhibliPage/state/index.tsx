/**
 * Definizione reducer componente ghibliPage che definisce lo stato di default (array di movies)
 * e gestisce le varie azioni intercettabili dal reducer
 * @param state - stato iniziale salvato nello store
 * @param action - azioni intercettate dal reducer
 */
function ghibliReducer(state = { movies: [] }, action: any): any {
  switch(action.type) {
    case 'ghibli/getMovies':
      console.log('Saga service call from reducer');
      return { 
        ...state 
      }
    default: {
      return {
        ...state
      }
    }
  }
};
export default ghibliReducer;