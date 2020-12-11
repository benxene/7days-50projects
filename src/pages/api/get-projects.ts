import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json');
  let files = fs.readdirSync('./src/pages');
  files = files.map(file => {
    return file.replace('.tsx', '');
  });

  files.splice(files.indexOf('_app'), 1);
  files.splice(files.indexOf('api'), 1);

  const apps = files.map(file => {
    let name = file.replace(/-/g, ' ');
    if (name === 'index') name = 'Sticky nav';
    name = name.charAt(0).toUpperCase() + name.substr(1);
    return { name, file };
  });

  res.status(200).json({ apps });
}
