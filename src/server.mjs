import { readFileSync, existsSync, lstatSync } from 'node:fs';
import micro, { send } from 'micro';
import { router } from './router.mjs';

import Root from './Root.jsx';

function getHTML() {
    return readFileSync('./_dest/index.html', 'utf-8').replace('<div id="react-root"></div>', `<div id="react-root">${Root()}</div>`);
}

const server = micro(async (request, response) => {
    const testFile = './_dest' + request.url;
    if (existsSync(testFile) && lstatSync(testFile).isFile()) return send(response, 200, readFileSync(testFile, 'utf-8'));

    router.start(request.url, async(error, state) => {
        if (error) return send(response, 404, `<h1>${error.code}</h1>` + JSON.stringify(error));
        switch(state?.name) {
            case 'home':
            case 'about':
            case 'info':
                return send(response, 200, getHTML());
            default:
                return send(response, 200, state);
        }
    });
    router.stop();
});

const port = 3000;
server.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});