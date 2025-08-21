import styles from "./PaymentButton.module.css";
import { usePaymentForm } from "../model/paymentContext";

export default function PaymentButton() {
  const { isSubmitting, isFormValid } = usePaymentForm();

  return (
    <button
      type="submit"
      disabled={!isFormValid || isSubmitting}
      form="payment-form"
      className={styles.submitButton}
    >
      {isSubmitting ? <>Processing...</> : "Pay Now"}
    </button>
  );
}
