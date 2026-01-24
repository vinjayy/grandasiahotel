"use client"

import { PageHeader } from "@/components/page-header"
import { ShieldCheck, Lock, Eye, Cookie } from "lucide-react"

export function PrivacySection() {
  return (
    <div className="bg-white">
      <PageHeader
        tag="Legal"
        title="Privacy & Cookies Policy"
        subtitle="Kami menghargai privasi Anda. Berikut adalah transparansi mengenai penggunaan data dan cookies kami."
        backgroundImage="url('/lobby.jpeg')"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          {/* Introduction Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-12 flex flex-col md:flex-row gap-6 items-start">
            <div className="p-4 bg-white rounded-full shadow-sm shrink-0 text-[#7d0000]">
                <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">Komitmen Privasi Kami</h3>
                <p className="text-slate-600 leading-relaxed">
                    GRAND ASIA HOTEL ("kami", "kita", atau "milik kami") menggunakan cookies di www.grandasia-hotel.id ("Layanan"). 
                    Dengan menggunakan Layanan, Anda menyetujui penggunaan cookies. Kebijakan Cookies kami menjelaskan apa itu cookies, 
                    bagaimana kami menggunakan cookies, bagaimana pihak ketiga yang bermitra dengan kami dapat menggunakan cookies pada Layanan, 
                    pilihan Anda mengenai cookies, dan informasi lebih lanjut tentang cookies.
                </p>
            </div>
          </div>

          {/* Document Content */}
          <div className="prose prose-slate max-w-none text-slate-600">
            
            {/* Section 1 */}
            <div className="mb-10">
                <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">
                    <Cookie className="w-6 h-6 text-[#7d0000]" />
                    What are cookies
                </h2>
                <p className="mb-4">
                    Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
                </p>
                <p>
                    Cookies can be <strong>"persistent"</strong> or <strong>"session"</strong> cookies.
                </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
                <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">
                    <Eye className="w-6 h-6 text-[#7d0000]" />
                    How GRAND ASIA HOTEL uses cookies
                </h2>
                <p className="mb-4">
                    When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-[#7d0000]">
                    <li>To enable certain functions of the Service.</li>
                    <li>To provide analytics and monitor usage patterns.</li>
                    <li>To store your preferences (such as language or login status).</li>
                    <li>To enable advertisements delivery, including behavioral advertising.</li>
                </ul>
                <p>
                    We use both session and persistent cookies on the Service and we use different types of cookies to run the Service, including <strong>Essential cookies</strong> to authenticate users and prevent fraudulent use of user accounts.
                </p>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
                <h2 className="flex items-center gap-3 text-2xl font-serif font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">
                    <Lock className="w-6 h-6 text-[#7d0000]" />
                    Third-party & Your Choices
                </h2>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2">Third-party cookies</h3>
                <p className="mb-6">
                    In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
                </p>

                <h3 className="text-lg font-bold text-slate-900 mb-2">What are your choices regarding cookies</h3>
                <p className="mb-4">
                    If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 italic text-slate-700">
                    Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
                </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}