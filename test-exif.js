const exifr = require('exifr');
const path = require('path');

async function checkExif() {
  console.log('Checking EXIF data in photography images...\n');
  
  for (let i = 1; i <= 11; i++) {
    const imagePath = path.join(__dirname, 'public', 'images', 'photography', `${i}.JPG`);
    console.log(`\n📸 Image ${i}.JPG:`);
    
    try {
      const exif = await exifr.parse(imagePath);
      
      if (exif) {
        console.log('✅ EXIF data found:');
        if (exif.Make) console.log(`   Camera: ${exif.Make} ${exif.Model || ''}`);
        if (exif.LensModel) console.log(`   Lens: ${exif.LensModel}`);
        if (exif.FocalLength) console.log(`   Focal Length: ${exif.FocalLength}mm`);
        if (exif.FNumber) console.log(`   Aperture: f/${exif.FNumber}`);
        if (exif.ExposureTime) console.log(`   Shutter: ${exif.ExposureTime}s`);
        if (exif.ISO) console.log(`   ISO: ${exif.ISO}`);
        if (exif.DateTimeOriginal) console.log(`   Date: ${exif.DateTimeOriginal}`);
      } else {
        console.log('❌ No EXIF data found');
      }
    } catch (error) {
      console.log(`❌ Error reading EXIF: ${error.message}`);
    }
  }
}

checkExif();
