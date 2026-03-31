/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from '../../../hooks/useAuth';
import { generateTrackingId } from "../../utils/trackingId";
import useAxisSecure from "../../../hooks/useAxisSecure";
const serviceCenters = [
    { region: "Dhaka", district: "Dhaka", center: "Uttara Branch" },
    { region: "Dhaka", district: "Gazipur", center: "Gazipur Branch" },
    { region: "Chattogram", district: "Chattogram", center: "Agrabad Branch" },
    { region: "Sylhet", district: "Sylhet", center: "Sylhet Branch" },
];

const regions = [...new Set(serviceCenters.map((s) => s.region))];

export default function ParcelForm() {
    const { register, handleSubmit, watch, reset } = useForm();
    const { user } = useAuth()
    const axiosSecure = useAxisSecure()
    const [cost, setCost] = useState(null);

    const type = watch("type");
    const senderRegion = watch("senderRegion");
    const receiverRegion = watch("receiverRegion");

    const senderCenters = serviceCenters.filter(
        (s) => s.region === senderRegion
    );
    const receiverCenters = serviceCenters.filter(
        (s) => s.region === receiverRegion
    );

    // 💰 FINAL PRICING LOGIC
    const calculateCost = (data) => {
        const isWithinCity = data.senderRegion === data.receiverRegion;

        // Document
        if (data.type === "document") {
            return isWithinCity ? 60 : 80;
        }

        // Non-document
        const weight = Number(data.weight) || 0;

        if (!weight) return 110; // fallback or validation case

        // Up to 3kg
        if (weight <= 3) {
            return isWithinCity ? 110 : 150;
        }

        // Above 3kg
        const extraKg = weight - 3;

        if (isWithinCity) {
            return 110 + extraKg * 40;
        } else {
            return 150 + extraKg * 40 + 40; // +40 outside city
        }
    };
    const onSubmit = async (data) => {
        const cost = calculateCost(data);

        // 🔥 Generate tracking ID
        const trackingId = generateTrackingId();

        // 🔥 Proper timestamp
        const createdAt = new Date().toISOString();

        const parcelData = {
            ...data,
            cost,
            trackingId, // ✅ added
            createdAt,

            createdBy: {
                email: user?.email,
                uid: user?.uid,
                name: user?.name,
            },

            status: "pending",
            paymentStatus: "unpaid",
        };

        axiosSecure.post("/parcels", parcelData).then(res => { console.log(res) }).catch(error => { console.log(error) })

        //     const result = await Swal.fire({
        //         title: "Confirm Parcel",
        //         html: `
        //   <div style="text-align:left">
        //     <p><strong>Tracking ID:</strong> ${trackingId}</p>
        //     <p><strong>Email:</strong> ${user?.email}</p>
        //     <hr/>
        //     <p><strong>Total Cost:</strong>
        //       <span style="color:green;font-weight:bold">৳${cost}</span>
        //     </p>
        //   </div>
        // `,
        //         icon: "info",
        //         showCancelButton: true,
        //         confirmButtonText: "Proceed to Payment 💳",
        //         cancelButtonText: "Edit",
        //     });

        // if (result.isConfirmed) {
        //     console.log("SAVE TO DB 👉", parcelData);

        //     Swal.fire({
        //         title: "Parcel Created!",
        //         html: `<p>Your Tracking ID:</p>
        //      <strong style="font-size:18px">${trackingId}</strong>`,
        //         icon: "success",
        //     });

        //     reset();
        // }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Toaster />

            <h1 className="text-3xl font-bold text-center">Add Parcel</h1>
            <p className="text-center text-gray-500 mb-6">
                Door to Door Parcel Delivery Service
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Pricing Info */}
                <div className="alert bg-base-200 text-sm">
                    <ul className="list-disc ml-5">
                        <li>Document: ৳60 (Within City), ৳80 (Outside)</li>
                        <li>Non-Document ≤3kg: ৳110 (Within), ৳150 (Outside)</li>
                        <li>3kg: +৳40/kg</li>
                        <li>Outside extra: +৳40</li>
                    </ul>
                </div>

                {/* Parcel Info */}
                <div className="card bg-base-100 shadow p-5 space-y-4">
                    <h2 className="font-bold text-lg">Parcel Info</h2>

                    <select
                        {...register("type", { required: true })}
                        className="select select-bordered w-full"
                    >
                        <option value="">Select Type</option>
                        <option value="document">Document</option>
                        <option value="non-document">Non-Document</option>
                    </select>

                    <input
                        {...register("title", { required: true })}
                        placeholder="Parcel Title"
                        className="input input-bordered w-full"
                    />

                    {type === "non-document" && (
                        <input
                            type="number"
                            {...register("weight")}
                            placeholder="Weight (kg)"
                            className="input input-bordered w-full"
                        />
                    )}
                </div>

                {/* Sender & Receiver */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Sender */}
                    <div className="card bg-base-100 shadow p-5 space-y-4">
                        <h2 className="font-bold text-lg">Sender Info</h2>

                        <input
                            defaultValue="Rahul"
                            {...register("senderName", { required: true })}
                            className="input input-bordered w-full"
                        />

                        <input
                            {...register("senderContact", { required: true })}
                            placeholder="Contact"
                            className="input input-bordered w-full"
                        />

                        <select
                            {...register("senderRegion", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Region</option>
                            {regions.map((r) => (
                                <option key={r} value={r}>
                                    {r}
                                </option>
                            ))}
                        </select>

                        <select
                            {...register("senderCenter", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Service Center</option>
                            {senderCenters.map((c) => (
                                <option key={c.center} value={c.center}>
                                    {c.center} ({c.district})
                                </option>
                            ))}
                        </select>

                        <textarea
                            {...register("senderAddress", { required: true })}
                            placeholder="Address"
                            className="textarea textarea-bordered w-full"
                        />

                        <textarea
                            {...register("pickupInstruction", { required: true })}
                            placeholder="Pickup Instruction"
                            className="textarea textarea-bordered w-full"
                        />
                    </div>

                    {/* Receiver */}
                    <div className="card bg-base-100 shadow p-5 space-y-4">
                        <h2 className="font-bold text-lg">Receiver Info</h2>

                        <input
                            {...register("receiverName", { required: true })}
                            placeholder="Name"
                            className="input input-bordered w-full"
                        />

                        <input
                            {...register("receiverContact", { required: true })}
                            placeholder="Contact"
                            className="input input-bordered w-full"
                        />

                        <select
                            {...register("receiverRegion", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Region</option>
                            {regions.map((r) => (
                                <option key={r} value={r}>
                                    {r}
                                </option>
                            ))}
                        </select>

                        <select
                            {...register("receiverCenter", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Service Center</option>
                            {receiverCenters.map((c) => (
                                <option key={c.center} value={c.center}>
                                    {c.center} ({c.district})
                                </option>
                            ))}
                        </select>

                        <textarea
                            {...register("receiverAddress", { required: true })}
                            placeholder="Address"
                            className="textarea textarea-bordered w-full"
                        />

                        <textarea
                            {...register("deliveryInstruction", { required: true })}
                            placeholder="Delivery Instruction"
                            className="textarea textarea-bordered w-full"
                        />
                    </div>
                </div>

                {/* Terms */}
                <div className="form-control">
                    <label className="label cursor-pointer gap-3">
                        <input
                            type="checkbox"
                            {...register("terms", { required: true })}
                            className="checkbox checkbox-primary"
                        />
                        <span>I agree to pricing terms</span>
                    </label>
                </div>

                <button className="btn btn-primary w-full">Submit</button>
            </form>
        </div>
    );
}