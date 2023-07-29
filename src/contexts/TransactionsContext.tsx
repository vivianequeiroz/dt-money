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

export const TransactionsContext = createContext({} as TransactionContext)

const baseURL = 'http://localhost:3333/transactions';

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  async function loadTransactions() {
    const response = await fetch(baseURL);
    const data = await response.json();

    setTransaction(data);
  }

  useEffect(() => {
    loadTransactions();
  }, [])

  return (
    <TransactionsContext.Provider value={{transactions}}>
      {children}
    </TransactionsContext.Provider >
  )
}