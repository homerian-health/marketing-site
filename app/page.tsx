import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BarChart2, CheckCircle, Clock, DollarSign, Heart, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/homerian-logo.png" alt="Homerian Logo" width={32} height={32} className="h-8 w-auto" />
              <span className="text-xl font-bold">Homerian</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
                Features
              </Link>
              <Link href="#solutions" className="text-sm font-medium transition-colors hover:text-primary">
                Solutions
              </Link>
              <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
                Pricing
              </Link>
              <Link href="#faq" className="text-sm font-medium transition-colors hover:text-primary">
                FAQ
              </Link>
              <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary hidden md:block">
              Contact
            </Link>
            <Button className="hidden md:inline-flex">Get started</Button>
            <MobileNav />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Healthcare Practice Operations Simplified
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Making quality healthcare <span className="text-rose-500">easy to provide</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Homerian Health decreases overhead while increasing revenue, improving patient outcomes, and reducing
                  physician burnout.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                    Schedule a demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn more
                  </Button>
                </div>
                {/* <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-rose-500" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-rose-500" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-rose-500" />
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Trusted by <span className="font-medium">500+</span> healthcare providers
                  </div>
                </div> */}
              </div>
              <div className="relative h-[400px] w-full flex items-center justify-center">
                <div className="relative w-full max-w-[400px] aspect-square">
                  <Image src="/homerian-logo.png" alt="Homerian Logo" fill className="object-contain" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Benefits</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transform Your Healthcare Practice
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive platform addresses the most critical challenges facing healthcare providers today.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <DollarSign className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Increase Revenue</h3>
                <p className="text-center text-muted-foreground">
                  Optimize billing processes, reduce claim denials, and identify new revenue opportunities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <Heart className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Improve Outcomes</h3>
                <p className="text-center text-muted-foreground">
                  Enhance patient care with data-driven insights and streamlined clinical workflows.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <BarChart2 className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Decrease Overhead</h3>
                <p className="text-center text-muted-foreground">
                  Reduce administrative burden with automated processes and efficient resource allocation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Our Solutions</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Zero Overhead Practice Automation
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Our integrated platform can be setup in less than a day and requires zero maintenance.
                  Freeing you to run an efficient, profitable practice while
                  delivering exceptional patient care.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-rose-100 p-1">
                      <CheckCircle className="h-5 w-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-bold">Record Retrieval</h3>
                      <p className="text-muted-foreground">Improve care by having your patients' clinic notes and labs before they even walk through the door.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-rose-100 p-1">
                      <CheckCircle className="h-5 w-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-bold">Appointment Scheduling</h3>
                      <p className="text-muted-foreground">
                        Optimize appointment scheduling for revenue and workload.
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex items-start gap-4">
                    <div className="rounded-full bg-rose-100 p-1">
                      <CheckCircle className="h-5 w-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-bold">Revenue Cycle Management</h3>
                      <p className="text-muted-foreground">Maximize reimbursements and minimize claim denials.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-rose-100 p-1">
                      <CheckCircle className="h-5 w-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-bold">Telehealth Integration</h3>
                      <p className="text-muted-foreground">
                        Seamless virtual care capabilities built into your workflow.
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/modern-healthcare-dashboard.png"
                  alt="Homerian Health Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Trusted by Healthcare Professionals
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what our clients have to say about their experience with Homerian Health.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col space-y-4 rounded-xl border p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted"></div>
                  <div>
                    <h3 className="font-bold">Dr. Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Family Medicine, Chicago</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Homerian has transformed our practice. We've seen a 30% increase in revenue and our administrative
                  overhead has decreased significantly."
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-xl border p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted"></div>
                  <div>
                    <h3 className="font-bold">Dr. Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">Cardiology, San Francisco</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The intuitive interface has reduced our documentation time by half. My team is less stressed and we
                  can focus more on patient care."
                </p>
              </div>
              <div className="flex flex-col space-y-4 rounded-xl border p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted"></div>
                  <div>
                    <h3 className="font-bold">Lisa Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Practice Manager, Houston</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The customer support team at Homerian is exceptional. They've been with us every step of the way
                  during implementation."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the product and plan that's right for your practice.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col rounded-xl border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    Record Retrieval
                  </h3>
                  <p className="text-muted-foreground">
                    Improve care by having your patients' clinic notes and labs before they even walk through the door.
                  </p>
                </div>
                <div className="mt-6">
                  <div className="text-4xl font-bold">$150</div>
                  <p className="text-muted-foreground">up to 5 providers / month</p>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Most Recent Clinic Notes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Last 6 Months of Labs and Imaging</span>
                  </li>
                </ul>
                <Button className="mt-8">Get Started</Button>
              </div>
              <div className="flex flex-col rounded-xl border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">
                    Appointment Scheduling
                  </h3>
                  <p className="text-muted-foreground">
                    Reduce overhead by automating and optimizing appointment scheduling.
                  </p>
                </div>
                <div className="mt-6">
                  <div className="text-4xl font-bold">$150</div>
                  <p className="text-muted-foreground">up to 5 providers / month</p>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Self-service scheduling for patients and providers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Collect identification and insurance digitally</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Limit the type of patients and appointments each day</span>
                  </li>
                </ul>
                <Button disabled className="mt-8">Coming Soon</Button>
              </div>
              {/* <div className="flex flex-col rounded-xl border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-rose-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-muted-foreground">For established practices seeking growth</p>
                </div>
                <div className="mt-6">
                  <div className="text-4xl font-bold">$499</div>
                  <p className="text-muted-foreground">per provider / month</p>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>All Essential features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Revenue Cycle Management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Telehealth Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Advanced Analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Priority Support</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-rose-500 hover:bg-rose-600">Get Started</Button>
              </div> */}
              {/* <div className="flex flex-col rounded-xl border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">For large medical groups and hospitals</p>
                </div>
                <div className="mt-6">
                  <div className="text-4xl font-bold">Custom</div>
                  <p className="text-muted-foreground">Contact for pricing</p>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>All Professional features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Custom Integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>White-labeling Options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-rose-500" />
                    <span>24/7 Premium Support</span>
                  </li>
                </ul>
                <Button className="mt-8" variant="outline">
                  Contact Sales
                </Button>
              </div> */}
            </div>
          </div>
        </section>

        <FAQSection />

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Get in Touch</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to transform your practice?
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  Schedule a demo with our team to see how Homerian Health can help you increase revenue, improve
                  outcomes, and decrease overhead.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-rose-100 p-2">
                      <Clock className="h-5 w-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-bold">30-Minute Demo</h3>
                      <p className="text-muted-foreground">
                        See our platform in action with a personalized walkthrough.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-rose-100 p-2">
                      <Shield className="h-5 w-5 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-bold">No Obligation</h3>
                      <p className="text-muted-foreground">Learn about our solutions with no pressure to commit.</p>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                  Schedule a Demo
                </Button>
              </div>
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <form className="space-y-4">
                  {/* <div className="grid grid-cols-2 gap-4"> */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                  {/* </div> */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="practice-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Practice Name
                    </label>
                    <input
                      id="practice-name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your practice name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your practice and needs"
                    />
                  </div>
                  <Button className="w-full bg-rose-500 hover:bg-rose-600">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image src="/homerian-logo.png" alt="Homerian Logo" width={32} height={32} className="h-8 w-auto" />
                <span className="text-xl font-bold">Homerian</span>
              </div>
              <p className="text-sm text-muted-foreground">Making quality healthcare easy to provide.</p>
              {/* <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div> */}
            </div>
            {/* <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Press
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </nav>
            </div> */}
            {/* <div className="space-y-4">
              <h3 className="text-lg font-semibold">Resources</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Case Studies
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Webinars
                </Link>
              </nav>
            </div> */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  HIPAA Compliance
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Security
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Homerian Health. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
