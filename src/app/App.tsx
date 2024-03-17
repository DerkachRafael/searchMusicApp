import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import clsx from 'clsx';
import { Stations } from 'features/Stations/StationList';
import { Header } from 'components/Header';

function App() {
    const { theme } = useTheme();

    return (
        <div className={clsx('app', theme)}>
            <Header />
            <Stations />
        </div>
    );
}

export default App;
