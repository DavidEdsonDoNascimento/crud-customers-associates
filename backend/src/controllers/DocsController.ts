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
        route: '/annotations',
        description: 'Get all annotations',
        method: 'GET'
      },
      {
        route: '/annotations/<ID>',
        description: 'Delete notes from id',
        method: 'DELETE'
      },
      {
        route: '/annotations',
        description: 'Create new annotation',
        method: 'POST',
        body: [
          'title: String',
          'notes: String',
          'priority: Boolean'
        ]
      },
      {
        route: '/annotations/<ID>',
        description: 'Update annotation',
        method: 'POST',
        body: [
          'title: String',
          'notes: String',
          'priority: Boolean'
        ]
      },
      {
        route: '/priorities?priority=true',
        description: 'Get all annotations with priority',
        method: 'GET'
      },
      {
        route: '/priorities/<ID>',
        description: 'Change priority annotation by id',
        method: 'POST'
      },
    ];
    return res.status(200).json(docsRoutes);
  }
}

export { DocsController }