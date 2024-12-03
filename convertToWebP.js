const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Các thư mục đầu vào
const inputDirs = [
    'assets/img/',        // Thư mục 1
    'assets/photo/',      // Thư mục 2
    'asset/photo/Project/MergeFruit'  // Thư mục 3
];

// Thư mục đầu ra
const outputDir = 'assets/img/webp/';

// Kiểm tra nếu thư mục đầu ra không tồn tại, tạo thư mục mới
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Duyệt qua tất cả các thư mục đầu vào
inputDirs.forEach(inputDir => {
    // Đọc tất cả các tệp trong thư mục đầu vào
    fs.readdirSync(inputDir).forEach(file => {
        const inputPath = path.join(inputDir, file);

        // Kiểm tra nếu là file hình ảnh (JPG/PNG)
        if (/\.(jpg|png)$/i.test(file)) {
            const outputPath = path.join(outputDir, path.basename(file, path.extname(file)) + '.webp');  // Đổi đuôi file thành .webp

            // Sử dụng sharp để chuyển đổi hình ảnh sang WebP
            sharp(inputPath)
                .webp({ quality: 75 })  // Chỉnh chất lượng (từ 0 đến 100)
                .toFile(outputPath, (err, info) => {
                    if (err) {
                        console.error(`Error processing file ${file}:`, err);
                    } else {
                        console.log(`Converted ${file} to WebP`);
                    }
                });
        }
    });
});
