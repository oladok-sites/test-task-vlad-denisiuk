import { prisma } from "@/lib/prisma";

export default async function Admin() {
    const leads = await prisma.lead.findMany();

    return (
        <div className="min-h-[calc(100vh-128px)] bg-slate-950 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Лиды</h1>
                    <p className="text-slate-400">Обработка всех входящих лидов.</p>
                </div>

                {leads.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-slate-400">No leads yet</p>
                    </div>
                ) : (
                    <>
                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-hidden rounded-lg border border-slate-800">
                            <table className="w-full">
                                <thead className="bg-slate-900 border-b border-slate-800">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">ID</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">Имя</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">Телефон</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">Email</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">Тип услуги</th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-200">Комментарий</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {leads.map((lead) => (
                                        <tr key={lead.id} className="bg-slate-900/50 hover:bg-slate-900 transition-colors">
                                            <td className="px-6 py-4 text-sm text-slate-300">{lead.id}</td>
                                            <td className="px-6 py-4 text-sm text-white font-medium">{lead.name}</td>
                                            <td className="px-6 py-4 text-sm text-slate-300">{lead.phone}</td>
                                            <td className="px-6 py-4 text-sm text-slate-300">{lead.email}</td>
                                            <td className="px-6 py-4 text-sm">
                                                <span className="inline-block px-3 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs font-medium">
                                                    {lead.serviceType}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-slate-300 max-w-xs truncate">{lead.comment || '—'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile Cards */}
                        <div className="md:hidden space-y-4">
                            {leads.map((lead) => (
                                <div key={lead.id} className="bg-slate-900 border border-slate-800 rounded-lg p-5 space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-xs text-slate-500 mb-1">ID</p>
                                            <p className="text-sm font-semibold text-white">#{lead.id}</p>
                                        </div>
                                        <span className="inline-block px-3 py-1 rounded bg-indigo-500/20 text-indigo-300 text-xs font-medium">
                                            {lead.serviceType}
                                        </span>
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-500 mb-1">Name</p>
                                        <p className="text-sm text-white font-medium">{lead.name}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-xs text-slate-500 mb-1">Phone</p>
                                            <p className="text-sm text-slate-300">{lead.phone}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 mb-1">Email</p>
                                            <p className="text-sm text-slate-300 truncate">{lead.email}</p>
                                        </div>
                                    </div>

                                    {lead.comment && (
                                        <div>
                                            <p className="text-xs text-slate-500 mb-1">Comment</p>
                                            <p className="text-sm text-slate-300">{lead.comment}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}