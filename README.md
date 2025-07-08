# Spehre - Mobile Authentication App

A pixel-perfect recreation of the Spehre authentication flow built with Expo and React Native.

## 🚀 Features

- **Beautiful UI**: Pixel-perfect recreation of the original design
- **Complete Authentication Flow**: 5 screens covering the full user journey
- **Test Navigation**: Easy screen-to-screen navigation for testing
- **TypeScript**: Fully typed for better development experience
- **Modern Architecture**: Clean, organized, and scalable code structure

## 📱 Screens

1. **Welcome Screen**: Blue gradient landing page with app introduction
2. **Login Screen**: Email/password login with social authentication options
3. **Phone Verification**: Phone number input with country code
4. **OTP Confirmation**: 4-digit verification code entry
5. **Password Setup**: New password creation with validation

## 🛠️ Tech Stack

- **Expo**: React Native development platform
- **React Navigation**: Navigation library for screen transitions
- **TypeScript**: Type-safe JavaScript
- **Expo Vector Icons**: Beautiful icons throughout the app
- **Linear Gradient**: Stunning visual effects

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── navigation/          # Navigation configuration
│   └── AppNavigator.tsx # Main navigation setup
├── screens/            # All screen components
│   ├── WelcomeScreen.tsx
│   ├── LoginScreen.tsx
│   ├── PhoneVerificationScreen.tsx
│   ├── OTPConfirmationScreen.tsx
│   ├── PasswordSetupScreen.tsx
│   └──
└── types/              # TypeScript type definitions
    └── navigation.ts   # Navigation types
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI: `npm install -g @expo/cli`
- iOS Simulator or Android Emulator (or physical device with Expo Go)

### Installation

1. **Navigate to project directory**:

   ```bash
   cd Spehre
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

4. **Run on your device**:
   - **iOS**: Press `i` to open in iOS Simulator
   - **Android**: Press `a` to open in Android Emulator
   - **Web**: Press `w` to open in web browser
   - **Physical Device**: Scan QR code with Expo Go app

## 🧪 Testing

The app starts with a **Test Navigator** screen that allows you to navigate directly to any screen for testing purposes. This makes it easy to:

- Test individual screens without going through the entire flow
- Quickly iterate on UI changes
- Demonstrate specific features to stakeholders

## 🎨 Design Features

- **Color Scheme**: Beautiful blue gradient theme matching the original design
- **Typography**: Clean, modern fonts with proper hierarchy
- **Icons**: Consistent iconography using Expo Vector Icons
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Optimized for various screen sizes
- **Accessibility**: Proper contrast ratios and touch targets

## 📱 Navigation Flow

```
TestNavigator (Starting Point)
    ├── Welcome
    │   ├── → Create Account → PhoneVerification
    │   └── → Log In → Login
    ├── Login
    │   ├── → Sign up → PhoneVerification
    │   └── → Confirm → PhoneVerification
    ├── PhoneVerification
    │   └── → Confirm → OTPConfirmation
    ├── OTPConfirmation
    │   └── → Confirm → PasswordSetup
    └── PasswordSetup
        └── → Confirm → Welcome
```

## 🔧 Customization

### Colors

The app uses a consistent color palette defined in each screen's styles:

- Primary Blue: `#1976D2`
- Light Blue: `#42A5F5`
- Background: `#ffffff`
- Text: `#1E293B`
- Secondary Text: `#64748B`

### Fonts

Currently using system fonts. You can easily integrate custom fonts by:

1. Adding font files to `assets/fonts/`
2. Loading them in `App.tsx`
3. Updating StyleSheet font families

## 🚧 Future Enhancements

This is a UI-only implementation. To make it production-ready, you could add:

- **Backend Integration**: Connect to authentication APIs
- **Form Validation**: Real-time input validation
- **Error Handling**: Proper error states and messaging
- **Loading States**: Spinners and skeleton screens
- **Biometric Auth**: Fingerprint/Face ID integration
- **Deep Linking**: URL-based navigation
- **Analytics**: User behavior tracking
- **Testing**: Unit and integration tests

## 📄 License

This project is for demonstration purposes. Please ensure you have proper licensing for any production use.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues, please create an issue in the repository.

---

**Note**: This is a UI-only implementation focused on pixel-perfect recreation of the design. All form submissions and authentication flows are simulated for demonstration purposes.
