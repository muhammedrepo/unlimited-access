function PaymentProofItem({ image }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <img src={image.url} alt="img" className="w-full" />
    </div>
  );
}
export default PaymentProofItem;
