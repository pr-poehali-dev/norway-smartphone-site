import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Index = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [selectedPhone, setSelectedPhone] = useState<any>(null);

  const phones = [
    {
      id: 1,
      name: 'TechPro X1',
      price: 8999,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      specs: '6.7" OLED, 12GB RAM, 256GB',
      badge: 'Nyhet',
    },
    {
      id: 2,
      name: 'SmartEdge Pro',
      price: 7499,
      image: 'https://images.unsplash.com/photo-1592286927505-2fac2d8f21c5?w=400',
      specs: '6.5" AMOLED, 8GB RAM, 128GB',
      badge: 'Populær',
    },
    {
      id: 3,
      name: 'UltraVision 5G',
      price: 9999,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400',
      specs: '6.8" LTPO, 16GB RAM, 512GB',
      badge: 'Premium',
    },
    {
      id: 4,
      name: 'PixelMax Ultra',
      price: 6999,
      image: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400',
      specs: '6.4" OLED, 8GB RAM, 256GB',
      badge: null,
    },
    {
      id: 5,
      name: 'NeoPhone 12',
      price: 8499,
      image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400',
      specs: '6.6" Super AMOLED, 12GB RAM, 256GB',
      badge: 'Tilbud',
    },
    {
      id: 6,
      name: 'FutureWave X',
      price: 10499,
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400',
      specs: '6.9" Quad HD+, 16GB RAM, 1TB',
      badge: 'Flagship',
    },
  ];

  const reviews = [
    {
      name: 'Erik Hansen',
      rating: 5,
      text: 'Fantastisk telefon! Kameraet er utrolig bra, og ytelsen er super rask.',
      date: '2 dager siden',
    },
    {
      name: 'Sofie Larsen',
      rating: 5,
      text: 'Kjempefornøyd med kjøpet mitt. Levering var rask og telefonen er akkurat som beskrevet.',
      date: '1 uke siden',
    },
    {
      name: 'Magnus Olsen',
      rating: 4,
      text: 'God telefon med flott design. Batteritiden kunne vært litt bedre.',
      date: '2 uker siden',
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Smartphone" size={28} className="text-primary" />
              <span className="text-2xl font-bold">SMARTPHONES</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Hjem
              </button>
              <button
                onClick={() => scrollToSection('catalog')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Katalog
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Anmeldelser
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative overflow-hidden gradient-tech text-white py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Fremtidens Innovasjon
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Oppdag den nyeste teknologien med vårt utvalg av premium smarttelefoner
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 hover-scale"
              onClick={() => scrollToSection('catalog')}
            >
              Se Kataloget
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Vårt Utvalg</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium smarttelefoner med den nyeste teknologien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phones.map((phone, index) => (
              <Card
                key={phone.id}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden bg-gradient-tech-subtle">
                  {phone.badge && (
                    <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">
                      {phone.badge}
                    </Badge>
                  )}
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{phone.name}</h3>
                  <p className="text-muted-foreground mb-4 flex items-center gap-2">
                    <Icon name="Cpu" size={16} />
                    {phone.specs}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">
                      {phone.price.toLocaleString('no-NO')} kr
                    </span>
                    <Button
                      onClick={() => setSelectedPhone(phone)}
                      className="gap-2"
                    >
                      Detaljer
                      <Icon name="ChevronRight" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hva Kundene Våre Sier
            </h2>
            <p className="text-lg text-muted-foreground">
              Ekte anmeldelser fra fornøyde kunder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="animate-fade-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">{review.name}</span>
                    <span className="text-muted-foreground">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Kontakt Oss</h2>
              <p className="text-lg text-muted-foreground">
                Vi er her for å hjelpe deg med alle spørsmål
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Adresse</h3>
                      <p className="text-muted-foreground">
                        Karl Johans gate 22
                        <br />
                        0159 Oslo, Norge
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Telefon</h3>
                      <p className="text-muted-foreground">
                        +47 22 00 00 00
                        <br />
                        Man-Fre: 09:00-18:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">E-post</h3>
                      <p className="text-muted-foreground">
                        kontakt@smartphones.no
                        <br />
                        support@smartphones.no
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Åpningstider</h3>
                      <p className="text-muted-foreground">
                        Man-Fre: 09:00-18:00
                        <br />
                        Lør: 10:00-16:00
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="gradient-tech text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="Smartphone" size={24} />
              <span className="text-xl font-bold">SMARTPHONES</span>
            </div>
            <p className="text-sm opacity-80">
              © 2025 Smartphones Norge. Alle rettigheter reservert.
            </p>
          </div>
        </div>
      </footer>

      {showCookieConsent && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-slide-in-right">
          <Card className="shadow-2xl border-2">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Icon name="Cookie" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Vi bruker informasjonskapsler</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Vi bruker informasjonskapsler for å forbedre din opplevelse på nettstedet vårt.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => setShowCookieConsent(false)}
                      className="flex-1"
                    >
                      Aksepter
                    </Button>
                    <Button
                      onClick={() => setShowCookieConsent(false)}
                      variant="outline"
                      className="flex-1"
                    >
                      Avslå
                    </Button>
                  </div>
                </div>
                <button
                  onClick={() => setShowCookieConsent(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Dialog open={!!selectedPhone} onOpenChange={() => setSelectedPhone(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl">{selectedPhone?.name}</DialogTitle>
            <DialogDescription>Premium smarttelefon med avanserte funksjoner</DialogDescription>
          </DialogHeader>
          {selectedPhone && (
            <div className="space-y-6">
              <img
                src={selectedPhone.image}
                alt={selectedPhone.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold text-primary">
                    {selectedPhone.price.toLocaleString('no-NO')} kr
                  </span>
                  {selectedPhone.badge && (
                    <Badge className="bg-primary">{selectedPhone.badge}</Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Cpu" size={20} />
                  <span>{selectedPhone.specs}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Icon name="Shield" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">2 års garanti</p>
                      <p className="text-sm text-muted-foreground">Fullstendig dekning</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Icon name="Truck" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Gratis levering</p>
                      <p className="text-sm text-muted-foreground">1-3 virkedager</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full text-lg py-6" size="lg">
                  Kjøp Nå
                  <Icon name="ShoppingCart" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
