"use client"

import { PageHeader } from "@/components/page-header"
import { 
  UserCheck, 
  Baby, 
  FileX, 
  CreditCard, 
  Clock, 
  DoorOpen, 
  Banknote, 
  ShieldAlert, 
  Cookie,
  Info
} from "lucide-react"

export function PolicySection() {
  
  const policies = [
    {
      title: "Age Requirement",
      icon: UserCheck,
      content: "Guests must be 18 years or older with valid identification to reserve and check-in to a room."
    },
    {
      title: "Check-in and Check-out",
      icon: Clock,
      content: "Check-in time is at 2 PM and check-out at 12 PM. Charges are applicable for late check-out depending on the availability."
    },
    {
      title: "Early Arrival",
      icon: Clock,
      content: "Should the accommodation is required before 2.00 PM, please inform to us by sending an email or call directly to the hotel at least the night before your arrival. Charges are applicable for late check-out depending on the availability."
    },
    {
      title: "Cancellation Policy",
      icon: FileX,
      content: "Guest may cancel a reservation via our reservation system or sending a modification request by clicking on the link within the reservation email sent to the guest. Please be in time to avoid a No Show charge."
    },
    {
      title: "Payment & Credit Card",
      icon: CreditCard,
      content: (
        <div className="space-y-4">
          <p>Payment gateway is valid on this website, therefore any credit / debit card details registered will be charged instantly. Should the transaction is successful, your reservation will be confirmed and the deposit will be posted onto your reservation.</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li><strong>Accepted Cards:</strong> All major Credit Card, such as: Visa, MasterCard and Indonesian Debit Card. For online immediate transaction, only Visa and Master Card are acceptable.</li>
            <li><strong>Cheque Acceptance:</strong> We do not accept cheque for payment. All charges must be settled on cash or by credit card.</li>
            <li><strong>Charges:</strong> Your credit / debit card will be charged by GRAND ASIA HOTEL for the full price. After payment and transaction succeeds, you will receive a reservation confirmation on the registered email.</li>
            <li><strong>Fraud Prevention:</strong> We use "Secure Socket Layer (SSL)" technology. If you suspect unauthorized use, contact your bank immediately. We have stringent fraud detection mechanisms; in certain cases, we may require additional verification.</li>
          </ul>
        </div>
      )
    },
    {
      title: "Currency Policy",
      icon: Banknote,
      content: "All rates are per room per night using Indonesian Rupiah (IDR) rates. All taxes and service charge are included on the room rate."
    },
    {
      title: "Connecting Room",
      icon: DoorOpen,
      content: "Connecting Rooms are available and hotel cannot guarantee one’s request due to the availability and different rate types."
    },
    {
      title: "Babysitting / Child Care",
      icon: Baby,
      content: "Childcare or babysitting service is available on booking arrangement with a nominal charge applied. Please request upon reservation for this service."
    },
    {
      title: "Cookies Policy",
      icon: Cookie,
      content: (
        <div className="space-y-4">
          <p>GRAND ASIA HOTEL uses cookies on www.grandasia-hotel.id. By using the Service, you consent to the use of cookies.</p>
          <div>
            <strong className="text-slate-900">What are cookies?</strong>
            <p className="mt-1">Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier.</p>
          </div>
          <div>
            <strong className="text-slate-900">How we use cookies:</strong>
            <p className="mt-1">We use cookies to enable certain functions of the Service, to provide analytics, to store your preferences, and to enable advertisements delivery.</p>
          </div>
          <div>
            <strong className="text-slate-900">Your choices:</strong>
            <p className="mt-1">If you’d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Note that if you delete cookies, you might not be able to use all of the features we offer.</p>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="bg-white">
      <PageHeader
        tag="Information"
        title="Hotel Policies"
        subtitle="Guidelines and terms to ensure a pleasant stay for all our guests."
        backgroundImage="url('/lobby.jpeg')" // Menggunakan foto lobby
      />

      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          
          <div className="space-y-8">
            {policies.map((policy, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center shrink-0">
                    <policy.icon className="h-6 w-6 text-[#7d0000]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                      {policy.title}
                    </h3>
                    <div className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {policy.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-amber-50 border border-amber-100 rounded-xl flex gap-4 text-sm text-amber-900">
            <Info className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
            <p>
              <strong>Note:</strong> Grand Asia Hotel reserves the right to change these terms and conditions at any time without prior notice. Please check this page regularly for updates.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}