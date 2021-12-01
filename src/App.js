import Modal from 'react-modal'
import { useState } from 'react';

import {GlobalStyle} from'./styles/global'
import Header from './components/Header';
import Dashboard from './components/Deshboard';
import NewTransactionModal from './components/NewTransactionModal'
import TransactionsProvider from './hooks/TransactionsContext';


Modal.setAppElement('#root')

function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)


  const handleOpenNewTransactionModal = ()=>{
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = ()=>{
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
        <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal}/>

        <NewTransactionModal 
          isNewTransactionModalOpen={isNewTransactionModalOpen} 
          handleCloseNewTransactionModal={handleCloseNewTransactionModal}
        />

        <Dashboard/>
        <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;
