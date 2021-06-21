const fse = require('fs-extra');

console.info('Copying gh-pages static assets');

const siteDir = 'public';
fse.ensureDirSync(`${siteDir}`);
fse.copySync('.github/pages', `${siteDir}`);

console.info('Copy completed');
