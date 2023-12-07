    // Keliling Dulu

        const s1 = document.getElementById('input-s1');
        const s2 = document.getElementById('input-s2');
        const s3 = document.getElementById('input-s3');
        const buttonhitung = document.getElementById('buttom-hitung');
        const buttonreset = document.getElementById('button-reset');
        const buttomoutput = document.getElementById('buttom-output');

        buttonhitung.addEventListener('click', function(){
            let sisi1 = parseFloat(s1.value);
            let sisi2 = parseFloat(s2.value);
            let sisi3 = parseFloat(s3.value);

            if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
                buttomoutput.innerHTML = 'Masukkan angka valid untuk sisi-sisi segitiga.';
            } else {
                let kel = sisi1 + sisi2 + sisi3;
                buttomoutput.innerHTML = `Keliling segitiga: ${kel}`;

                // Reset nilai input setelah perhitungan
                s1.value = '';
                s2.value = '';
                s3.value = '';
            }
        });

        buttonreset.addEventListener('click', function(){
            // Reset nilai input dan output
            s1.value = '';
            s2.value = '';
            s3.value = '';
            buttomoutput.innerHTML = '';
        });

    // Sekarang Luas

    const alasInput = document.getElementById('input-alas');
        const tinggiInput = document.getElementById('input-tinggi');
        const hitungButton = document.getElementById('button-hitung');
        const resetButton = document.getElementById('button-reset');
        const outputDiv = document.getElementById('output');

        hitungButton.addEventListener('click', function(){
            let alas = parseFloat(alasInput.value);
            let tinggi = parseFloat(tinggiInput.value);

            if (isNaN(alas) || isNaN(tinggi)) {
                outputDiv.innerHTML = 'Masukkan angka valid untuk alas dan tinggi segitiga.';
            } else {
                let luas = 0.5 * alas * tinggi;
                outputDiv.innerHTML = `Luas segitiga: ${luas.toFixed(2)}`;
            }
        });

        resetButton.addEventListener('click', function(){
            alasInput.value = '';
            tinggiInput.value = '';
            outputDiv.innerHTML = '';
        });

    