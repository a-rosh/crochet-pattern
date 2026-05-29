const AddPattern = () => {
    return (
        <main className="max-w-5xl mx-auto mt-8 px-margin-mobile md:px-margin-desktop">
            {/* Hero Section Header */}
            <div className="mb-12">
                <h2 className="font-headline-lg text-headline-lg md:text-headline-xl text-on-surface mb-2">New Pattern</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">Document your next handcrafted masterpiece.</p>
            </div>
            {/* Bento Grid Form Layout */}
            <form className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                {/*  Left Column: Essential Details */}
                <div className="md:col-span-8 space-y-gutter">
                    {/*  Main Identity Card */}
                    <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_30px_rgb(240,128,128,0.08)]">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="font-label-lg text-label-lg text-on-surface-variant">Name</label>
                                <input
                                    className="w-full bg-surface-container-low border-none rounded-lg p-4 font-body-md text-body-md focus-ring"
                                    placeholder="Cozy Autumn Cardigan" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="font-label-lg text-label-lg text-on-surface-variant">Description
                                    (optional)</label>
                                <textarea
                                    className="w-full bg-surface-container-low border-none rounded-lg p-4 font-body-md text-body-md focus-ring resize-none"
                                    placeholder="A chunky knit oversized sweater with cable details..." rows={2}></textarea>
                            </div>
                        </div>
                    </section>
                    {/*  Pattern Content Card */}
                    <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_30px_rgb(240,128,128,0.08)]">
                        <div className="flex items-center justify-between mb-4">
                            <label className="font-label-lg text-label-lg text-on-surface-variant">Pattern Instructions</label>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-surface-container rounded-lg transition-colors"
                                    type="button"><span
                                        className="material-symbols-outlined text-primary">format_bold</span></button>
                                <button className="p-2 hover:bg-surface-container rounded-lg transition-colors"
                                    type="button"><span
                                        className="material-symbols-outlined text-primary">format_list_bulleted</span></button>
                            </div>
                        </div>
                        <textarea
                            className="w-full bg-surface-container-low border-none rounded-lg p-4 font-body-md text-body-md focus-ring custom-scrollbar"
                            placeholder="Row 1: Ch 20, sc in second ch from hook..." rows={12}></textarea>
                    </section>
                    {/*  Additional Notes */}
                    <section className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_8px_30px_rgb(240,128,128,0.08)]">
                        <div className="space-y-2">
                            <label className="font-label-lg text-label-lg text-on-surface-variant">Notes (optional)</label>
                            <textarea
                                className="w-full bg-surface-container-low border-none rounded-lg p-4 font-body-md text-body-md focus-ring resize-none"
                                placeholder="Recommended yarn: Merino Wool Blend, 200m per skein..." rows={3}></textarea>
                        </div>
                    </section>
                </div>
                {/*  Right Column: Specs & Media */}
                <aside className="md:col-span-4 space-y-gutter">
                    {/*  Metadata Card */}
                    <section className="bg-surface-container p-6 rounded-xl space-y-6">
                        <div className="space-y-2">
                            <label className="font-label-lg text-label-lg text-on-surface-variant">Status</label>
                            <div className="relative">
                                <select
                                    className="w-full appearance-none bg-surface-container-lowest border-none rounded-lg p-3 font-body-md text-body-md focus-ring pr-10">
                                    <option>Planned</option>
                                    <option>In Progress</option>
                                    <option>Finished</option>
                                </select>
                                <span
                                    className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="font-label-lg text-label-lg text-on-surface-variant">Hook Size</label>
                                <input
                                    className="w-full bg-surface-container-lowest border-none rounded-lg p-3 font-body-md text-body-md focus-ring text-center"
                                    placeholder="5.0mm" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="font-label-lg text-label-lg text-on-surface-variant">Total Rows</label>
                                <input
                                    className="w-full bg-surface-container-lowest border-none rounded-lg p-3 font-body-md text-body-md focus-ring text-center"
                                    placeholder="0" type="number" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="font-label-lg text-label-lg text-on-surface-variant">Category</label>
                            <div className="flex flex-wrap gap-2">
                                <label className="cursor-pointer">
                                    <input className="hidden peer" type="checkbox" />
                                    <span
                                        className="px-4 py-1.5 rounded-full bg-surface-container-lowest text-label-lg font-label-lg peer-checked:bg-primary-container peer-checked:text-on-primary-container transition-all">Sweater</span>
                                </label>
                                <label className="cursor-pointer">
                                    <input defaultChecked className="hidden peer" type="checkbox" />
                                    <span
                                        className="px-4 py-1.5 rounded-full bg-surface-container-lowest text-label-lg font-label-lg peer-checked:bg-primary-container peer-checked:text-on-primary-container transition-all">Crochet</span>
                                </label>
                                <label className="cursor-pointer">
                                    <input className="hidden peer" type="checkbox" />
                                    <span
                                        className="px-4 py-1.5 rounded-full bg-surface-container-lowest text-label-lg font-label-lg peer-checked:bg-primary-container peer-checked:text-on-primary-container transition-all">Gift</span>
                                </label>
                                <label className="cursor-pointer">
                                    <input className="hidden peer" type="checkbox" />
                                    <span
                                        className="px-4 py-1.5 rounded-full bg-surface-container-lowest text-label-lg font-label-lg peer-checked:bg-primary-container peer-checked:text-on-primary-container transition-all">Home</span>
                                </label>
                            </div>
                        </div>
                    </section>
                    {/*  Media Upload Card */}
                    <section
                        className="bg-surface-container-lowest p-4 rounded-xl shadow-[0_4px_20px_rgb(240,128,128,0.05)] border-2 border-dashed border-primary/20">
                        <div
                            className="aspect-square rounded-lg bg-surface-container-low overflow-hidden group cursor-pointer relative flex flex-col items-center justify-center text-center p-6">
                            <img className="absolute inset-0 w-full h-full object-cover opacity-10"
                                data-alt="A top-down aesthetic flatlay of organic cotton yarn skeins in peach, salmon, and cream tones arranged neatly on a rustic wooden surface with soft, warm morning sunlight."
                                src="https:lh3.googleusercontent.com/aida-public/AB6AXuCpRYn7cO5vkDoHVFEPAIUQEuD8rGwl8Z0vvVmI4ld5ujtv7cSxweV3gmnWvRCSJx67hi_aiHo_imy6JPuLFs8msUROm4k-RfuV5AKosNSctAX04m2TomoSmi9_WlIPpVvLRbwcZSvFvC-288exvtF9kIX52MQBc2MQmtAtuEpi6TPp_YeziKwXI68A8t0ZW_Pmx_8WbJAXRUb7Z_jDMjYyw1IA1Xuh_UQobf5mtll91faFW48s5_40q29wptv8RIXtV8kM91qBClI" />
                            <div className="relative z-10">
                                <span className="material-symbols-outlined text-primary text-[48px] mb-2">add_a_photo</span>
                                <p className="font-label-lg text-label-lg text-on-surface-variant">Add Pattern Image</p>
                                <p className="font-body-sm text-body-sm text-on-surface-variant/60 mt-1">Optional placeholder
                                </p>
                            </div>
                        </div>
                    </section>
                    {/*  Source URL */}
                    <section className="bg-surface-container p-6 rounded-xl space-y-4">
                        <div className="space-y-2">
                            <label className="font-label-lg text-label-lg text-on-surface-variant">Source URL (optional)</label>
                            <div
                                className="flex items-center bg-surface-container-lowest rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary-container">
                                <span className="material-symbols-outlined text-on-surface-variant ml-3">link</span>
                                <input className="w-full bg-transparent border-none p-3 font-body-sm text-body-sm focus:ring-0"
                                    placeholder="https:example.com/pattern" type="url" />
                            </div>
                        </div>
                    </section>
                    {/*  Form Actions (Desktop) */}
                    <div className="hidden md:flex gap-4 pt-4">
                        <button
                            className="flex-1 py-3 px-6 rounded-full font-label-lg text-label-lg border border-primary text-primary hover:bg-primary/5 active:scale-95 transition-all"
                            type="button">Cancel</button>
                        <button
                            className="flex-1 py-3 px-6 rounded-full font-label-lg text-label-lg bg-primary text-on-primary shadow-lg shadow-primary/20 hover:shadow-xl active:scale-95 transition-all"
                            type="submit">Save Pattern</button>
                    </div>
                </aside>
            </form>
        </main>
    )
}

export default AddPattern;