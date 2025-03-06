# React Redux CRUD Uygulaması

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş bir kullanıcı yönetim sistemidir. Kullanıcıları listeleme, ekleme, düzenleme ve silme işlemlerini gerçekleştirebilen bir CRUD (Create, Read, Update, Delete) uygulamasıdır.

## 🚀 Kullanılan Teknolojiler

- **React.js** - Kullanıcı arayüzü geliştirme kütüphanesi
- **Redux Toolkit** - State yönetimi için modern Redux yaklaşımı
- **Bootstrap 5** - Responsive tasarım ve UI bileşenleri için CSS framework'ü
- **Axios** - HTTP istekleri için Promise tabanlı HTTP client
- **Bootstrap Icons** - Modern ve kullanışlı ikon seti

## 🛠️ Özellikler

- Kullanıcı listesi görüntüleme
- Yeni kullanıcı ekleme
- Mevcut kullanıcıyı düzenleme
- Kullanıcı silme
- Responsive tasarım
- Yükleme durumu gösterimi
- Hata yönetimi



## 🔄 State Yönetimi

- Redux Toolkit ile merkezi state yönetimi
- createAsyncThunk ile asenkron işlem yönetimi
- Loading ve error state'leri için özel yönetim

## 🎯 API Entegrasyonu

- JSONPlaceholder API (https://jsonplaceholder.typicode.com/users) kullanılarak gerçek HTTP istekleri
+ REST API üzerinden CRUD operasyonları
- CRUD operasyonları için endpoint entegrasyonu
- Axios ile HTTP isteklerinin yönetimi

## 💅 Arayüz Özellikleri

- Modern ve temiz arayüz tasarımı
- Responsive grid sistem
- Modal tabanlı form yönetimi
- Yükleme göstergeleri ve hata mesajları
- İkon entegrasyonu
- Hover ve geçiş efektleri

## 📝 Kullanım Kılavuzu

1. **Kullanıcı Listeleme**
   - Ana sayfada tüm kullanıcılar kart görünümünde listelenir
   - Her kullanıcı için temel bilgiler gösterilir

2. **Yeni Kullanıcı Ekleme**
   - "Yeni Kullanıcı" butonuna tıklayın
   - Gerekli bilgileri formda doldurun
   - "Kaydet" butonuna tıklayarak kullanıcıyı ekleyin

3. **Kullanıcı Düzenleme**
   - Kullanıcı kartındaki "Düzenle" butonuna tıklayın
   - Bilgileri güncelleyin
   - "Güncelle" butonuna tıklayarak değişiklikleri kaydedin

4. **Kullanıcı Silme**
   - Kullanıcı kartındaki "Sil" butonuna tıklayın
   - İşlem otomatik olarak gerçekleşecektir
