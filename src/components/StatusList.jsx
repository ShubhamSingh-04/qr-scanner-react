import React from 'react';

export default function StatusList({ statusList }) {
    return (
        <div className="overflow-x-auto mt-4">
            <table className="table-auto w-full text-sm sm:text-base border border-gray-300">
                <thead>
                    <tr className="text-left bg-black">
                        <th className="p-2 border-b border border-gray-400">Code</th>
                        <th className="p-2 border-b border border-gray-400">Name</th>
                        <th className="p-2 border-b border border-gray-400">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        statusList.map((ele, idx) => (
                            <tr
                                key={idx}
                                className={`${
                                    ele.message === "Already 'Done'" ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                                }`}
                            >
                                <td className="p-2 border-b border border-gray-400">{ele.unique_code}</td>
                                <td className="p-2 border-b border border-gray-400">{ele.name}</td>
                                <td className="p-2 border-b border border-gray-400">{ele.message}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
