import Image from "next/image";
import { HEAD, OPEN_GRAPH, SITE_INFO } from "@/config/seo";

export default function ValidateOGPage() {
  const homeSEO = HEAD.find((p) => p.page === "Home") || {
    title: "Stop Buying Domain",
    description: "Check your receipts.",
  };

  const ogImage = OPEN_GRAPH.image;
  const twitterImage = OPEN_GRAPH.twitterImage;

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-900">
      <div className="mx-auto max-w-4xl space-y-12">
        <header>
          <h1 className="text-3xl font-bold">OG Image & Meta Validation</h1>
          <p className="mt-2 text-gray-600">
            Preview how your site appears when shared on social media.
          </p>
        </header>

        {/* Configuration Data */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Metadata Configuration</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-gray-500 text-uppercase tracking-wider">Title</p>
              <p className="mt-1 font-mono text-sm">{homeSEO.title}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 text-uppercase tracking-wider">Site URL</p>
              <p className="mt-1 font-mono text-sm">{SITE_INFO.url}</p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-sm font-medium text-gray-500 text-uppercase tracking-wider">Description</p>
              <p className="mt-1 text-sm text-gray-800">{homeSEO.description}</p>
            </div>
          </div>
        </section>

        {/* Facebook / OG Preview */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Open Graph (Facebook, LinkedIn, Slack)</h2>
          <div className="max-w-[524px] overflow-hidden rounded-lg border border-[#dadde1] bg-white">
            <div className="relative aspect-[1200/630] w-full bg-gray-100">
              <Image
                src={ogImage}
                alt="OG Preview"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="border-t border-[#dadde1] bg-[#f2f3f5] p-3">
              <p className="text-[12px] uppercase text-[#606770]">{SITE_INFO.url.replace(/^https?:\/\//, "")}</p>
              <h3 className="mt-1 truncate font-bold text-[#1d2129]">{homeSEO.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-[#606770]">{homeSEO.description}</p>
            </div>
          </div>
          <div className="text-xs text-gray-400">
            Previewing: <code className="bg-gray-100 px-1">{ogImage}</code> (1200x630)
          </div>
        </section>

        {/* Twitter Card Preview */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Twitter Card (Large Image)</h2>
          <div className="max-w-[504px] overflow-hidden rounded-2xl border border-[#e1e8ed] bg-white">
            <div className="relative aspect-[1200/675] w-full bg-gray-100">
              <Image
                src={twitterImage}
                alt="Twitter Preview"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-3">
              <p className="text-sm text-[#8899a6]">{SITE_INFO.url.replace(/^https?:\/\//, "")}</p>
              <h3 className="mt-0.5 truncate font-medium text-black">{homeSEO.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-[#5b7083]">{homeSEO.description}</p>
            </div>
          </div>
          <div className="text-xs text-gray-400">
            Previewing: <code className="bg-gray-100 px-1">{twitterImage}</code> (1200x675)
          </div>
        </section>

        {/* Raw Assets */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Raw Image Assets</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-500">og.png</h3>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <img src={ogImage} alt="OG Raw" className="w-full" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-500">twitter.png</h3>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <img src={twitterImage} alt="Twitter Raw" className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-8 text-center text-sm text-gray-400">
          <p>This page is for development purposes only.</p>
        </footer>
      </div>
    </div>
  );
}
