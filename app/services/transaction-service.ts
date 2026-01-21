import { fetchAPI } from "../lib/api";
import { Transaction } from "../types";

export const transactionCheckout = async (form: FormData): Promise<Transaction> =>{
   return await fetchAPI<Transaction>("/transactions/checkout",{
      method: "POST",
      body: form,
   })
}