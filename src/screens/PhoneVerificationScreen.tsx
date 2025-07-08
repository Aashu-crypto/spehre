import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

const { width } = Dimensions.get("window");
type NavigationProp = StackNavigationProp<RootStackParamList>;

const PhoneVerificationScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleConfirm = () => {
    const fullPhoneNumber = `+91 ${phoneNumber}`;
    navigation.navigate("OTPConfirmation", { phoneNumber: fullPhoneNumber });
  };

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
          <Text style={styles.signUpText}>Sign up</Text>
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
            <Text style={styles.title}>Enter your phone{"\n"}number</Text>
            <Text style={styles.subtitle}>
              We will send an OTP verification to you.
            </Text>
          </View>

          <View style={styles.formSection}>
            <View style={styles.phoneInputContainer}>
              <View style={styles.countryCodeContainer}>
                <Text style={styles.countryCode}>+91</Text>
                <View style={styles.divider} />
              </View>
              <TextInput
                style={styles.phoneInput}
                placeholder="Phone Number"
                placeholderTextColor="#94A3B8"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
                maxLength={10}
                returnKeyType="done"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={true}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.confirmButton,
            phoneNumber.length < 10 && styles.confirmButtonDisabled,
          ]}
          onPress={handleConfirm}
          activeOpacity={0.9}
          disabled={phoneNumber.length < 10}
        >
          <Text
            style={[
              styles.confirmButtonText,
              phoneNumber.length < 10 && styles.confirmButtonTextDisabled,
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  icon: {
    height: 100,
    width: 100,
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
    backgroundColor: "#ffffff",
  },
  signUpText: {
    color: "#1976D2",
    fontSize: 14,
    fontWeight: "500",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
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
    top: -8,
    right: -8,
    backgroundColor: "#0D47A1",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
    zIndex: 1,
  },
  starsContainer: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: 32,
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
  formSection: {
    marginTop: 20,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderWidth: 1.5,
    borderColor: "#1976D2",
    shadowColor: "#1976D2",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  countryCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 12,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E293B",
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: "#E2E8F0",
    marginLeft: 12,
  },
  phoneInput: {
    flex: 1,
    fontSize: 16,
    color: "#1E293B",
    paddingVertical: 16,
    paddingLeft: 12,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    marginTop: "auto",
  },
  confirmButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#007AFF",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  confirmButtonDisabled: {
    backgroundColor: "#E5E7EB",
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

export default PhoneVerificationScreen;
