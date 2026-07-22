import QRCode from 'qrcode';

const url = 'https://grao-e-bossa-menu.vercel.app/';

await QRCode.toFile('./public/qr-code.png', url, {
  width: 800,
  margin: 2,
  color: {
    dark: '#2B1B14',   // el mismo --coffee de tu paleta
    light: '#EFE6D8'   // el mismo --cream de tu paleta
  }
});

console.log('QR generado en public/qr-code.png apuntando a:', url);