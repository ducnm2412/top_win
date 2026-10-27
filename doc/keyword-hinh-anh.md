# Ảnh cần tìm cho website Top Win

Trên web, các ô **"CẦN ẢNH"** (nền xanh đậm, sọc chéo) đang chờ ảnh. Tìm trên Unsplash / Pexels / Freepik, tải về, đặt vào `public/images/stock/`, rồi sửa `src` tương ứng.

## Ảnh stock cần tìm

| # | Vị trí | Keyword tìm kiếm | Tỉ lệ | Sửa ở file |
|---|---|---|---|---|
| 1 | Banner trang chủ (hero) | `industrial factory interior wide shot metal stamping production line` | Ngang 16:9, ≥ 2400px | `src/app/page.tsx` (HERO) |
| 2 | Giới thiệu nhà máy | `factory workers assembling kitchen tools production line Asia` | 4:3 | `src/app/page.tsx` (ABOUT) |
| 3 | Sản phẩm dây sắt | `stainless steel cooling rack baking wire` | 16:10 | `src/lib/site.ts` (PRODUCTS) |
| 4 | Chi tiết gỗ gia dụng | `wooden kitchen utensil handles CNC turning` | 16:10 | `src/lib/site.ts` (PRODUCTS) |
| 5 | Timeline – Làm khuôn | `injection mold making CNC workshop` | 16:9 | `src/lib/site.ts` (PROCESS) |
| 6 | Trang tuyển dụng | `happy factory workers team Vietnam uniform` | Ngang 16:9 | `src/app/tuyen-dung/page.tsx` |

Keyword phụ nếu kết quả chưa ưng:
- Hero: `CNC machine factory dark blue tone`, `metal press machine sparks industrial`
- Dây sắt: `wire rack welding factory`, `cooling rack cake kitchen`
- Gỗ: `wood turning lathe workshop`, `beech wood kitchen handle`

## Ảnh phải xin khách (không dùng ảnh stock)

- **Logo** (file vector / PNG nền trong) – đang dùng ô chữ "TW" tạm
- **Giấy chứng nhận ISO 9001:2015** (ảnh scan)
- **Ảnh vỉ làm nguội bánh và sản phẩm gỗ thật** – nên thay ảnh stock #3, #4 khi có
- **Ảnh toàn cảnh nhà xưởng, cổng nhà máy** – nên thay ảnh stock #1, #2 khi có
- Xác nhận **AJA 2025** là chứng nhận gì

## Ảnh thật đang dùng (từ file quy trình của khách)

| Vị trí | File |
|---|---|
| Sản phẩm – Dao gọt vỏ | `images/dao/image17.webp` |
| Sản phẩm – Nhựa ép | `images/dao/image2.webp` |
| Sản phẩm – Khuôn & dập | `images/bua/image15.webp` |
| Timeline – Ép nhựa | `images/dao/image3.webp` |
| Timeline – Dập | `images/bua/image4.webp` |
| Timeline – Lắp ráp | `images/bua/image6.webp` |
| Timeline – QC / Test kéo | `images/dao/image9.webp` |
| Timeline – Đóng gói | `images/bua/image10.webp` |
| QC – Test máy rửa chén | `images/dao/image11.webp` |
| QC – Đo kích thước | `images/dao/image14.webp` |
