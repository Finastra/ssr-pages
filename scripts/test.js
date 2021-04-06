const { SSRPages } = require('../');
const { writeFileSync } = require('fs');
const { join } = require('path');

const ssrPagesService = new SSRPages();
const msgPageOpts = {
  title: "You've been signed out",
  subtitle: `You will be redirected in a moment`,
  description: 'Be patient, the page will refresh itself, if not click on the following button.',
  svg: 'exit',
  redirect: {
    auto: false,
    link: `/`,
    label: 'Logout'
  }
};
const loggedOutPage = ssrPagesService.build(msgPageOpts);

const dir = './';
const fileName = 'test-page.html';
const path = join(dir, fileName);

writeFileSync(path, loggedOutPage);
console.log(`Generated ${path} successfully`);
