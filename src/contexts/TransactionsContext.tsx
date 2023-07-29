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
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContext)

const baseURL = new URL('http://localhost:3333/transactions');

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransaction] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    baseURL.searchParams.delete('q');
    
    if (query) {
      baseURL.searchParams.append('q', query)
    }

    const response = await fetch(baseURL);
    const data = await response.json();

    setTransaction(data);
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions
    }}>
      {children}
    </TransactionsContext.Provider >
  )
}