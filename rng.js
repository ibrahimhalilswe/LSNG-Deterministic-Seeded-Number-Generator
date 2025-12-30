function logisticRNG(seed, iterations) {
    let x = seed; // Başlangıç değeri 0 ile 1 arasında olmalı (Örn: 0.5)
    const r = 4.0; // Kaos katsayısı
    let results = [];

    for (let i = 0; i < iterations; i++) {
        x = r * x * (1 - x);
        // Çıkan ondalık sayıyı tam sayıya çevirelim (Örn: 0-1000 arası)
        results.push(Math.floor(x * 1000));
    }
    return results;
}

console.log(logisticRNG(0.123456, 10));
