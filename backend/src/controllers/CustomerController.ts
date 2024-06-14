import { Customers } from "@models/CustomerModel";
import { Request, Response } from 'express';
import { Customer } from "src/@types/Customer";

export class CustomerController {

  static async read(req: Request, res: Response) {
    console.log('CustomerController.read');
    const customers = await Customers.find();
    return res.status(200).json(customers);
  }

  static async getCustomerById(req: Request, res: Response) {
    console.log('CustomerController.getCustomerById');
    const { customerId } = req.params;
    const customer = await Customers.findOne({ _id: customerId });
    return res.status(200).json(customer)
  }

  static async create(req: Request, res: Response) {
    console.log('CustomerController.create');
    const {
      name,
      emails,
      phones,
      contacts,
    }: Customer = req.body;

    if (!name || !emails) {
      return res.status(400).json({
        error: 'Parameterization error in the request',
        params: `name: ${name} | emails: ${emails} | phones: ${phones} | contacts: ${contacts}`
      })
    }
    const customers = await Customers.create({
      name,
      emails,
      phones,
      contacts
    });
    return res.status(201).json({ customers });
  }

  static async update(req: Request, res: Response) {
    const { customerId } = req.params;
    const {
      name,
      emails,
      phones,
      contacts,
    }: Customer = req.body;

    if (!name || !emails) {
      return res.status(400).json({
        error: 'Parameterization error in the request',
               params: `name: ${name} | emails: ${emails} | phones: ${phones} | contacts: ${contacts}`
      })
    }

    const customer = await Customers.findOne({ _id: customerId });

    customer.name = '' + name || customer.name;
    customer.emails = emails || customer.emails;
    customer.phones = phones || customer.phones;
    customer.contacts = contacts || customer.contacts || [];;

    await customer.save();

    return res.status(200).json({
      isUpdated: true,
      ...customer
    })
  }

  static async delete(req: Request, res: Response) {
    console.log('ContactController.delete');
    const { customerId } = req.params;
    // validation to know if the received parameter can be converted 
    //to an ObjectId
    if (!customerId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        error: 'Parameterization error in the request',
        params: `invalid id received in request parameters`
      })
    }

    const deleted = await Customers.findOneAndDelete({
      _id: customerId
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