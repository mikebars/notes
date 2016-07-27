export const loadState = () => {
  try {
    const serializedState = localStorage.getItem( 'state' );
    if ( serializedState === null ) return {};
    return JSON.parse( serializedState );
  } catch ( error ) {
    console.error( 'localStorage loadState error: ', error );
    return {};
  }
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify( state );
    localStorage.setItem( 'state', serializedState );
  } catch ( error ) {
    console.error( 'localStorage saveState error: ', error );
  }
}