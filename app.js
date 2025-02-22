const express = require('express');

const app = express();

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.get('/demotrx', async (req, res) => {

    const { tujuan, idtrx, kode } = req.query

    if (tujuan === '081338290000') {
        res.send('REFF#' + idtrx + ' Trx SP1000.' + tujuan + ' GAGAL NOMOR SALAH,Harga: 33.750 SN: Sisa Saldo: 271.548.777 - 33.750 = 271.515.027 @2/22/2025 4:07:31 AM');
    } else {
        if (tujuan.substring(0, 4) == '0812') {
            await delay(15000);
            res.json({
                msg: ' REFF#' + idtrx + ' Trx SP1000.' + tujuan + ' BERHASIL,Harga: 33.750 SN: 0491520250222040727X47 Sisa Saldo: 271.548.777 - 33.750 = 271.515.027 @2/22/2025 4:07:31 AM',
            })
        } else {
            delay(1000);
            res.send('REFF#' + idtrx + ' Trx SP1000.' + tujuan + ' BERHASIL,Harga: 33.750 SN: 0491520250222040727X47 Sisa Saldo: 271.548.777 - 33.750 = 271.515.027 @2/22/2025 4:07:31 AM');
        }
    }
});

app.listen(4190, () => {
    console.log('Server is running on http://localhost:4190');
});