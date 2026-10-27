// Dữ liệu 5 nhóm sản phẩm — tổng hợp từ doc/yeu-cau-khach-hang.md và doc/quy-trinh-4-san-pham.md

export type Stage = { title: string; desc: string; img: string };

export type ProductGroup = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  hero: string;
  items: string[];
  specs: { label: string; value: string }[];
  stages: Stage[];
  qc: string[];
  gallery: string[];
  /** Quy trình chi tiết theo từng công đoạn (trích file quy trình trong doc/) */
  detail?: { name: string; steps: string[] }[];
  /** Phép thử / tiêu chí nghiệm hàng có số liệu */
  tests?: { name: string; rule: string }[];
  packing?: string[];
  rules?: string[];
  videos?: string[];
};

const DAO_STAGES: Stage[] = [
  { title: "Ép nhựa thân dao", desc: "Trộn liệu, ép thân, tách cuống và loại thân trầy, dư liệu, biến dạng.", img: "/images/dao/image3.webp" },
  { title: "Bọc áo tay cầm", desc: "Ép lớp bọc tay cầm, kiểm tra từng thân trước khi chuyển công đoạn.", img: "/images/dao/image2.webp" },
  { title: "Lắp cán & đóng lưỡi", desc: "Kiểm tra cán sắt bằng khuôn, loại lưỡi oxy hóa / mẻ / cong, đóng lưỡi và kiểm tra lưỡi xoay.", img: "/images/dao/image6.webp" },
  { title: "Test kéo · nén · rửa", desc: "Kéo ≥15kg, nén ≥7,5kg, chạy máy rửa chén 30 phút không biến dạng hay ăn mòn.", img: "/images/dao/image11.webp" },
  { title: "Đóng gói 8 bước", desc: "Vỏ PE bảo vệ lưỡi, túi PE có thuyết minh, 12 sp/thùng con, 10 thùng con/thùng mẹ.", img: "/images/dao/image8.webp" },
];

const BUA_STAGES: Stage[] = [
  { title: "Ép nhựa thân búa", desc: "Kiểm tra nguyên liệu, trộn liệu, ép thân và loại bỏ thân lỗi.", img: "/images/bua/image1.webp" },
  { title: "Ép bọc tay cầm", desc: "Ép lớp bọc tay cầm, kiểm tra trầy xước, dư liệu, biến dạng.", img: "/images/bua/image2.webp" },
  { title: "Lắp ráp đầu búa", desc: "Kiểm tra đầu búa (gai nhọn, không dính keo), lắp đúng chiều với thân.", img: "/images/bua/image4.webp" },
  { title: "Nghiệm hàng", desc: "Kiểm tra ngoại quan thành phẩm: trầy xước, cấn móp, dư liệu, dính keo.", img: "/images/bua/image17.webp" },
  { title: "Bắn tem & đóng gói", desc: "Bắn dây tem 2 lần, 4 sp/túi, 12 túi/thùng có tấm lót chống va đập.", img: "/images/bua/image10.webp" },
];

const VI_STAGES: Stage[] = [
  { title: "CNC & dập chân vành", desc: "Kiểm tra liệu không xoắn, cong; chạy CNC vành dây Ø3,4mm, dập chân vành.", img: "/images/vi/vanh-luoi.webp" },
  { title: "Hàn lưới trên khuôn", desc: "Xếp liệu vào khuôn (thanh dài trên thanh ngắn), khóa liệu và chạy hàn.", img: "/images/vi/han-luoi.webp" },
  { title: "Nắn thẳng lưới", desc: "Đưa lưới qua máy nắn thẳng, kiểm tra độ phẳng và xếp pallet.", img: "/images/vi/luoi-han.webp" },
  { title: "Định hình & dập hàn viền", desc: "Vào khuôn định hình vành + lưới, dập hàn viền cạnh dài và cạnh ngắn.", img: "/images/vi/thanh-pham.webp" },
  { title: "Kiểm tra mối hàn", desc: "Đánh dấu lỗi: bong mối hàn, lưới cong, hàn không thẳng hàng.", img: "/images/vi/kiem-tra.webp" },
];

const LANBOT_STAGES: Stage[] = [
  { title: "Cắt liệu", desc: "Cắt phôi gỗ theo thiết kế, liệu thẳng, không cong vênh hay khuyết.", img: "/images/lanbot/phoi-go.webp" },
  { title: "Tiện tay cầm", desc: "Định hình vào khuôn và tiện tay cầm, kiểm tra trước và sau mỗi lần tiện.", img: "/images/lanbot/tien-may.webp" },
  { title: "Gọt tròn thân · chà nhám", desc: "Gọt tròn, bo cạnh, chà nhám thân; không nứt, không sâu thân.", img: "/images/lanbot/tien-go.webp" },
  { title: "Kiểm tra kích thước", desc: "Đo chiều dài, đường kính đúng bản vẽ; khoan lỗ đúng tâm.", img: "/images/lanbot/do-kich-thuoc.webp" },
  { title: "Đóng nút & lắp ráp", desc: "Đóng nút nhựa 2 đầu, lắp tay cầm vào trục, kiểm tra tâm trục.", img: "/images/lanbot/san-pham.webp" },
];

/** Quy trình mẫu của từng sản phẩm tiêu biểu (dùng cho tab ở trang Quy trình). */
export const PRODUCT_PROCESSES = [
  { key: "dao", name: "Dao gọt vỏ 1071", tag: "Nhựa ép · Inox", stages: DAO_STAGES },
  { key: "bua", name: "Búa đập thịt", tag: "Nhựa ép · Lắp ráp", stages: BUA_STAGES },
  { key: "vi", name: "Vỉ làm nguội 10×15 / 10×16″", tag: "Dây sắt · Hàn", stages: VI_STAGES },
  { key: "lanbot", name: "Cây lăn bột", tag: "Gỗ · Nút nhựa", stages: LANBOT_STAGES },
];

export const PRODUCT_GROUPS: ProductGroup[] = [
  {
    slug: "dung-cu-nha-bep",
    title: "Dụng cụ nhà bếp",
    short: "Dao gọt vỏ, dao bào (item 1071)",
    intro:
      "Dao gọt vỏ / dao bào item 1071 với lưỡi inox và tay cầm nhựa ép bọc áo — sản xuất trọn gói tại xưởng, kiểm tra từng lô trước khi xuất sang châu Âu.",
    hero: "/images/dao/image17.webp",
    items: ["Dao gọt vỏ 1071", "Dao bào rau củ", "Dụng cụ cầm tay nhựa + inox theo mẫu"],
    specs: [
      { label: "Vật liệu", value: "Lưỡi inox, thân nhựa ép, áo bọc tay cầm" },
      { label: "Kiểm tra", value: "Kéo ≥15kg · Nén ≥7,5kg · Máy rửa chén 30 phút" },
      { label: "Đóng gói", value: "12 sp/thùng con · 10 thùng con/thùng mẹ" },
      { label: "Hình thức", value: "OEM theo mẫu, logo và bao bì khách hàng" },
    ],
    stages: DAO_STAGES,
    qc: ["Lưỡi trầy xước, oxy hóa, sứt mẻ, cong vênh", "Lưỡi xoay vòng hoặc không xoay", "Thân biến dạng, dư liệu"],
    gallery: ["/images/dao/image16.webp", "/images/dao/image9.webp", "/images/dao/image14.webp", "/images/dao/image12.webp", "/images/dao/image15.webp", "/images/dao/image18.webp"],
    detail: [
      { name: "Làm thân dao (ép nhựa)", steps: ["Kiểm tra nguyên liệu khi nhập về, trộn liệu đến mức tiêu chuẩn rồi đưa vào máy ép.", "Kiểm tra khuôn, vận hành máy ép thân và điều chỉnh thông số phù hợp.", "Tách thân dao khỏi cuống; loại thân trầy, dư liệu 2 đầu lỗ, biến dạng, khuyết liệu.", "Xếp từng lớp vào thùng nhựa, lót giấy giữa các lớp chống trầy."] },
      { name: "Bọc áo tay cầm", steps: ["Kiểm tra khuôn, đặt thân dao vào khuôn bọc áo.", "Vận hành máy bọc áo và điều chỉnh thông số phù hợp.", "Lấy thân ra, kiểm tra từng cái; loại thân trầy, dư liệu tay cầm, biến dạng, khuyết liệu.", "Xếp riêng từng thân để tránh trầy xước."] },
      { name: "Lắp cán & lưỡi dao", steps: ["Thả cán sắt vào lỗ khuôn kiểm tra: cán giữ lại trong lỗ là đạt, rơi xuống là không đạt.", "Gắn cán sắt vào thân dao.", "Kiểm tra lưỡi trước khi đóng (loại lưỡi oxy hóa, mẻ, cong), gắn đúng vị trí và vận hành máy đóng lưỡi.", "Kiểm tra lưỡi xoay được, đo kích thước theo bản vẽ, xếp lớp vào thùng chuyển sang đóng gói."] },
    ],
    tests: [
      { name: "Test kéo", rule: "Lực kéo ≥ 15kg không bung lưỡi — dưới 15kg bị bung là không đạt." },
      { name: "Test nén", rule: "Chịu lực nén ≥ 7,5kg không gãy, không bung." },
      { name: "Test máy rửa chén", rule: "Chạy 30 phút với xà phòng; không biến dạng, ăn mòn hay mẻ lưỡi." },
      { name: "Kiểm tra kích thước", rule: "Đo theo bản vẽ bằng thiết bị hiệu chuẩn ISO/IEC 17025." },
    ],
    packing: ["Đeo bao tay trắng, vệ sinh lưỡi bằng vải mềm, kiểm tra ngoại quan lần cuối", "Gắn vỏ PE bảo vệ lưỡi dao", "Cho vào túi PE chuyên dụng có sẵn thuyết minh, ép miệng túi theo tiêu chuẩn", "12 sản phẩm / thùng con, có tấm giấy lót cứng chống va đập", "10 thùng con / thùng mẹ, đánh số thứ tự từng thùng"],
  },
  {
    slug: "day-sat",
    title: "Sản phẩm dây sắt",
    short: "Vỉ làm nguội bánh, lưới hàn",
    intro:
      "Vỉ / giá làm nguội bánh 10×15 và 10×16 inch, lưới hàn chập theo quy cách — CNC vành, hàn lưới trên khuôn tự chế và nắn thẳng bằng máy.",
    hero: "/images/vi/san-pham.webp",
    items: ["Vỉ làm nguội bánh 10×15″", "Vỉ làm nguội bánh 10×16″", "Lưới hàn theo quy cách", "Giá úp, giá treo dây sắt"],
    specs: [
      { label: "Kích thước", value: "10×15 inch · 10×16 inch · theo bản vẽ" },
      { label: "Dây vành", value: "Ø3,4mm, chạy CNC" },
      { label: "Năng lực", value: "35 máy hàn, CNC cắt, máy nắn thẳng" },
      { label: "Kiểm tra", value: "Mối hàn, độ thẳng, độ phẳng bề mặt" },
    ],
    stages: VI_STAGES,
    qc: ["Liệu xoắn, cong vênh, cắt dư liệu", "Bong mối hàn, hàn không thẳng hàng", "Lưới cong, bề mặt không phẳng"],
    gallery: ["/images/vi/thanh-pham.webp", "/images/vi/luoi-han.webp", "/images/vi/han-luoi.webp", "/images/vi/kiem-tra.webp", "/images/vi/vanh-luoi.webp"],
    detail: [
      { name: "Chạy CNC vành giá đỡ", steps: ["Kiểm tra liệu: thẳng, không xoắn, không khuyết.", "Chạy CNC vành theo bản vẽ (liệu dài và liệu ngắn), dây Ø3,4mm.", "Kiểm tra chiều dài, độ thẳng và độ dày liệu."] },
      { name: "Dập chân vành", steps: ["Kiểm tra liệu và định hình khuôn.", "Dập chân vành.", "Kiểm tra kích thước, độ thẳng, chân vành và độ phẳng mặt.", "Sắp vào khuôn treo và ký nghiệm hàng."] },
      { name: "Hàn vành", steps: ["Kiểm tra liệu và hàn nối vành.", "Kiểm tra lại mối hàn và độ phẳng bề mặt.", "Sắp xếp vào thùng và ký nghiệm hàng."] },
      { name: "Hàn lưới", steps: ["Kiểm tra và lấy liệu, sắp đều về một hướng.", "Đưa liệu vào khuôn — thanh dài nằm trên thanh ngắn.", "Khóa liệu, kiểm tra lại lưới và đưa vào vị trí hàn.", "Chạy hàn, tháo lưới, kiểm tra mối hàn và đường lưới."] },
      { name: "Nắn thẳng lưới", steps: ["Kiểm tra lưới.", "Đưa vào máy nắn thẳng lưới.", "Kiểm tra lại độ thẳng.", "Sắp xếp vào pallet và ký nghiệm hàng."] },
      { name: "Định hình & dập hàn viền", steps: ["Bẻ góc chân vành.", "Kiểm tra lưới khi vào khuôn, định hình vành và lưới.", "Chỉnh thẳng lưới cạnh và góc.", "Dập hàn viền cạnh dài, rồi cạnh ngắn; cắt viền và cắt vị trí V theo bản vẽ."] },
    ],
    rules: ["Liệu phải thẳng, không cong vênh, không xoắn, không khuyết", "Kiểm tra sau mỗi lần hàn — không đạt thì ngưng máy xử lý rồi mới chạy tiếp", "Chiều dài, đường kính đúng theo bản vẽ", "Mối hàn chắc chắn, không bong"],
  },
  {
    slug: "go",
    title: "Chi tiết gỗ gia dụng",
    short: "CNC, tiện, chà nhám",
    intro:
      "Cây lăn bột (item 23827, 23830) và chi tiết gỗ gia dụng — cắt liệu, tiện, gọt tròn, chà nhám, khoan lỗ và lắp ráp với nút nhựa.",
    hero: "/images/lanbot/san-pham.webp",
    items: ["Cây lăn bột 23827 / 23830", "Tay cầm gỗ dụng cụ bếp", "Chi tiết gỗ tiện CNC theo bản vẽ"],
    specs: [
      { label: "Gia công", value: "Cưa, bào, CNC phay, tiện, khoan, chà nhám" },
      { label: "Lắp ráp", value: "Nút nhựa 2 đầu, ty Ø5,3mm, khe hở 1mm" },
      { label: "Năng lực", value: "7 máy CNC phay, 11 máy khoan, máy tiện" },
      { label: "Hoàn thiện", value: "Chà nhám, bo cạnh, sơn bóng" },
    ],
    stages: LANBOT_STAGES,
    qc: ["Khuyết liệu, thiếu liệu, nứt, sâu thân", "Cong tay cầm, lỗ lệch tâm, lệch tâm trục", "Hở nút, sai kích thước"],
    gallery: ["/images/lanbot/tay-cam.webp", "/images/lanbot/than-lan.webp", "/images/lanbot/tien-go.webp", "/images/lanbot/tien-may.webp", "/images/lanbot/do-kich-thuoc.webp", "/images/lanbot/phoi-go.webp"],
    detail: [
      { name: "Cắt liệu theo thiết kế", steps: ["Kiểm tra và định hình phôi.", "Cắt thân theo bản vẽ, kiểm tra kích thước sau mỗi lần cắt."] },
      { name: "Tiện tay cầm", steps: ["Cắt liệu theo thiết kế.", "Kiểm tra, định hình vào khuôn và chạy liệu.", "Kiểm tra kích thước và nghiệm hàng."] },
      { name: "Gọt tròn thân & tay cầm", steps: ["Kiểm tra và định hình vào khuôn.", "Kiểm tra kích thước và ngoại quan."] },
      { name: "Tiện thân & bo cạnh", steps: ["Kiểm tra và định hình.", "Tiện, bo cạnh và kiểm tra kích thước."] },
      { name: "Khoan lỗ thân", steps: ["Kiểm tra liệu, định hình và khoan lỗ (Ø4,85mm, sâu 32–35mm; Ø9–10mm).", "Kiểm tra kích thước, lỗ không lệch tâm."] },
      { name: "Chà nhám thân", steps: ["Kiểm tra liệu, định hình và chạy chà nhám.", "Kiểm tra và chuẩn bị nghiệm hàng."] },
      { name: "Đóng nút nhựa & lắp tay cầm", steps: ["Kiểm tra và định hình lỗ, đóng nút nhựa 2 đầu (khe hở 1mm), không hở nút.", "Kiểm tra tâm trục.", "Đóng tay cầm vào trục (ty Ø5,3mm), định hình tay cầm vào thân."] },
    ],
    rules: ["Liệu thẳng, không cong vênh trong phạm vi kích thước sản phẩm", "Không khuyết liệu, không thiếu liệu, không nứt, không sâu thân", "Kiểm tra trước và sau mỗi lần gia công — chưa đạt phải xử lý mới chạy tiếp", "Chiều dài, đường kính đúng theo bản vẽ; khoan lỗ không lệch tâm"],
  },
  {
    slug: "nhua",
    title: "Nhựa ép & nhúng PE",
    short: "Tay cầm, chi tiết nhựa",
    intro:
      "Ép phun thân và bọc áo tay cầm nhựa cho dao, búa đập thịt và dụng cụ bếp; nhúng phủ PE bền màu theo yêu cầu.",
    hero: "/images/dao/image2.webp",
    items: ["Thân & tay cầm dao gọt vỏ", "Thân búa đập thịt", "Chi tiết nhựa ép theo khuôn khách hàng", "Nhúng phủ PE"],
    specs: [
      { label: "Thiết bị", value: "6 máy ép, máy trộn – xay liệu, máy nhúng" },
      { label: "Khuôn", value: "Thiết kế và chế tạo tại xưởng" },
      { label: "Kiểm tra", value: "Ngoại quan từng thân: trầy, dư liệu, biến dạng" },
      { label: "Ứng dụng", value: "Tay cầm dụng cụ nhà bếp, chi tiết gia dụng" },
    ],
    stages: BUA_STAGES,
    qc: ["Trầy xước, cấn móp", "Dư liệu, khuyết liệu", "Biến dạng, dính keo"],
    gallery: ["/images/bua/image14.webp", "/images/dao/image3.webp", "/images/bua/image1.webp", "/images/bua/image2.webp", "/images/bua/image17.webp", "/images/bua/image6.webp"],
    detail: [
      { name: "Ép nhựa thân", steps: ["Kiểm tra nguyên liệu khi nhập về, trộn liệu đến mức tiêu chuẩn rồi đưa vào máy ép.", "Kiểm tra khuôn, vận hành máy ép và điều chỉnh thông số phù hợp.", "Tách thân khỏi cuống thành từng cái; loại thân trầy, dư liệu, biến dạng, khuyết liệu.", "Sắp thành từng lớp trong thùng nhựa, chuyển công đoạn tiếp theo."] },
      { name: "Ép nhựa bọc tay cầm", steps: ["Kiểm tra khuôn, đặt thân vào khuôn.", "Vận hành máy bọc tay cầm, điều chỉnh thông số phù hợp.", "Lấy ra kiểm tra từng cái; loại thân trầy, dư liệu ở tay cầm, biến dạng, khuyết liệu.", "Xếp riêng từng thân tránh trầy xước."] },
      { name: "Lắp ráp (búa đập thịt)", steps: ["Kiểm tra đầu búa nhận từ đơn vị gia công: loại đầu trầy, gai không nhọn, dính keo, khuyết hoặc dư liệu.", "Lắp đầu búa với thân đã bọc tay cầm đúng chiều quy định.", "Kiểm tra từng sản phẩm, xếp vào thùng và quấn màng PE chống bụi."] },
    ],
    packing: ["Bắn dây tem lần 1 cố định tay cầm, lần 2 cố định thân sản phẩm", "4 sản phẩm đã đủ tem / 1 túi, dán kín miệng túi", "12 túi / thùng, chia đều 6 túi mỗi bên, ngăn bằng tấm lót chống va đập"],
  },
  {
    slug: "khuon-dap",
    // TODO: video tham khảo từ YouTube — thay bằng video quay tại xưởng
    // thêm "/videos/stamping-press.mp4" vào mảng khi có file video thứ hai
    videos: ["/videos/sheet-metal-stamping.mp4"],
    title: "Khuôn mẫu & dập kim loại",
    short: "Gia công theo bản vẽ",
    intro:
      "Tự thiết kế và chế tạo khuôn tại xưởng; nhận dập kim loại theo bản vẽ khách hàng với 40+ máy dập, máy thủy lực và máy cuốn.",
    hero: "/images/vi/han-luoi.webp",
    items: ["Khuôn ép nhựa", "Khuôn dập kim loại", "Khuôn hàn, đồ gá sản xuất", "Chi tiết dập theo bản vẽ"],
    specs: [
      { label: "Bộ phận khuôn", value: "Bắn điện, cắt dây, phay, tiện, mài" },
      { label: "Bộ phận dập", value: "32 máy dập, 4 máy thủy lực, 4 máy cuốn" },
      { label: "Đầu vào", value: "Bản vẽ 2D/3D (PDF, DWG, STEP) hoặc mẫu" },
      { label: "Lợi thế", value: "Rút ngắn thời gian làm mẫu, chủ động sửa khuôn" },
    ],
    stages: [
      { title: "Tiếp nhận bản vẽ / mẫu", desc: "Phân tích bản vẽ hoặc mẫu, đề xuất phương án khuôn và vật liệu.", img: "/images/lanbot/do-kich-thuoc.webp" },
      { title: "Chế tạo khuôn", desc: "Bắn điện, cắt dây, phay, tiện, mài các chi tiết khuôn ngay tại xưởng.", img: "/images/vi/vanh-luoi.webp" },
      { title: "Khuôn & đồ gá sản xuất", desc: "Khuôn hàn, đồ gá cố định chi tiết giúp sản phẩm đồng đều.", img: "/images/vi/han-luoi.webp" },
      { title: "Dập & định hình", desc: "Dập, cuốn, định hình chi tiết trên máy dập và máy thủy lực.", img: "/images/vi/thanh-pham.webp" },
      { title: "Kiểm tra kích thước", desc: "Đo kiểm theo bản vẽ bằng thiết bị hiệu chuẩn ISO/IEC 17025.", img: "/images/vi/kiem-tra.webp" },
    ],
    qc: ["Sai kích thước so với bản vẽ", "Cắt dư liệu, bavia", "Không phẳng, cong vênh sau dập"],
    gallery: ["/images/vi/vanh-luoi.webp", "/images/vi/han-luoi.webp", "/images/vi/thanh-pham.webp", "/images/vi/luoi-han.webp"],
  },
];
