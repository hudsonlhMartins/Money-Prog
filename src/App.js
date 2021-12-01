import Modal from 'react-modal'
import { useState } from 'react';

import {GlobalStyle} from'./styles/global'
import Header from './components/Header';
import Dashboard from './components/Deshboard';
import NewTransactionModal from './components/NewTransactionModal'
import TransactionsProvider from './hooks/TransactionsContext';


import {ThemeProvider} from 'styled-components'
import light from'./styles/themes/light'
import dark from'./styles/themes/dark'
import usePersitedState from './hooks/usePersitedState';


Modal.setAppElement('#root')

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  const [theme, setTheme] = usePersitedState('theme', light)

  const handleOpenNewTransactionModal = ()=>{
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = ()=>{
    setIsNewTransactionModalOpen(false)
  }


  const toggleTheme = ()=>{
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>
          <Header 
            handleOpenNewTransactionModal={handleOpenNewTransactionModal}
            toggleTheme={toggleTheme}
          />


          <NewTransactionModal 
            isNewTransactionModalOpen={isNewTransactionModalOpen} 
            handleCloseNewTransactionModal={handleCloseNewTransactionModal}
          />

          <Dashboard/>
          <GlobalStyle/>
      </TransactionsProvider>
    </ThemeProvider>
  );
}

export default App;
