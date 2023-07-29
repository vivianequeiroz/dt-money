import { createContext, ReactNode, useEffect, useState } from 'react';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string
}

interface TransactionContext {
  transactions: Transaction[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

const TransactionContext = createContext({} as TransactionContext)

const baseURL = 'http://localhost:3333/transactions';

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch(baseURL);
    const data = await response.json();

    setTransaction(data);
  }

  useEffect(() => {
    loadTransactions();
  }, [])

  return (
    <TransactionContext.Provider value={{transactions: []}}>
      {children}
    </TransactionContext.Provider >
  )
}