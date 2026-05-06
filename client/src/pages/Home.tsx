import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Heart, Users, BookOpen, Clock, Menu, X } from "lucide-react";

/**
 * Islamic Hub - Modern Islamic Minimalism Design
 * Color Palette: Deep Teal (#1a5f5f), Warm Gold (#d4a574), Off-white (#f8f7f4)
 * Typography: Playfair Display (headers) + Lato (body)
 * Features: Daily Hadith, Dashboard, CRM, Prayer Times, Community
 */

interface HadithData {
  text: string;
  source: string;
  translation: string;
}

interface CommunityMember {
  id: number;
  name: string;
  role: string;
  joinDate: string;
  avatar: string;
}

interface PrayerTime {
  name: string;
  time: string;
  isNext: boolean;
}

const HADITHS: HadithData[] = [
  {
    text: "الدين النصيحة",
    translation: "Religion is sincere advice.",
    source: "Sahih Muslim",
  },
  {
    text: "خيركم من تعلم القرآن وعلمه",
    translation: "The best among you are those who learn the Quran and teach it.",
    source: "Sahih Al-Bukhari",
  },
  {
    text: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
    translation: "None of you believes until he loves for his brother what he loves for himself.",
    source: "Sahih Al-Bukhari",
  },
  {
    text: "الكلمة الطيبة صدقة",
    translation: "A kind word is a form of charity.",
    source: "Sahih Al-Bukhari",
  },
  {
    text: "من سلك طريقا يلتمس فيه علما سهل الله له طريقا إلى الجنة",
    translation: "Whoever takes a path seeking knowledge, Allah will make easy for him a path to Paradise.",
    source: "Sahih Muslim",
  },
];

const COMMUNITY_MEMBERS: CommunityMember[] = [
  { id: 1, name: "Ahmed Hassan", role: "Community Leader", joinDate: "2023-01-15", avatar: "AH" },
  { id: 2, name: "Fatima Khan", role: "Quran Teacher", joinDate: "2023-02-20", avatar: "FK" },
  { id: 3, name: "Muhammad Ali", role: "Member", joinDate: "2023-03-10", avatar: "MA" },
  { id: 4, name: "Aisha Ibrahim", role: "Volunteer", joinDate: "2023-04-05", avatar: "AI" },
  { id: 5, name: "Omar Rashid", role: "Member", joinDate: "2023-05-12", avatar: "OR" },
];

const PRAYER_TIMES: PrayerTime[] = [
  { name: "Fajr", time: "05:30 AM", isNext: false },
  { name: "Dhuhr", time: "12:45 PM", isNext: true },
  { name: "Asr", time: "03:30 PM", isNext: false },
  { name: "Maghrib", time: "06:15 PM", isNext: false },
  { name: "Isha", time: "07:45 PM", isNext: false },
];

export default function Home() {
  const [currentHadith, setCurrentHadith] = useState<HadithData>(HADITHS[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"dashboard" | "crm" | "hadith">("dashboard");

  useEffect(() => {
    // Rotate hadith daily
    const today = new Date().getDate();
    setCurrentHadith(HADITHS[today % HADITHS.length]);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-primary hidden sm:block">Islamic Hub</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-6">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === "dashboard"
                  ? "text-accent font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("crm")}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === "crm"
                  ? "text-accent font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Community
            </button>
            <button
              onClick={() => setActiveTab("hadith")}
              className={`px-4 py-2 rounded transition-colors ${
                activeTab === "hadith"
                  ? "text-accent font-semibold"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Hadith
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 hover:bg-muted rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-border bg-card">
            <div className="container py-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setActiveTab("dashboard");
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 hover:bg-muted rounded"
              >
                Dashboard
              </button>
              <button
                onClick={() => {
                  setActiveTab("crm");
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 hover:bg-muted rounded"
              >
                Community
              </button>
              <button
                onClick={() => {
                  setActiveTab("hadith");
                  setMobileMenuOpen(false);
                }}
                className="text-left px-4 py-2 hover:bg-muted rounded"
              >
                Hadith
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="container py-8 md:py-12">
        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Hero Section with Wallpaper */}
            <div
              className="relative h-96 rounded-lg overflow-hidden shadow-lg"
              style={{
                backgroundImage: "url(/manus-storage/wallpaper_1_165b5202.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
                  Islamic Hub
                </h2>
                <p className="text-lg text-white/90 text-center max-w-2xl">
                  Your daily companion for Islamic knowledge, community connection, and spiritual growth
                </p>
              </div>
            </div>

            {/* Daily Hadith Card */}
            <div className="card-islamic p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-semibold text-primary">Hadith of the Day</h3>
              </div>
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-3xl md:text-4xl font-bold text-primary italic">
                    {currentHadith.text}
                  </p>
                  <p className="text-lg text-foreground">
                    {currentHadith.translation}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    — {currentHadith.source}
                  </p>
                </div>
              </div>
              <div className="divider-islamic mt-8" />
              <div className="flex justify-center">
                <Button
                  onClick={() => {
                    const randomHadith = HADITHS[Math.floor(Math.random() * HADITHS.length)];
                    setCurrentHadith(randomHadith);
                  }}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Get Another Hadith
                </Button>
              </div>
            </div>

            {/* Prayer Times Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
                <Clock className="w-6 h-6 text-accent" />
                Prayer Times Today
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {PRAYER_TIMES.map((prayer) => (
                  <div
                    key={prayer.name}
                    className={`card-islamic p-6 text-center transition-all ${
                      prayer.isNext ? "ring-2 ring-accent" : ""
                    }`}
                  >
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      {prayer.name}
                    </p>
                    <p className="text-2xl font-bold text-primary">{prayer.time}</p>
                    {prayer.isNext && (
                      <div className="mt-3 inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">
                        Next
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-islamic p-8 text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-4xl font-bold text-primary mb-2">1,250+</p>
                <p className="text-muted-foreground">Community Members</p>
              </div>
              <div className="card-islamic p-8 text-center">
                <BookOpen className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-muted-foreground">Hadiths Shared</p>
              </div>
              <div className="card-islamic p-8 text-center">
                <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-4xl font-bold text-primary mb-2">98%</p>
                <p className="text-muted-foreground">Community Satisfaction</p>
              </div>
            </div>
          </div>
        )}

        {/* Community (CRM) Tab */}
        {activeTab === "crm" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
                <Users className="w-8 h-8 text-accent" />
                Community Members
              </h2>
              <p className="text-muted-foreground">
                Connect with {COMMUNITY_MEMBERS.length} active members in our Islamic community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMMUNITY_MEMBERS.map((member) => (
                <div key={member.id} className="card-islamic p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="font-bold text-accent">{member.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{member.name}</h4>
                      <p className="text-sm text-accent">{member.role}</p>
                    </div>
                  </div>
                  <div className="divider-islamic my-4" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Joined {new Date(member.joinDate).toLocaleDateString()}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full text-primary border-primary hover:bg-primary/5"
                  >
                    View Profile
                  </Button>
                </div>
              ))}
            </div>

            {/* Add Member Section */}
            <div className="card-islamic p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-primary mb-6">Join Our Community</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent">
                  <option>Select Your Role</option>
                  <option>Student</option>
                  <option>Teacher</option>
                  <option>Volunteer</option>
                  <option>Member</option>
                </select>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Join Community
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Hadith Tab */}
        {activeTab === "hadith" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
                <BookOpen className="w-8 h-8 text-accent" />
                Hadith Collection
              </h2>
              <p className="text-muted-foreground">
                Explore our collection of authentic Hadiths from the Sunnah
              </p>
            </div>

            <div className="space-y-4">
              {HADITHS.map((hadith, index) => (
                <div
                  key={index}
                  className="card-islamic p-6 md:p-8 cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => setCurrentHadith(hadith)}
                >
                  <p className="text-xl md:text-2xl font-semibold text-primary mb-3 italic">
                    {hadith.text}
                  </p>
                  <p className="text-base text-foreground mb-4">
                    {hadith.translation}
                  </p>
                  <p className="text-sm text-accent font-semibold">
                    Source: {hadith.source}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border bg-card">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-primary mb-4">About Islamic Hub</h4>
              <p className="text-sm text-muted-foreground">
                A modern platform dedicated to sharing Islamic knowledge, connecting communities, and promoting spiritual growth.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-accent hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="text-accent hover:text-primary transition-colors">Facebook</a>
                <a href="#" className="text-accent hover:text-primary transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          <div className="divider-islamic" />
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Islamic Hub. All rights reserved. Built with ❤️ for the Muslim community.
          </p>
        </div>
      </footer>
    </div>
  );
}
