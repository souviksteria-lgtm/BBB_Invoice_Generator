# BBB Invoice Generator - Mobile App (APK)

This directory contains the Cordova project setup for building the Beyond Blissful Bakes Invoice Generator as a native Android APK application.

## Project Structure

```
bbb-mobile-app/
├── www/                 # Web app files (HTML, CSS, JS, assets)
├── res/                 # Icons and splash screens
├── config.xml          # Cordova configuration
├── package.json        # Node dependencies
└── README.md           # This file
```

## Prerequisites

Before building the APK, install the following:

1. **Node.js** (v14 or higher)
   - Download from: https://nodejs.org/

2. **Java Development Kit (JDK)** (v11 or higher)
   - Download from: https://adoptopenjdk.net/

3. **Android SDK**
   - Install Android Studio from: https://developer.android.com/studio
   - Or install Android Command Line Tools

4. **Cordova CLI**
   ```bash
   npm install -g cordova
   ```

## Setup Instructions

### 1. Install Dependencies

Navigate to the project directory and install npm packages:

```bash
cd bbb-mobile-app
npm install
```

### 2. Add Android Platform

```bash
cordova platform add android
```

### 3. Prepare the Project

```bash
cordova prepare
```

## Building the APK

### Development APK (Debug)

```bash
cordova build android
```

The debug APK will be located at: `platforms/android/app/build/outputs/apk/debug/app-debug.apk`

### Release APK

For production release, create a signed APK:

```bash
cordova build android --release
```

You'll need a keystore file. If you don't have one:

```bash
keytool -genkey -v -keystore ./my-release-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias
```

Then build with the keystore:

```bash
cordova build android --release -- --keystore=./my-release-key.keystore --storePassword=YourPassword --alias=my-key-alias --password=AliasPassword
```

## Testing

### Run on Emulator

```bash
cordova emulate android
```

### Run on Physical Device

Connect your Android device via USB (with USB debugging enabled) and run:

```bash
cordova run android
```

## Mobile App Features

- ✅ Invoice and Order generation
- ✅ Item catalog from JSON
- ✅ Custom item support
- ✅ Print/PDF export
- ✅ WhatsApp sharing
- ✅ QR code generation
- ✅ Offline functionality (local storage)

## File Structure in www/

- `index.html` - Invoice generator
- `myorder.html` - Order generator
- `catalogue.json` - Product catalog
- `signature.png` - Store signature/logo
- CSS and JavaScript bundled in HTML files

## Building Release for Google Play

1. Generate a signed APK using the release instructions above
2. Create a Google Play Developer account
3. Upload the signed APK to Google Play Console
4. Fill in store listing information
5. Submit for review

## Troubleshooting

### Build Issues

- **Java path not found**: Ensure JDK is installed and JAVA_HOME environment variable is set
- **Android SDK not found**: Install Android Studio or set ANDROID_HOME environment variable
- **Gradle errors**: Run `rm -rf platforms/android` and rebuild

### Runtime Issues

- **App crashes on startup**: Check browser console with `cordova plugin add cordova-plugin-console`
- **File access errors**: Ensure proper permissions in config.xml

## Support & Documentation

- [Apache Cordova Documentation](https://cordova.apache.org/docs/en/latest/)
- [Android Development Guide](https://developer.android.com/docs)
- Beyond Blissful Bakes: Contact Baisakhi

## Version History

- v1.0.0 - Initial release
