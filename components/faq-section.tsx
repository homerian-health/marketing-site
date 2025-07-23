"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about Homerian Health's platform and services.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How long does implementation typically take?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Implementation timelines vary based on practice size and complexity, but most clients are fully
                  operational in less than a week. Our dedicated implementation team works closely with your staff to
                  ensure a smooth transition with minimal disruption to your practice.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Is Homerian Health HIPAA compliant?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, Homerian Health is fully HIPAA compliant. We implement comprehensive security measures including
                  end-to-end encryption, regular security audits, and strict access controls to ensure your patient data
                  remains protected at all times. We also provide Business Associate Agreements (BAAs) to all clients.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Can Homerian integrate with my existing systems?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Homerian Health offers robust integration capabilities with most major healthcare systems and
                  third-party applications. Our platform supports HL7, FHIR, and API-based integrations with lab
                  systems, billing services, pharmacies, and other healthcare providers. Our team will assess your
                  specific integration needs during the implementation process.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">What kind of support does Homerian provide?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">All Homerian clients receive comprehensive support including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                  {/* <li>Dedicated account manager</li> */}
                  <li>24/7 technical support via phone, email, and chat</li>
                  <li>Regular system updates and enhancements</li>
                  {/* <li>Ongoing training resources and webinars</li> */}
                  {/* <li>Knowledge base with detailed documentation</li> */}
                </ul>
                {/* <p className="mt-2 text-muted-foreground">
                  Enterprise clients receive additional premium support options including on-site assistance and custom
                  development services.
                </p> */}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                How does Homerian help reduce physician burnout?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Homerian Health addresses physician burnout through several key features:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Intuitive EHR designed by physicians to minimize documentation time</li>
                  <li>Smart templates and voice recognition for faster note completion</li>
                  <li>Automated administrative tasks to reduce paperwork burden</li>
                  <li>Streamlined workflows that follow natural clinical processes</li>
                  <li>Mobile access that provides flexibility in how and where physicians work</li>
                </ul>
                <p className="mt-2 text-muted-foreground">
                  Our clients report an average reduction of 2 hours per day in administrative work, allowing physicians
                  to focus more on patient care and maintain better work-life balance.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                What is the pricing structure for Homerian Health?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Homerian offers transparent, product-based pricing. Each plans includes core functionality for a 
                  single product with no hidden fees. Volume discounts are available for larger practices, and we
                  offer special pricing for non-profits and academic institutions. For detailed pricing information
                  specific to your practice, please contact our sales team.
                </p>
              </AccordionContent>
            </AccordionItem>
            {/* <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">Is training included with implementation?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, comprehensive training is included with all implementation packages. Our training program
                  includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Role-based training sessions for administrators, providers, and staff</li>
                  <li>Live virtual or on-site training options</li>
                  <li>Access to our learning management system with on-demand videos</li>
                  <li>Custom training materials specific to your practice workflows</li>
                  <li>Post-implementation refresher sessions</li>
                </ul>
                <p className="mt-2 text-muted-foreground">
                  Additional training services are available if needed, and all clients have ongoing access to our
                  training resources.
                </p>
              </AccordionContent>
            </AccordionItem> */}
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                How does Homerian help increase practice revenue?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Homerian Health helps practices increase revenue through multiple approaches:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                  <li>Advanced revenue cycle management that reduces claim denials and accelerates payments</li>
                  <li>Coding assistance to ensure proper reimbursement for services provided</li>
                  <li>Automated eligibility verification to reduce billing errors</li>
                  <li>Identification of missed billing opportunities and undercoded services</li>
                  <li>Streamlined scheduling that reduces no-shows and maximizes provider time</li>
                  <li>Analytics that identify high-value service opportunities</li>
                </ul>
                <p className="mt-2 text-muted-foreground">
                  Our clients typically see a 15-30% increase in revenue within the first year of implementation.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
