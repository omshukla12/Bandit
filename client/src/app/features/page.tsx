"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BarChart2,
  Bell,
  Clock,
  Globe,
  LineChart,
  Lock,
  Search,
  ShoppingCart,
  Zap,
  Menu,
  LogIn,
  ChevronUp,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function FeaturesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const features = [
    {
      icon: Search,
      title: "Product Search",
      description:
        "Easily find and track products from multiple e-commerce platforms.",
    },
    {
      icon: Bell,
      title: "Price Alerts",
      description: "Get notified when prices drop or reach your desired level.",
    },
    {
      icon: LineChart,
      title: "Price History",
      description: "View detailed price history charts for tracked products.",
    },
    {
      icon: ShoppingCart,
      title: "Multiple Retailers",
      description: "Compare prices across various online stores.",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description:
        "Receive up-to-the-minute price and availability information.",
    },
    {
      icon: Clock,
      title: "Price Predictions",
      description:
        "Get insights on the best time to buy based on historical data.",
    },
    {
      icon: Globe,
      title: "International Support",
      description:
        "Track prices in multiple currencies and from global retailers.",
    },
    {
      icon: Lock,
      title: "Secure & Private",
      description:
        "Your data is encrypted and never shared with third parties.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-zinc-200">
      <motion.header
        className="sticky top-0 z-50 bg-zinc-800 shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <BarChart2 className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-2xl font-bold text-zinc-200">
                PriceTracker
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
              <Link
                href="/"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Input
                  className="w-64 pl-10 pr-4 py-2 rounded-full bg-zinc-700 text-zinc-200 placeholder-zinc-400 border-zinc-600 focus:border-emerald-400 focus:ring-emerald-400"
                  placeholder="Search products..."
                  type="search"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              </div>
              <Button
                asChild
                variant="outline"
                className="hidden md:flex text-emerald-400 hover:text-emerald-300 hover:bg-zinc-700 border-zinc-600 hover:border-emerald-400 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
              >
                <Link href="/signin">
                  <LogIn className="mr-2 h-5 w-5" />
                  Sign In
                </Link>
              </Button>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6 text-zinc-200" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[300px] sm:w-[400px] bg-zinc-800 border-r-zinc-700"
                >
                  <nav className="flex flex-col space-y-4">
                    <Input
                      className="w-full bg-zinc-700 text-zinc-200 placeholder-zinc-400 border-zinc-600 focus:border-emerald-400 focus:ring-emerald-400"
                      placeholder="Search products..."
                      type="search"
                    />
                    <Link
                      href="/"
                      className="text-zinc-200 hover:text-emerald-400 transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/features"
                      className="text-zinc-200 hover:text-emerald-400 transition-colors"
                    >
                      Features
                    </Link>
                    <Link
                      href="/pricing"
                      className="text-zinc-200 hover:text-emerald-400 transition-colors"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/about"
                      className="text-zinc-200 hover:text-emerald-400 transition-colors"
                    >
                      About
                    </Link>
                    <hr className="my-4 border-zinc-700" />
                    <Button
                      asChild
                      variant="outline"
                      className="justify-start text-emerald-400 hover:text-emerald-300 hover:bg-zinc-700 border-zinc-600 hover:border-emerald-400 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                    >
                      <Link href="/signin">
                        <LogIn className="mr-2 h-5 w-5" />
                        Sign In
                      </Link>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.header>

      <main className="flex-grow">
        <motion.section
          className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-20 text-zinc-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              PriceTracker Features
            </motion.h1>
            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Discover how PriceTracker helps you save money and make smarter
              shopping decisions.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-zinc-200 text-emerald-600 hover:bg-zinc-300 transition-colors"
              >
                <Link href="/signup">Start Tracking Prices</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-zinc-800 border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                    <CardHeader>
                      <feature.icon className="h-10 w-10 text-emerald-400 mb-4" />
                      <CardTitle className="text-zinc-200">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-zinc-400">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-zinc-200">
              How PriceTracker Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              {[
                {
                  icon: Search,
                  title: "Add Products",
                  description:
                    "Simply paste the URL of the product you want to track. We support major e-commerce platforms.",
                },
                {
                  icon: BarChart2,
                  title: "Monitor Prices",
                  description:
                    "We will keep an eye on the prices and track their changes over time.",
                },
                {
                  icon: Bell,
                  title: "Get Notified",
                  description:
                    "Receive instant notifications when prices drop or reach your desired level.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="bg-zinc-700 border-zinc-600 text-center">
                    <CardContent className="pt-6">
                      <div className="bg-emerald-500 p-4 rounded-full inline-block mb-4">
                        <item.icon className="h-8 w-8 text-zinc-900" />
                      </div>
                      <CardTitle className="mb-2 text-zinc-200">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-zinc-400">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-zinc-200">
              Start Saving Today
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-zinc-400">
              Join thousands of smart shoppers who are already saving money with
              PriceTracker.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-emerald-500 text-zinc-900 hover:bg-emerald-600 transition-colors"
            >
              <Link href="/signup">Create Your Free Account</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="dark:bg-zinc-800 dark:text-zinc-200 py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:text-left text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link
                className="flex items-center md:justify-start justify-center"
                href="#"
              >
                <BarChart2
                  className="h-8 w-8 text-blue-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
                <span className="ml-2 text-2xl font-bold text-white dark:text-zinc-200">
                  PriceTracker
                </span>
              </Link>
              <p className="text-sm dark:text-zinc-400 text-gray-400 md:mr-4">
                PriceTracker helps you save money by tracking product prices
                across multiple e-commerce platforms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-sm dark:text-zinc-400 hover:text-blue-400  dark:hover:text-emerald-400 transition-colors"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm dark:text-zinc-400 hover:text-blue-400  dark:hover:text-emerald-400 transition-colors"
                    href="/"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm dark:text-zinc-400 hover:text-blue-400  dark:hover:text-emerald-400 transition-colors"
                    href="/"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm dark:text-zinc-400 hover:text-blue-400  dark:hover:text-emerald-400 transition-colors"
                    href="/"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="text-sm dark:text-zinc-400 hover:text-blue-400  dark:hover:text-emerald-400 transition-colors"
                    href="/"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm dark:text-zinc-400 hover:text-blue-400  dark:hover:text-emerald-400 transition-colors"
                    href="/"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex md:justify-start justify-center space-x-4">
                <Link
                  href="/"
                  className="text-gray-400 hover:text-blue-400 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 dark:border-zinc-700 text-center">
            <p className="text-sm dark:text-zinc-400 text-gray-400">
              © {new Date().getFullYear()} PriceTracker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <Button
          className="fixed bottom-4 right-4 bg-blue-600 text-white dark:bg-emerald-500 dark:text-zinc-900 rounded-full p-2 shadow-lg dark:hover:bg-emerald-600 hover:bg-blue-700 transition-all duration-300 animate-bounce"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-6 w-6" aria-hidden="true" />
        </Button>
      )}
    </div>
  );
}
