#!/usr/bin/env python3
"""
Islamic Hub - Hadith of the Day CLI
A terminal-based tool that displays a random Hadith each day
Perfect for GitHub Portfolio - demonstrates Python scripting skills

Usage:
    python3 hadith-cli.py              # Display today's hadith
    python3 hadith-cli.py --random     # Display a random hadith
    python3 hadith-cli.py --all        # Display all hadiths
    python3 hadith-cli.py --search "keyword"  # Search hadiths
"""

import sys
import argparse
import json
from datetime import datetime
from pathlib import Path
import hashlib

# Hadith Database
HADITHS = [
    {
        "id": 1,
        "arabic": "الدين النصيحة",
        "english": "Religion is sincere advice.",
        "translation": "The Prophet (peace be upon him) said: 'Religion is sincere advice.'",
        "source": "Sahih Muslim",
        "narrator": "Tamim al-Dari",
        "category": "General"
    },
    {
        "id": 2,
        "arabic": "خيركم من تعلم القرآن وعلمه",
        "english": "The best among you are those who learn the Quran and teach it.",
        "translation": "The Prophet (peace be upon him) said: 'The best among you are those who learn the Quran and teach it.'",
        "source": "Sahih Al-Bukhari",
        "narrator": "Uthman ibn Affan",
        "category": "Knowledge"
    },
    {
        "id": 3,
        "arabic": "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
        "english": "None of you believes until he loves for his brother what he loves for himself.",
        "translation": "The Prophet (peace be upon him) said: 'None of you believes until he loves for his brother what he loves for himself.'",
        "source": "Sahih Al-Bukhari",
        "narrator": "Anas ibn Malik",
        "category": "Brotherhood"
    },
    {
        "id": 4,
        "arabic": "الكلمة الطيبة صدقة",
        "english": "A kind word is a form of charity.",
        "translation": "The Prophet (peace be upon him) said: 'A kind word is a form of charity.'",
        "source": "Sahih Al-Bukhari",
        "narrator": "Abu Huraira",
        "category": "Charity"
    },
    {
        "id": 5,
        "arabic": "من سلك طريقا يلتمس فيه علما سهل الله له طريقا إلى الجنة",
        "english": "Whoever takes a path seeking knowledge, Allah will make easy for him a path to Paradise.",
        "translation": "The Prophet (peace be upon him) said: 'Whoever takes a path seeking knowledge, Allah will make easy for him a path to Paradise.'",
        "source": "Sahih Muslim",
        "narrator": "Abu Huraira",
        "category": "Knowledge"
    },
    {
        "id": 6,
        "arabic": "إن الله مع الصابرين",
        "english": "Indeed, Allah is with the patient ones.",
        "translation": "Allah says in the Quran: 'Indeed, Allah is with the patient ones.' (Quran 8:46)",
        "source": "Quran",
        "narrator": "Various",
        "category": "Patience"
    },
    {
        "id": 7,
        "arabic": "أحب الأعمال إلى الله أدومها وإن قل",
        "english": "The most beloved deeds to Allah are the most consistent, even if they are few.",
        "translation": "The Prophet (peace be upon him) said: 'The most beloved deeds to Allah are the most consistent, even if they are few.'",
        "source": "Sunan Ibn Majah",
        "narrator": "Aisha",
        "category": "Deeds"
    },
    {
        "id": 8,
        "arabic": "من لم يشكر الناس لم يشكر الله",
        "english": "Whoever does not thank people, does not thank Allah.",
        "translation": "The Prophet (peace be upon him) said: 'Whoever does not thank people, does not thank Allah.'",
        "source": "Sunan At-Tirmidhi",
        "narrator": "Abu Huraira",
        "category": "Gratitude"
    },
    {
        "id": 9,
        "arabic": "الراحمون يرحمهم الرحمن",
        "english": "The merciful will be shown mercy by the Most Merciful.",
        "translation": "The Prophet (peace be upon him) said: 'The merciful will be shown mercy by the Most Merciful. Be merciful to those on earth, and the One in the heavens will have mercy upon you.'",
        "source": "Sunan At-Tirmidhi",
        "narrator": "Abu Huraira",
        "category": "Mercy"
    },
    {
        "id": 10,
        "arabic": "لا تحقرن من المعروف شيء",
        "english": "Do not belittle any act of kindness.",
        "translation": "The Prophet (peace be upon him) said: 'Do not belittle any act of kindness, even if it is just greeting your brother with a smiling face.'",
        "source": "Sahih Muslim",
        "narrator": "Abu Huraira",
        "category": "Kindness"
    }
]

class HadithCLI:
    """CLI tool for displaying daily Hadiths"""
    
    def __init__(self):
        self.hadiths = HADITHS
        self.cache_dir = Path.home() / ".islamic-hub"
        self.cache_dir.mkdir(exist_ok=True)
        self.cache_file = self.cache_dir / "hadith_cache.json"
    
    def get_today_hadith(self) -> dict:
        """Get today's hadith based on date hash"""
        today = datetime.now().strftime("%Y-%m-%d")
        day_hash = int(hashlib.md5(today.encode()).hexdigest(), 16)
        index = day_hash % len(self.hadiths)
        return self.hadiths[index]
    
    def get_random_hadith(self) -> dict:
        """Get a random hadith"""
        import random
        return random.choice(self.hadiths)
    
    def search_hadiths(self, keyword: str) -> list:
        """Search hadiths by keyword"""
        keyword_lower = keyword.lower()
        results = []
        for hadith in self.hadiths:
            if (keyword_lower in hadith["english"].lower() or
                keyword_lower in hadith["translation"].lower() or
                keyword_lower in hadith["category"].lower()):
                results.append(hadith)
        return results
    
    def format_hadith(self, hadith: dict, show_details: bool = True) -> str:
        """Format hadith for terminal display"""
        output = []
        output.append("\n" + "=" * 70)
        output.append("✨ HADITH OF THE DAY ✨".center(70))
        output.append("=" * 70 + "\n")
        
        # Arabic text
        output.append(f"📖 Arabic: {hadith['arabic']}")
        output.append(f"   English: {hadith['english']}\n")
        
        # Translation
        output.append(f"💭 Translation:\n   {hadith['translation']}\n")
        
        if show_details:
            # Source and details
            output.append(f"📚 Source: {hadith['source']}")
            output.append(f"👤 Narrator: {hadith['narrator']}")
            output.append(f"🏷️  Category: {hadith['category']}\n")
        
        output.append("=" * 70 + "\n")
        
        return "\n".join(output)
    
    def display_all(self) -> None:
        """Display all hadiths"""
        print("\n" + "=" * 70)
        print(f"ISLAMIC HUB - HADITH COLLECTION ({len(self.hadiths)} Hadiths)".center(70))
        print("=" * 70 + "\n")
        
        for i, hadith in enumerate(self.hadiths, 1):
            print(f"{i}. {hadith['english']}")
            print(f"   Category: {hadith['category']} | Source: {hadith['source']}")
            print()
    
    def run(self):
        """Main CLI entry point"""
        parser = argparse.ArgumentParser(
            description="Islamic Hub - Hadith of the Day CLI",
            formatter_class=argparse.RawDescriptionHelpFormatter,
            epilog="""
Examples:
  python3 hadith-cli.py              # Display today's hadith
  python3 hadith-cli.py --random     # Display a random hadith
  python3 hadith-cli.py --all        # Display all hadiths
  python3 hadith-cli.py --search "knowledge"  # Search hadiths
            """
        )
        
        parser.add_argument(
            "--random",
            action="store_true",
            help="Display a random hadith"
        )
        parser.add_argument(
            "--all",
            action="store_true",
            help="Display all hadiths in the collection"
        )
        parser.add_argument(
            "--search",
            type=str,
            help="Search hadiths by keyword"
        )
        parser.add_argument(
            "--json",
            action="store_true",
            help="Output in JSON format"
        )
        parser.add_argument(
            "--version",
            action="version",
            version="Islamic Hub CLI v1.0.0"
        )
        
        args = parser.parse_args()
        
        try:
            if args.all:
                self.display_all()
            elif args.search:
                results = self.search_hadiths(args.search)
                if results:
                    print(f"\n📌 Search Results for '{args.search}' ({len(results)} found):\n")
                    for hadith in results:
                        print(self.format_hadith(hadith, show_details=False))
                else:
                    print(f"\n❌ No hadiths found matching '{args.search}'")
            elif args.random:
                hadith = self.get_random_hadith()
                if args.json:
                    print(json.dumps(hadith, ensure_ascii=False, indent=2))
                else:
                    print(self.format_hadith(hadith))
            else:
                # Default: today's hadith
                hadith = self.get_today_hadith()
                if args.json:
                    print(json.dumps(hadith, ensure_ascii=False, indent=2))
                else:
                    print(self.format_hadith(hadith))
                    today = datetime.now().strftime("%A, %B %d, %Y")
                    print(f"📅 Date: {today}")
        
        except KeyboardInterrupt:
            print("\n\n👋 Goodbye!")
            sys.exit(0)
        except Exception as e:
            print(f"\n❌ Error: {e}", file=sys.stderr)
            sys.exit(1)

if __name__ == "__main__":
    cli = HadithCLI()
    cli.run()
