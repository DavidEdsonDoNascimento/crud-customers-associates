import { Request, Response } from "express";

type DocsRoute = {
  route: String,
  description: String,
  method: String,
  body?: String[]
};

class DocsController {
  static async docs(req: Request, res: Response): Promise<any> {
    const docsRoutes: DocsRoute[] = [
      {
        route: '/',
        description: 'API documentation, showing existing routes and shipping parameters',
        method: 'GET'
      },
      {
        route: '/customer',
        description: 'Get all customers',
        method: 'GET'
      },
      {
        route: '/customer/<ID>',
        description: 'Delete customer from id',
        method: 'DELETE'
      },
      {
        route: '/customer',
        description: 'Create new customer',
        method: 'POST',
        body: [
          'name: String',
          'emails: String',
          'phones: String',
          'contacts: Array<{name, emails, phones}>'
        ]
      },
      {
        route: '/customer/<ID>',
        description: 'Update customer',
        method: 'POST',
        body: [
          'name: String',
          'emails: String',
          'phones: String',
          'contacts: Array<{name, emails, phones}>'
        ]
      },
      {
        route: '/contact',
        description: 'Get all contacts',
        method: 'GET'
      },
      {
        route: '/contact/<ID>',
        description: 'Delete contact from id',
        method: 'DELETE'
      },
      {
        route: '/contact',
        description: 'Create new contact',
        method: 'POST',
        body: [
          'name: String',
          'emails: String',
          'phones: String'
        ]
      },
      {
        route: '/contact/<ID>',
        description: 'Update contact',
        method: 'POST',
        body: [
          'name: String',
          'emails: String',
          'phones: String'
        ]
      }
    ];
    return res.status(200).json(docsRoutes);
  }
}

export { DocsController }