import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";

const { width } = Dimensions.get("window");
type NavigationProp = StackNavigationProp<RootStackParamList>;
type OTPRouteProps = RouteProp<RootStackParamList, "OTPConfirmation">;

const OTPConfirmationScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<OTPRouteProps>();
  const { phoneNumber } = route.params;

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-move to next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleConfirm = () => {
    if (otp.join("").length === 4) {
      navigation.navigate("PasswordSetup");
    }
  };

  const isOtpComplete = otp.join("").length === 4;

  // Extract last 4 digits for display
  const maskedNumber = phoneNumber.replace(/\d(?=\d{4})/g, "X");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={24} color="#1976D2" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("Login")}
          activeOpacity={0.7}
        >
          <Text style={styles.signUpText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View style={styles.iconSection}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../../assets/image.png")}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.titleSection}>
            <Text style={styles.title}>Confirm your{"\n"}number</Text>
            <Text style={styles.subtitle}>
              Enter the code we sent to the number{"\n"}ending with{" "}
              {maskedNumber.slice(-4)}
            </Text>
          </View>

          <View style={styles.otpSection}>
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref: TextInput | null): void => {
                    inputRefs.current[index] = ref;
                  }}
                  style={[
                    styles.otpInput,
                    digit ? styles.otpInputFilled : styles.otpInputEmpty,
                    index === 0 ? styles.otpInputFirst : {},
                  ]}
                  value={digit}
                  onChangeText={(value) => handleOtpChange(value, index)}
                  onKeyPress={({ nativeEvent }) =>
                    handleKeyPress(nativeEvent.key, index)
                  }
                  keyboardType="numeric"
                  maxLength={1}
                  textAlign="center"
                  selectTextOnFocus
                  returnKeyType="done"
                  blurOnSubmit={true}
                />
              ))}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.confirmButton,
            !isOtpComplete && styles.confirmButtonDisabled,
          ]}
          onPress={handleConfirm}
          activeOpacity={0.9}
          disabled={!isOtpComplete}
        >
          <Text
            style={[
              styles.confirmButtonText,
              !isOtpComplete && styles.confirmButtonTextDisabled,
            ]}
          >
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  icon: {
    height: 100,
    width: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#1976D2",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#1976D2",
  },
  signUpText: {
    color: "#1976D2",
    fontSize: 14,
    fontWeight: "500",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  iconSection: {
    alignItems: "center",
  },
  iconContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  securityBadge: {
    position: "absolute",
    top: -10,
    right: -5,
    backgroundColor: "#0D47A1",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    zIndex: 1,
  },
  starsContainer: {
    flexDirection: "row",
    gap: 2,
  },
  lockContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  titleSection: {
    alignItems: "flex-start",
    marginBottom: 48,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1E293B",
    textAlign: "left",
    marginBottom: 8,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748B",
    textAlign: "left",
    lineHeight: 22,
  },
  otpSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: "row",
    gap: 16,
  },
  otpInput: {
    width: 76,
    height: 56,
    borderRadius: 28,
    fontSize: 24,
    fontWeight: "600",
    color: "#1E293B",
  },
  otpInputEmpty: {
    backgroundColor: "#F8FAFC",
    borderWidth: 2,
    borderColor: "#E2E8F0",
  },
  otpInputFilled: {
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#1976D2",
    shadowColor: "#1976D2",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  otpInputFirst: {
    // Add any special styling for first input if needed
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  confirmButton: {
    backgroundColor: "#1976D2",
    borderRadius: 25,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#1976D2",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  confirmButtonDisabled: {
    backgroundColor: "#E2E8F0",
    shadowOpacity: 0,
    elevation: 0,
  },
  confirmButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  confirmButtonTextDisabled: {
    color: "#94A3B8",
  },
});

export default OTPConfirmationScreen;
