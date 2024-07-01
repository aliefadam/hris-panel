import React from "react";

function DetailNotification({ notif }) {
    const dataPerizinan = () => {
        const data = [];
        for (const b in notif.body) {
            data.push({
                title: b,
                value: notif.body[b],
            });
        }

        console.log(data);

        return data.map((n, i) => {
            return (
                <div key={i} className="flex flex-col">
                    <span className="capitalize text-sm text-indigo-900 poppins-medium">
                        {n.title}
                    </span>
                    <span className="capitalize">{n.value}</span>
                </div>
            );
        });
    };

    return (
        <div className="p-5">
            <div className="flex justify-between items-center">
                <h1 className="text-xl text-indigo-900 poppins-semibold">
                    {notif.title}
                </h1>
                <h1 className=" text-indigo-900 poppins-semibold">
                    {notif.waktu_ori}
                </h1>
            </div>
            <p className="mt-3 text-justify">{notif.header}</p>
            <div className="mt-3 flex flex-col gap-3">{dataPerizinan()}</div>
        </div>
    );
}

export default DetailNotification;
