"use client"

import { PageHeader } from "@/components/page-header"
import { 
  CalendarCheck, 
  FileX, 
  Clock, 
  Banknote, 
  CigaretteOff, 
  ShieldAlert, 
  Scale,
  Info
} from "lucide-react"

export function PolicySection() {
  
  const policies = [
    {
      title: "1. Booking and Reservation",
      icon: CalendarCheck,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>All reservations must be guaranteed with a valid credit card or a full advance deposit.</li>
            <li>The guest who made the booking must be at least 18 years of age and present a valid government-issued photo ID (KTP/Passport) upon check-in.</li>
            <li>Special requests (e.g., bed type, floor level) are subject to availability and are not guaranteed.</li>
        </ul>
      )
    },
    {
      title: "2. Cancellation and Refund Policy",
      icon: FileX,
      content: (
        <div className="space-y-3 text-slate-600">
            <p className="font-bold text-red-600 bg-red-50 inline-block px-3 py-1 rounded-md text-sm border border-red-100">
                STRICTLY NON-REFUNDABLE
            </p>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Non-Refundable Rates:</strong> All bookings made under "Non-Refundable," "Advance Purchase," or "Special Promotional" rates are strictly non-refundable.</li>
                <li><strong>No Modifications:</strong> Once a non-refundable booking is confirmed, no changes to the dates, room type, or guest name will be permitted.</li>
                <li><strong>Cancellations:</strong> In the event of a cancellation or "no-show," the total price of the reservation (including taxes and fees) will be charged, and no refund will be issued.</li>
                <li><strong>Early Departure:</strong> No refunds or credits will be provided for guests who choose to check out earlier than their scheduled departure date.</li>
            </ul>
        </div>
      )
    },
    {
      title: "3. Check-in and Check-out",
      icon: Clock,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li><strong>Check-in Time:</strong> From 14:00 (2:00 PM) onwards.</li>
            <li><strong>Check-out Time:</strong> No later than 12:00 (12:00 PM).</li>
            <li><strong>Late Check-out:</strong> Requests for late check-out are subject to availability and will incur additional charges:
                <ul className="list-[circle] pl-5 mt-1 text-sm space-y-1">
                    <li>Up to 18:00: <span className="font-medium text-slate-900">50% of the daily room rate.</span></li>
                    <li>After 18:00: <span className="font-medium text-slate-900">100% of the daily room rate.</span></li>
                </ul>
            </li>
        </ul>
      )
    },
    {
      title: "4. Security Deposit",
      icon: Banknote,
      content: (
        <p className="text-slate-600 leading-relaxed">
            A security deposit (cash or credit card authorization) is required upon check-in to cover incidental charges (mini-bar, laundry, damages, etc.). This deposit is fully refundable upon check-out, provided no damages or incidental charges have been incurred.
        </p>
      )
    },
    {
      title: "5. Hotel Rules and Guest Conduct",
      icon: CigaretteOff,
      content: (
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li><strong>Smoking Policy:</strong> Grand Asia Hotel is a non-smoking property. Smoking in guest rooms will result in a cleaning fee of <span className="font-bold text-[#7d0000]">IDR 2,000,000</span>.</li>
            <li><strong>Prohibited Items:</strong> Drugs, firearms, explosive materials, and pets are strictly prohibited on hotel premises.</li>
            <li><strong>Quiet Hours:</strong> To ensure the comfort of all guests, please keep noise to a minimum between 22:00 and 07:00.</li>
        </ul>
      )
    },
    {
      title: "6. Liability",
      icon: ShieldAlert,
      content: (
        <div className="space-y-2 text-slate-600">
            <p>Grand Asia Hotel is not responsible for the loss, theft, or damage of any money, jewelry, or valuables left in the guest rooms. We strongly recommend using the in-room electronic safety deposit box.</p>
            <p>Guests are liable for any damage caused to the hotel property or equipment by themselves or their visitors.</p>
        </div>
      )
    },
    {
      title: "7. Governing Law",
      icon: Scale,
      content: (
        <p className="text-slate-600 leading-relaxed">
            These terms and conditions are governed by the laws of the Republic of Indonesia. Any disputes arising shall be settled in the courts of Jakarta.
        </p>
      )
    }
  ]

  return (
    <div className="bg-white">
      <PageHeader
        tag="Information"
        title="Terms & Conditions"
        subtitle="Please read our terms carefully to ensure a comfortable stay."
        backgroundImage="url('/lobby.jpeg')"
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
                    <h3 className="font-serif text-xl font-bold text-slate-900 mb-4">
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
              <strong>Note:</strong> By making a reservation or staying at our property, you agree to comply with and be bound by the terms above. Grand Asia Hotel reserves the right to update these terms without prior notice.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}