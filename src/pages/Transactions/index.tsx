import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width={"50%"}>Site development</td>
              <td>
                <PriceHighlight variant="income">R$ 15.000,00</PriceHighlight>
              </td>
              <td>Sales</td>
              <td>12/12/2021</td>
            </tr>
            <tr>
              <td width={"50%"}>Pão de queijo</td>
              <td>
                <PriceHighlight variant="outcome">R$ 5,00</PriceHighlight>
              </td>
              <td>Food</td>
              <td>12/12/2021</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
