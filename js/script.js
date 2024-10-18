// ini script.js //

// Fungsi untuk mengonversi suhu dari Celcius ke Fahrenheit
function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Fungsi untuk mengonversi suhu dari Fahrenheit ke Celcius
function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Event listener untuk form submit
document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman otomatis

    // Ambil nilai input
    const celsiusInput = parseFloat(document.getElementById('inputSuhu').value);
    const resultTextarea = document.getElementById('coversionResult');
    const explanationTextarea = document.getElementById('explanation');

    if (!isNaN(celsiusInput)) {
        // Konversi dari Celcius ke Fahrenheit
        const fahrenheitResult = convertToFahrenheit(celsiusInput);
        resultTextarea.value = fahrenheitResult.toFixed(2); // Menampilkan hasil dengan 2 desimal

        // Menjelaskan cara kalkulasi
        explanationTextarea.value = `${celsiusInput} °C x 9/5 + 32 = ${fahrenheitResult.toFixed(2)} °F`;
    } else {
        alert("Silakan masukkan suhu yang valid dalam Celcius!");
    }
});

// Fungsi untuk membalik konversi
function reverseConversion() {
    const fahrenheitInput = parseFloat(document.getElementById('coversionResult').value);
    const resultTextarea = document.getElementById('inputSuhu');

    if (!isNaN(fahrenheitInput)) {
        // Konversi dari Fahrenheit ke Celcius
        const celsiusResult = convertToCelsius(fahrenheitInput);
        resultTextarea.value = celsiusResult.toFixed(2); // Menampilkan hasil dengan 2 desimal
    } else {
        alert("Silakan masukkan suhu yang valid dalam Fahrenheit!");
    }
}
