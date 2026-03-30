// 🔥 Add this function at the top (outside component)
export const generateTrackingId = () => {
    const prefix = "TRK";
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();

    return `${prefix}-${timestamp}-${random}`;
};