import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Description" required />
          <input type="text" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <button type="submit">Save</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
