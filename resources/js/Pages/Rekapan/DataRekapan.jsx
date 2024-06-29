import MainLayout from "@/Layouts/MainLayout";

const dapatPenilaian = (penilaian) => {
    if (penilaian) {
        return (
            <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                Dapat
            </span>
        );
    } else {
        return (
            <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Tidak Dapat
            </span>
        );
    }
};

function DataRekapan({ title, dataRekap, dataKinerja, auth }) {
    return (
        <MainLayout user={auth.user} title={title}>
            <div className="flex justify-center">
                <h1 className="text-xl text-indigo-900 poppins-semibold ">
                    Data Rekapan Bulan Lalu - {""}
                    <span className="italic">Mei</span>
                </h1>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-5">
                {dataRekap.map((rekap, i) => {
                    return (
                        <div
                            key={i}
                            className="bg-white shadow border border-200 rounded-lg p-3 flex justify-between"
                        >
                            <span className="text-indigo-900 poppins-medium">
                                {rekap.title}
                            </span>
                            <span className="text-yellow-300 poppins-semibold">
                                {rekap.value}
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center mt-10">
                <h1 className="text-xl text-indigo-900 poppins-semibold ">
                    Kinerja Karyawan Bulan Lalu - {""}
                    <span className="italic">Mei</span>
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5">
                {dataKinerja.map((kinerja, i) => {
                    return (
                        <div
                            key={i}
                            className="bg-white shadow border border-200 rounded-lg p-3 flex justify-between"
                        >
                            <span className="text-indigo-900 poppins-medium">
                                {kinerja.title}
                            </span>
                            {i == 2 ? (
                                dapatPenilaian(kinerja.value)
                            ) : (
                                <span className="text-yellow-300 poppins-semibold">
                                    {kinerja.value}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </MainLayout>
    );
}

export default DataRekapan;
