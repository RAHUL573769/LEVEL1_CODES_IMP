/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// 🔥 Sample service center data with region & district
const serviceCenters = [
    { region: "Dhaka", district: "Dhaka", center: "Uttara Branch" },
    { region: "Dhaka", district: "Gazipur", center: "Gazipur Branch" },
    { region: "Chattogram", district: "Chattogram", center: "Agrabad Branch" },
    { region: "Sylhet", district: "Sylhet", center: "Sylhet Branch" },
    // Add more districts/service centers as needed
];

// 🔥 Get distinct regions
const regions = [...new Set(serviceCenters.map((s) => s.region))];

export default function ParcelForm() {
    const { register, handleSubmit, watch, reset } = useForm();
    const [cost, setCost] = useState(null);

    const type = watch("type");
    const senderRegion = watch("senderRegion");
    const receiverRegion = watch("receiverRegion");

    // 🔥 Filter service centers based on selected region
    const senderCenters = serviceCenters.filter(s => s.region === senderRegion);
    const receiverCenters = serviceCenters.filter(s => s.region === receiverRegion);

    // 💰 simple cost calculation
    const calculateCost = (data) => {
        let base = data.type === "document" ? 50 : 100;
        let weightCost = data.weight ? data.weight * 20 : 0;
        return base + weightCost;
    };

    const onSubmit = (data) => {
        const deliveryCost = calculateCost(data);
        setCost(deliveryCost);

        toast((t) => (
            <div className="space-y-2">
                <p className="font-semibold">Delivery Cost: ৳{deliveryCost}</p>
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => {
                        console.log({ ...data, cost: deliveryCost, createdAt: new Date() });
                        toast.dismiss(t.id);
                        toast.success("Parcel Confirmed!");
                        reset();
                    }}
                >
                    Confirm
                </button>
            </div>
        ));
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Toaster />

            <h1 className="text-3xl font-bold text-center">Add Parcel</h1>
            <p className="text-center text-gray-500 mb-6">
                Door to Door Parcel Delivery Service
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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

                {/* 🔥 Side-by-side sender & receiver */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Sender Info */}
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

                        {/* 🔥 Region Dropdown */}
                        <select
                            {...register("senderRegion", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Region</option>
                            {regions.map(r => (
                                <option key={r} value={r}>{r}</option>
                            ))}
                        </select>

                        {/* 🔥 Service Center Dropdown filtered by region */}
                        <select
                            {...register("senderCenter", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Service Center</option>
                            {senderCenters.map(c => (
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

                    {/* Receiver Info */}
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

                        {/* 🔥 Region Dropdown */}
                        <select
                            {...register("receiverRegion", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Region</option>
                            {regions.map(r => (
                                <option key={r} value={r}>{r}</option>
                            ))}
                        </select>

                        {/* 🔥 Service Center Dropdown filtered by region */}
                        <select
                            {...register("receiverCenter", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Service Center</option>
                            {receiverCenters.map(c => (
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

                <button className="btn btn-primary w-full">Submit</button>
            </form>
        </div>
    );
}