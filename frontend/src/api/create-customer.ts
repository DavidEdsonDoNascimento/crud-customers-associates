import { api } from "@/lib/axios"

type CustomerBody = {
  name: string
  phones: string
  emails: string
  contacts: Array<any>
}

export const CreateCustomer = async ({
  name,
  phones,
  emails,
  contacts
}: CustomerBody) => {
  await api.post('/customer', { name, phones, emails, contacts });
}