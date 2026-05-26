import { JSX } from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Details = async ({ params }: PageProps): Promise<JSX.Element> => {
  const { id } = await params;

  return (
    <>
      {/* Hero section */}
      <section className="relative w-full h-128 md:h-153.5 overflow-hidden">
        <img
          alt="Pattern Hero"
          className="w-full h-full object-cover"
          data-alt="A macro close-up of a beautifully handcrafted, chunky cable-knit sweater in a soft peach-coral wool."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCkDYVC-96B-kR73UN9SDGm_4hrE6zIeczhhvaY88Ojlgo1_Xyn4EKEbUPSexF58oIwoa9mRhx-g0edYl1Jm5_PSDSpIKuSN-FyjVt1lvPLB4aK-SkS03UHzIPUzc5lGM5tRiyxdTSxhUPpWKLG1FDBET1luT5oBCjxIxMOjCWD7JZVBjd1nas_CHnMUrylBmzQ3UKLq6YQsiFallTGc3vpsWrbnrHrTG0SUKHHBTCI85U9D6cZ2J3BUSbSe_cQmdPriEWdhyA3dk"
        />
        <div className="p-4 absolute inset-0 hero-gradient flex flex-col justify-end px-margin-mobile md:px-margin-desktop pb-8">
          <div className="inline-flex items-center gap-2 bg-primary-container/90 backdrop-blur-sm text-on-primary-container px-3 py-1 rounded-full w-fit mb-4">
            <span className="material-symbols-outlined text-[16px]">label</span>
            <span className="font-label-sm text-label-sm">
              Crochet • Intermediate
            </span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-primary mb-2 max-w-3xl">
            Cozy Autumn Cable Cardigan
          </h1>
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">
                hardware
              </span>
              <span className="font-body-md text-body-md">5.5mm Hook</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">
                format_list_numbered
              </span>
              <span className="font-body-md text-body-md">142 Total Rows</span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_circle
              </span>
              <span className="font-body-md text-body-md text-secondary">
                Status: In Progress
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mt-12 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-12">
            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                Description
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                An oversized, cozy cardigan featuring traditional cable patterns
                and ribbed cuffs. Designed for chilly autumn evenings, this
                pattern uses a mix of front-post and back-post double crochets
                to create depth and texture without excessive weight.
              </p>
            </section>
            <section className="bg-surface-container-low rounded-3xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  Pattern Instructions
                </h2>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                    <span className="material-symbols-outlined">print</span>
                  </button>
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors">
                    <span className="material-symbols-outlined">share</span>
                  </button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-6 group">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                    1
                  </span>
                  <div className="flex-1 border-b border-outline-variant pb-6">
                    <h3 className="font-label-lg text-label-lg text-primary uppercase mb-2">
                      Foundation Row
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Chain 82. SC in second chain from hook and in each chain
                      across. Turn. (81 sts)
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                    2
                  </span>
                  <div className="flex-1 border-b border-outline-variant pb-6">
                    <h3 className="font-label-lg text-label-lg text-primary uppercase mb-2">
                      Ribbing Setup
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      CH 2, *DC in next st, BPDC in next st; repeat from * to
                      end of row. Turn.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                    3
                  </span>
                  <div className="flex-1 border-b border-outline-variant pb-6">
                    <h3 className="font-label-lg text-label-lg text-primary uppercase mb-2">
                      Main Body Row 1-20
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Work in established cable pattern. Follow Chart A for the
                      center 24 stitches to create the oversized braid effect.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-surface-container-highest rounded-xl flex items-start gap-3 border-l-4 border-primary">
                  <span className="material-symbols-outlined text-primary">
                    lightbulb
                  </span>
                  <p className="font-body-sm text-body-sm italic">
                    Pro tip: Keep your tension loose on the cable rows to ensure
                    the fabric remains soft and wearable.
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="font-headline-md text-headline-md text-on-surface mb-4">
                Notes
              </h2>
              <div className="p-6 bg-surface-container rounded-2xl border border-secondary/10">
                <ul className="space-y-3 list-disc list-inside text-on-surface-variant font-body-md">
                  <li>
                    Used "Autumn Glow" Wool Blend (80% Wool, 20% Acrylic).
                  </li>
                  <li>Requires approx 6 skeins for size Medium.</li>
                  <li>
                    Substituted the original hem ribbing for a 1x1 post stitch
                    rib.
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <aside className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-white rounded-3xl shadow-lg shadow-primary/5 space-y-6 sticky top-25">
              <div>
                <h4 className="font-label-sm text-label-sm text-outline mb-2 uppercase">
                  Source URL
                </h4>
                <a
                  className="flex items-center gap-2 text-primary font-label-lg text-label-lg hover:underline"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    link
                  </span>
                  original-pattern-source.com
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container-low rounded-2xl">
                  <span className="font-label-sm text-label-sm text-outline block mb-1">
                    Hook Size
                  </span>
                  <span className="font-headline-md text-headline-md text-on-surface">
                    5.5mm
                  </span>
                </div>
                <div className="p-4 bg-surface-container-low rounded-2xl">
                  <span className="font-label-sm text-label-sm text-outline block mb-1">
                    Weight
                  </span>
                  <span className="font-headline-md text-headline-md text-on-surface">
                    Aran
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant">
                <h4 className="font-label-sm text-label-sm text-outline mb-3 uppercase">
                  Materials Checklist
                </h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      defaultChecked
                      className="w-5 h-5 rounded border-outline text-primary focus:ring-primary accent-primary"
                      type="checkbox"
                    />
                    <span className="text-body-md text-on-surface-variant">
                      Autumn Glow Yarn
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      defaultChecked
                      className="w-5 h-5 rounded border-outline text-primary focus:ring-primary accent-primary"
                      type="checkbox"
                    />
                    <span className="text-body-md text-on-surface-variant">
                      Stitch Markers
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      className="w-5 h-5 rounded border-outline text-primary focus:ring-primary"
                      type="checkbox"
                    />
                    <span className="text-body-md text-on-surface-variant">
                      Darning Needle
                    </span>
                  </label>
                </div>
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-full font-label-lg text-label-lg active:scale-95 transition-all shadow-md shadow-primary/20 flex justify-center items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_arrow
                </span>
                Continue Crafting
              </button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Details;
