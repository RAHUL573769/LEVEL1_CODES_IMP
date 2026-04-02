export const formatDate = (date) => {
    return new Date(date).toLocaleString();
};

export const getPaymentBadge = (status) => {
    return status === "paid" ? (
        <span className="badge badge-success text-white">Paid</span>
    ) : (
        <span className="badge badge-error text-white">Unpaid</span>
    );
};