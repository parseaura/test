"use client";

import { CreditCard } from "lucide-react";
import { usePaymentForm } from "../model/paymentContext";
import styles from "./PaymentCard.module.css";

export default function PaymentCard() {
  const {
    formData,
    setFormData,
    errors,
    setErrors,
    touched,
    setTouched,
    isSubmitting,
    validateField,
  } = usePaymentForm();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    switch (name) {
      case "cardNumber":
        formattedValue = value.replace(/\D/g, "").slice(0, 16);
        if (formattedValue.length > 4) {
          formattedValue = formattedValue.replace(/(\d{4})/g, "$1 ").trim();
        }
        break;

      case "expiryMonth":
        formattedValue = value.replace(/\D/g, "").slice(0, 2);
        break;

      case "expiryYear":
        formattedValue = value.replace(/\D/g, "").slice(0, 4);
        break;

      case "cvv":
        formattedValue = value.replace(/\D/g, "").slice(0, 4);
        break;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));

    if (touched[name]) {
      const error = validateField(name, formattedValue);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Submitting payment:", {
        ...formData,
        cardNumber: formData.cardNumber.replace(/\s/g, ""),
      });

      alert("Payment successful!");

      setFormData({
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
        cardholderName: "",
      });

      setTouched({});
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <>
      <h3>Payment</h3>
      <div className={styles.paymentCard}>
        <div className={styles.paymentHeader}>
          <CreditCard size={20} />
          <span>Add credit / debit card</span>
        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.cardForm}
          id="payment-form"
        >
          <input
            type="text"
            id="cardholderName"
            name="cardholderName"
            value={formData.cardholderName}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Card Holder's Name"
            className={errors.cardholderName ? styles.inputError : ""}
            disabled={isSubmitting}
          />
          {errors.cardholderName && (
            <span className={styles.error}>{errors.cardholderName}</span>
          )}

          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Card Number"
            className={errors.cardNumber ? styles.inputError : ""}
            disabled={isSubmitting}
          />
          {errors.cardNumber && (
            <span className={styles.error}>{errors.cardNumber}</span>
          )}

          <p className={styles.label}>Expiry Date</p>
          <div className={styles.expiryInput}>
            <div className={styles.expiryInputGroup}>
              <input
                type="text"
                id="expiryMonth"
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Month"
                maxLength={2}
                className={errors.expiryMonth ? styles.inputError : ""}
                disabled={isSubmitting}
              />
              {errors.expiryMonth && (
                <span className={styles.error}>{errors.expiryMonth}</span>
              )}
            </div>
            <div className={styles.expiryInputGroup}>
              <input
                type="text"
                id="expiryYear"
                name="expiryYear"
                value={formData.expiryYear}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Year"
                maxLength={4}
                className={errors.expiryYear ? styles.inputError : ""}
                disabled={isSubmitting}
              />
              {errors.expiryYear && (
                <span className={styles.error}>{errors.expiryYear}</span>
              )}
            </div>
          </div>

          <input
            type="password"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Security code"
            maxLength={4}
            className={errors.cvv ? styles.inputError : ""}
            disabled={isSubmitting}
          />
          {errors.cvv && <span className={styles.error}>{errors.cvv}</span>}
        </form>
      </div>
    </>
  );
}
