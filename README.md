# LSNG - Logistic Seeded Number Generator

Bu proje, Kaos Teorisi'ndeki "Logistic Map" denklemini temel alarak deterministik rastgele sayılar üretir.

## Algoritmanın Temeli
Algoritma, $x_{n+1} = r \cdot x_n \cdot (1 - x_n)$ denklemini kullanır. 
- $r$ parametresi 4.0 olarak seçilmiştir, bu da sistemin kaotik bölgede çalışmasını sağlar.
- Başlangıç değeri (seed), üretilen tüm ondalık diziyi belirler.

## Neden Lojistik Harita?
Basit bir matematiksel formül olmasına rağmen, başlangıç değerindeki çok küçük bir değişim (0.500001 vs 0.500002) tamamen farklı sonuçlar doğurur. Buna "Kelebek Etkisi" denir.

## Kriptografik Değerlendirme
- **Güvenlik:** Deterministik olduğu için CSPRNG değildir.
- **Kullanım:** Kaotik sistemlerin simülasyonu ve eğitim amaçlı uygundur.
