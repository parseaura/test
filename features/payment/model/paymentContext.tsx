"use client";

import { createContext, useContext, useState } from "react";

interface FormData {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  cardholderName: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

interface PaymentFormContextValue {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: FormErrors;
  setErrors: React.Dispatch<React.SetStateAction<FormErrors>>;
  touched: Record<string, boolean>;
  setTouched: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  isFormValid: boolean;
  validateField: (name: string, value: string) => string;
  validateForm: () => boolean;
}

const PaymentFormContext = createContext<PaymentFormContextValue | null>(null);

export const PaymentFormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    cardholderName: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "cardholderName":
        if (!value.trim()) return "Cardholder name is required";
        if (value.length < 2) return "Name is too short";
        return "";
      case "cardNumber":
        if (!value) return "Card number is required";
        if (/\D/.test(value.replace(/\s/g, ""))) return "Only digits allowed";
        if (value.replace(/\s/g, "").length < 16)
          return "Card number must be 16 digits";
        return "";
      case "expiryMonth":
        if (!value) return "Month is required";
        if (!/^\d{2}$/.test(value)) return "MM format required";
        const month = parseInt(value);
        if (month < 1 || month > 12) return "Invalid month";
        return "";
      case "expiryYear":
        if (!value) return "Year is required";
        if (!/^\d{4}$/.test(value)) return "YYYY format required";
        const year = parseInt(value);
        const currentYear = new Date().getFullYear();
        if (year < currentYear || year > currentYear + 20)
          return "Invalid year";
        return "";
      case "cvv":
        if (!value) return "CVV is required";
        if (!/^\d+$/.test(value)) return "Only digits allowed";
        if (value.length !== 3 && value.length !== 4)
          return "CVV must be 3-4 digits";
        return "";
      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid =
    Object.values(errors).every((error) => !error) &&
    Object.values(formData).every((value) => value.trim());

  return (
    <PaymentFormContext.Provider
      value={{
        formData,
        setFormData,
        errors,
        setErrors,
        touched,
        setTouched,
        isSubmitting,
        setIsSubmitting,
        isFormValid,
        validateField,
        validateForm,
      }}
    >
      {children}
    </PaymentFormContext.Provider>
  );
};

export const usePaymentForm = () => {
  const ctx = useContext(PaymentFormContext);
  if (!ctx)
    throw new Error("usePaymentForm must be used within PaymentFormProvider");
  return ctx;
};
