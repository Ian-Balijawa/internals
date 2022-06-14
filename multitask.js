const crypto = require('crypto');
const https = require('https');
const fs = require('fs')

const start = Date.now();

function doRequest() {
	https
		.request('https://google.com', (res) => {
			res.on('data', () => {});
			res.on('end', () => {
				console.log('REQ:',Date.now() - start);
			});
		})
		.end();
}

function doHash() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('Hash: ', Date.now() - start);
    });
}

doRequest();

fs.readFile('multitask.js', 'utf8', () => { 
    console.log('FS: ', Date.now() - start); //delegated to the threadpool
});

doHash();  // delegated to the thread pool
doHash();  // delegated to the thread pool
doHash();  // delegated to the thread pool
doHash();  // delegated to the thread pool