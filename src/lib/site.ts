export const CONTACT = {
  company: "Top Win",
  legalName: "CÔNG TY TNHH TOP WIN VIỆT NAM",
  legalNameEn: "TOP WIN VIETNAM CO., LTD",
  taxId: "3700775738",
  founded: 2007,
  address: "Lô CN1, ô số 1, Đường số 3, KCN Sóng Thần 3, P. Phú Tân, TP. Thủ Dầu Một, Bình Dương, Việt Nam",
  phone: "0274 3815 899",
  phoneRaw: "02743815899",
  zalo: "https://zalo.me/02743815899",
  whatsapp: "https://wa.me/842743815899",
  email: "cty.topwinvn@gmail.com",
  mapsLink: "https://maps.app.goo.gl/6pPS8fuYWkQuCTNK7",
  mapsEmbed:
    "https://www.google.com/maps?q=KCN+S%C3%B3ng+Th%E1%BA%A7n+3,+B%C3%ACnh+D%C6%B0%C6%A1ng&output=embed",
};

export type NavItem = { href: string; label: string; children?: { href: string; label: string; desc?: string }[] };

export const NAV: NavItem[] = [
  { href: "/nang-luc", label: "Năng lực" },
  {
    href: "/san-pham",
    label: "Sản phẩm",
    children: [
      { href: "/san-pham/dung-cu-nha-bep", label: "Dụng cụ nhà bếp", desc: "Dao gọt vỏ, dao bào (item 1071)" },
      { href: "/san-pham/day-sat", label: "Sản phẩm dây sắt", desc: "Vỉ làm nguội bánh, lưới hàn" },
      { href: "/san-pham/go", label: "Chi tiết gỗ gia dụng", desc: "CNC, tiện, chà nhám" },
      { href: "/san-pham/nhua", label: "Nhựa ép & nhúng PE", desc: "Tay cầm, chi tiết nhựa" },
      { href: "/san-pham/khuon-dap", label: "Khuôn mẫu & dập kim loại", desc: "Gia công theo bản vẽ" },
    ],
  },
  { href: "/quy-trinh", label: "Quy trình & QC" },
  { href: "/chung-nhan", label: "Chứng nhận" },
  { href: "/tuyen-dung", label: "Tuyển dụng" },
  { href: "/lien-he", label: "Liên hệ" },
];

export const STATS = [
  { value: "200+", label: "Máy móc & thiết bị" },
  { value: "2007", label: "Năm thành lập" },
  { value: "7", label: "Bộ phận sản xuất khép kín" },
  { value: "ISO", label: "9001:2015 quản lý chất lượng" },
];

export const DEPARTMENTS = [
  { name: "Gỗ", desc: "Cưa, bào, CNC phay, tiện, khoan, chà nhám, sơn bóng" },
  { name: "Dây sắt", desc: "35 máy hàn, CNC cắt, bẻ uốn vỉ, giá, lưới hàn" },
  { name: "Nhựa", desc: "Máy ép, trộn – xay liệu, nhúng PE tay cầm" },
  { name: "Khuôn", desc: "Bắn điện, cắt dây, CNC phay, tiện, mài khuôn tại xưởng" },
  { name: "Dập", desc: "32 máy dập, máy thủy lực, cuốn, cắt liệu theo bản vẽ" },
  { name: "Đánh bóng", desc: "Mài, đánh bóng, hoàn thiện bề mặt" },
  { name: "Đóng gói", desc: "Khắc logo, dán tem, ép túi, đai thùng theo quy cách" },
];

export const MACHINES = [
  "Máy hàn — 35",
  "Máy dập — 40+",
  "Máy CNC (phay, cắt) — 15",
  "Máy khoan — 11",
  "Máy cắt — 17",
  "Máy ép nhựa — 6",
  "Máy bắn điện, cắt dây khuôn",
  "Thiết bị đo hiệu chuẩn ISO/IEC 17025",
];

/** src: ảnh thật đã có. keyword: ảnh còn thiếu, cần tìm thêm. */
export type Img = { src?: string; keyword?: string; alt: string };

export const PRODUCTS: { title: string; desc: string; tags: string[]; img: Img }[] = [
  {
    title: "Dụng cụ nhà bếp",
    desc: "Dao gọt vỏ, dao bào (item 1071) — lưỡi inox, tay cầm nhựa ép, kiểm tra từng lô.",
    tags: ["Inox", "Nhựa ép", "OEM"],
    img: { src: "/images/dao/image17.webp", alt: "Dao gọt vỏ Top Win" },
  },
  {
    title: "Sản phẩm dây sắt",
    desc: "Vỉ / giá làm nguội bánh 10×15, 10×16 inch, lưới hàn, giá úp chén đĩa, giá để dao thớt, móc và giá treo.",
    tags: ["Hàn chập", "Mạ / phủ"],
    img: { keyword: "stainless steel cooling rack baking wire", alt: "Vỉ làm nguội bánh" },
  },
  {
    title: "Chi tiết gỗ gia dụng",
    desc: "Gia công CNC, tiện, chà nhám, sơn bóng tay cầm và dụng cụ gỗ tiếp xúc thực phẩm.",
    tags: ["CNC", "Tiện", "Chà nhám"],
    img: { keyword: "wooden kitchen utensil handles CNC turning", alt: "Chi tiết gỗ gia dụng" },
  },
  {
    title: "Nhựa ép & nhúng PE",
    desc: "Tay cầm, chi tiết nhựa ép phun và nhúng phủ PE bền màu.",
    tags: ["Ép phun", "Nhúng PE"],
    img: { src: "/images/dao/image2.webp", alt: "Tay cầm nhựa ép phun" },
  },
  {
    title: "Khuôn mẫu & dập kim loại",
    desc: "Nhận gia công khuôn và dập kim loại theo bản vẽ của khách hàng.",
    tags: ["Theo bản vẽ", "Tự làm khuôn"],
    img: { src: "/images/bua/image15.webp", alt: "Sản phẩm dập kim loại" },
  },
];

export const PROCESS = [
  {
    step: "Xử lý nguyên liệu",
    desc: "Gỗ tấm được cưa, ghép thành phôi; kim loại, nhựa được kiểm tra đầu vào trước khi đưa vào sản xuất.",
    img: { keyword: "wood planks sawing factory raw material", alt: "Xử lý nguyên liệu" } as Img,
  },
  {
    step: "Thiết kế & làm khuôn",
    desc: "Tiếp nhận bản vẽ / mẫu, chế tạo khuôn ngay tại xưởng để rút ngắn thời gian mẫu.",
    img: { keyword: "injection mold making CNC workshop", alt: "Làm khuôn" } as Img,
  },
  {
    step: "Ép nhựa",
    desc: "Nguyên liệu → máy ép → tay cầm thành phẩm, kiểm soát ngoại quan từng mẻ.",
    img: { src: "/images/dao/image3.webp", alt: "Quy trình ép nhựa" } as Img,
  },
  {
    step: "Dập & gia công kim loại",
    desc: "Dập định hình chi tiết kim loại, thao tác có găng bảo hộ và đồ gá cố định.",
    img: { src: "/images/bua/image4.webp", alt: "Lắp ráp búa" } as Img,
  },
  {
    step: "Đánh bóng & lắp ráp",
    desc: "Nhám, bo cạnh, đánh bóng, sơn bóng bề mặt; lắp ráp, in logo, dán tem.",
    img: { src: "/images/bua/image6.webp", alt: "Lắp ráp" } as Img,
  },
  {
    step: "Kiểm tra chất lượng",
    desc: "Test kéo ≥15kg, test nén, test máy rửa chén — QC tại mỗi công đoạn.",
    img: { src: "/images/dao/image9.webp", alt: "Test lực kéo" } as Img,
  },
  {
    step: "Đóng gói & xuất hàng",
    desc: "Đóng gói theo quy cách nhà nhập khẩu, sẵn sàng xuất container.",
    img: { src: "/images/bua/image10.webp", alt: "Đóng gói" } as Img,
  },
];

export const QC_TESTS = [
  { title: "Test lực kéo ≥ 15kg", desc: "Đảm bảo lưỡi và tay cầm không tách rời.", img: "/images/dao/image9.webp" },
  { title: "Test máy rửa chén", desc: "Chạy chu kỳ rửa thực tế để kiểm tra độ bền.", img: "/images/dao/image11.webp" },
  { title: "Đo kích thước", desc: "Thiết bị đo được hiệu chuẩn định kỳ theo ISO/IEC 17025.", img: "/images/dao/image14.webp" },
];
