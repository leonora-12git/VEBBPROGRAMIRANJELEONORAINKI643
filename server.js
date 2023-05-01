const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/sliki/spain.png') {
    const img = fs.readFileSync('sliki/spain.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
  } else if (req.url === '/sliki/spain.jpg') {
    const img = fs.readFileSync('sliki/spain.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
  } else if (req.url === '/sliki/plazha.jpg') {
    const img = fs.readFileSync('sliki/plazha.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
  } else if (req.url === '/sliki/spanija.jpg') {
    const img = fs.readFileSync('sliki/spanija.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
  } else if (req.url === '/sliki/Barselona.jpg') {
    const img = fs.readFileSync('sliki/Barselona.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
  } else if (req.url === '/sliki/Madrid.jpg') {
    const img = fs.readFileSync('sliki/Madrid.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
  } else if (req.url === '/sliki/Malaga.jpg') {
    const img = fs.readFileSync('sliki/Malaga.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
  } else if (req.url === '/sliki/Ibica.jpg') {
    const img = fs.readFileSync('sliki/Ibica.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpeg' });
    res.end(img, 'binary');
  } else if (req.url === '/Dizajn.css') {
    const css = fs.readFileSync('Dizajn.css', 'utf8');
    res.writeHead(200, {'Content-Type': 'text/css' });
    res.end(css);
  } else if (req.url === '/skripta.js') {
    const js = fs.readFileSync('skripta.js', 'utf8');
    res.writeHead(200, {'Content-Type': 'text/javascript' });
    res.end(js);
  } else if (req.url === '/Proekt.html' || req.url === '/') {
    const html = fs.readFileSync('Proekt.html', 'utf8');
    res.writeHead(200, {'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url === '/Madrid.html' || req.url === '/') {
    const html = fs.readFileSync('Madrid.html', 'utf8');
    res.writeHead(200, {'Content-Type': 'text/html' });
    res.end(html);
  }else if (req.url === '/Barselona.html' || req.url === '/') {
    const html = fs.readFileSync('Barselona.html', 'utf8');
    res.writeHead(200, {'Content-Type': 'text/html' });
    res.end(html);
  }else if (req.url === '/Ibica.html' || req.url === '/') {
    const html = fs.readFileSync('Ibica.html', 'utf8');
    res.writeHead(200, {'Content-Type': 'text/html' });
    res.end(html);
  }else if (req.url === '/Malaga.html' || req.url === '/') {
    const html = fs.readFileSync('Malaga.html', 'utf8');
    res.writeHead(200, {'Content-Type': 'text/html' });
    res.end(html);
  }else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>404 Not Found</h1>');
  }
}).listen(8080);




