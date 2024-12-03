const UglifyJS = require('uglify-js');
const fs = require('fs');

// Đọc tệp JavaScript
const inputPath = 'js/scripts.js';
const outputPath = 'assets/js/scripts.min.js';

if (!fs.existsSync(inputPath)) {
    console.error('Tệp không tồn tại!');
    process.exit(1);
}

const code = fs.readFileSync(inputPath, 'utf8');

// Nén mã bằng UglifyJS
const result = UglifyJS.minify(code);

if (result.error) {
    console.error('Lỗi khi nén mã JavaScript:', result.error);
} else {
    fs.writeFileSync(outputPath, result.code);
    console.log('Nén JavaScript thành công!');
}
