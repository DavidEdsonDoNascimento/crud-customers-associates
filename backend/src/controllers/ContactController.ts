import { Contacts } from "@models/ContactModel";
import { Request, Response } from 'express';
import { Contact } from "src/@types/Contact";

export class ContactController {

  static async read(req: Request, res: Response) {
    console.log('ContactController.read');
    const contacts = await Contacts.find();
    return res.status(200).json(contacts);
  }

  static async getContactById(req: Request, res: Response) {
    console.log('ContactController.getContactById');
    const { contactId } = req.params;
    const contact = await Contacts.findOne({ _id: contactId });
    return res.status(200).json(contact);
  }

  static async create(req: Request, res: Response) {
    console.log('ContactController.create');
    const {
      name,
      emails,
      phones,
      customer,
    }: Contact = req.body;

    console.log('customer:', customer);
    if (!name || !emails || !customer) {
      return res.status(400).json({
        error: 'Parameterization error in the request',
        params: `name: ${name} | emails: ${emails} | phones: ${phones} | customer: ${customer}`
      })
    }
    const contacts = await Contacts.create({
      name,
      emails,
      phones,
      customer
    });
    return res.status(201).json({ contacts });
  }

  static async update(req: Request, res: Response) {
    const { contactId } = req.params;
    const {
      name,
      emails,
      phones,
      customer,
    }: Contact = req.body;

    if (!name || !emails || !customer) {
      return res.status(400).json({
        error: 'Parameterization error in the request',
        params: `name: ${name} | emails: ${emails} | phones: ${phones} | customer: ${customer}`
      })
    }

    const contact = await Contacts.findOne({ _id: contactId });

    contact.name = '' + name || contact.name;
    contact.emails = emails || contact.emails;
    contact.phones = phones || contact.phones;
    contact.customer = customer || contact.customer;

    await contact.save();

    return res.status(200).json({
      isUpdated: true,
      ...contact
    })
  }

  static async delete(req: Request, res: Response) {
    console.log('ContactController.delete');
    const { contactId } = req.params;
    // validation to know if the received parameter can be converted 
    //to an ObjectId
    if (!contactId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        error: 'Parameterization error in the request',
        params: `invalid id received in request parameters`
      })
    }

    const deleted = await Contacts.findOneAndDelete({
      _id: contactId
    });

    if (deleted) {
      return res.status(200).json({
        isDeleted: true,
        ...deleted
      })
    }

    return res.status(400).json({
      error: 'register not found',
      params: `id not found in database`
    });
  }
}