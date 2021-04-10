import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';
import PerspectiveDecoration from './components/PerspectiveDecoration';

function App() {
    return (
        <>
            <PerspectiveDecoration />
            <CharacterEditor />
            <Footer />
        </>
    );
}

export default App;
