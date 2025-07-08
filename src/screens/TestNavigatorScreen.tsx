import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type NavigationProp = StackNavigationProp<RootStackParamList>;

const TestNavigatorScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const screens = [
    {
      name: "Welcome",
      title: "Welcome Screen",
      route: "Welcome" as keyof RootStackParamList,
    },
    {
      name: "Login",
      title: "Login Screen",
      route: "Login" as keyof RootStackParamList,
    },
    {
      name: "PhoneVerification",
      title: "Phone Verification",
      route: "PhoneVerification" as keyof RootStackParamList,
    },
    {
      name: "OTPConfirmation",
      title: "OTP Confirmation",
      route: "OTPConfirmation" as keyof RootStackParamList,
    },
    {
      name: "PasswordSetup",
      title: "Password Setup",
      route: "PasswordSetup" as keyof RootStackParamList,
    },
  ];

  const handleNavigate = (route: keyof RootStackParamList) => {
    if (route === "OTPConfirmation") {
      navigation.navigate(route, { phoneNumber: "+91 98765 43210" });
    } else {
      navigation.navigate(route as any);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>🧪 Spehre Test Navigator</Text>
        <Text style={styles.subtitle}>
          Main App (Placeholder) • Navigate to any screen for testing
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.restartButton]}
            onPress={() => navigation.navigate("Welcome")}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>🔄 Restart Auth Flow</Text>
          </TouchableOpacity>

          {screens.map((screen) => (
            <TouchableOpacity
              key={screen.name}
              style={styles.button}
              onPress={() => handleNavigate(screen.route)}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>{screen.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            • Sequential navigation: Welcome → Login/SignUp → OTP → Password →
            Main App
          </Text>
          <Text style={styles.infoText}>
            • All screens are UI-only implementations
          </Text>
          <Text style={styles.infoText}>
            • Navigation flow matches the design
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e293b",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#64748b",
    marginBottom: 32,
  },
  buttonsContainer: {
    gap: 16,
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#3b82f6",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: "center",
    shadowColor: "#3b82f6",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  restartButton: {
    backgroundColor: "#10b981",
  },
  infoContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 20,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoText: {
    fontSize: 14,
    color: "#64748b",
    lineHeight: 20,
  },
});

export default TestNavigatorScreen;
