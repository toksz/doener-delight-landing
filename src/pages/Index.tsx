import { Phone, Clock, CreditCard, Truck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/components/MenuItem";

const FloatingIcons = () => {
  const icons = [
    "🥙", "🥖", "🥬", "🍅", "🥒", "🧄", "🐄", "🐔", "🌶️", "🧀"
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="floating-icon text-4xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <div className="gradient-bg" />
      <FloatingIcons />

      {/* Hero Section */}
      <header className="relative text-white py-16 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <div className="logo-container mb-8">
            <img 
              src="/lovable-uploads/3e8ea36e-12a2-46b3-ae93-1301787ced78.png"
              alt="Döner-Land Logo"
              className="h-32 md:h-40 mx-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Döner-Land</h1>
          <p className="text-xl md:text-2xl mb-6">Wetzlar</p>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            Bei uns genießt Du frisch zubereitete türkische Spezialitäten, 100% halal aus echtem Dönerfleisch. 
            Neben saftigem Döner bieten wir Dir auch Burger, Pizza, Pide und frische Salate!
          </p>
        </div>
      </header>

      {/* Features */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <CreditCard className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">Online- oder Barzahlung</h3>
            </div>
            <div className="feature-card">
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">Frische Zutaten</h3>
            </div>
            <div className="feature-card">
              <Truck className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">Schnelle Lieferung</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer */}
      <div className="bg-secondary/90 backdrop-blur-sm text-white py-6 transform skew-y-[-2deg] my-8">
        <div className="transform skew-y-[2deg]">
          <p className="text-xl md:text-2xl font-bold text-center">
            10% Rabatt ab 20€ Bestellwert!
          </p>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="container mx-auto px-4 py-12">
        <MenuSection 
          title="🥙 DÖNER" 
          items={donerItems.map(item => ({
            ...item,
            isPopular: item.name === "Classic Döner" || item.name === "Dürüm Döner + Hatay Spezial",
            isNew: item.name === "Veggie Döner",
            allergies: ["Gluten", "Sesam"]
          }))} 
        />
        <MenuSection 
          title="🧆 TELLER GERICHTE" 
          items={tellerItems.map(item => ({
            ...item,
            isPopular: item.name === "Döner Teller Classic",
            allergies: ["Gluten"]
          }))} 
        />
        <MenuSection 
          title="🍕 PIZZA" 
          items={pizzaItems.map(item => ({
            ...item,
            isNew: item.name === "Döneria",
            allergies: ["Gluten"]
          }))} 
        />
        <MenuSection 
          title="🍔 BURGER" 
          items={burgerItems.map(item => ({
            ...item,
            isPopular: item.name === "Classic Hamburger",
            allergies: ["Gluten"]
          }))} 
        />
        <MenuSection 
          title="🥗 SALAT" 
          items={salatItems.map(item => ({
            ...item,
            allergies: ["Nüsse"]
          }))} 
        />
        <MenuSection 
          title="🍟 SNACKS" 
          items={snackItems.map(item => ({
            ...item,
            allergies: ["Gluten"]
          }))} 
        />
        <MenuSection 
          title="🥖 PIDE" 
          items={pideItems.map(item => ({
            ...item,
            allergies: ["Gluten"]
          }))} 
        />
        <MenuSection 
          title="🍮 DESSERT" 
          items={dessertItems.map(item => ({
            ...item,
            allergies: ["Milch"]
          }))} 
        />
        <MenuSection 
          title="🥤 GETRÄNKE" 
          items={getraenkeItems.map(item => ({
            ...item,
            allergies: ["Zucker"]
          }))} 
        />
      </div>

      {/* Contact Section */}
      <div className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Wir liefern auch zu Dir nach Hause!</h2>
          <div className="max-w-md mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <Button 
              className="w-full mb-6 text-lg py-6 bg-primary hover:bg-primary/90 button-glow"
              onClick={() => window.location.href = "tel:+49123456789"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Direkt anrufen
            </Button>
            
            <div className="text-left mb-6 space-y-1">
              <p className="font-bold mb-2">Adresse:</p>
              <p>Döner-Land</p>
              <p>Niedergirmeser Weg 24</p>
              <p>35576 Wetzlar</p>
            </div>

            <div className="text-left">
              <p className="font-bold mb-2">Öffnungszeiten:</p>
              <div className="flex items-center text-primary">
                <Clock className="mr-2 h-5 w-5" />
                <p>MO-SO 10:30-22:30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Menu data components
const MenuSection = ({ title, items }: { title: string, items: any[] }) => (
  <div className="menu-section">
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    <div className="space-y-4">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

// Menu data
const donerItems = [
  { name: "Classic Döner", price: "7,00" },
  { name: "Dürüm Döner + Hatay Spezial", price: "7,50" },
  { name: "Lahmacun Döner", price: "7,50" },
  { name: "Cheesedöner", description: "mit Käse nach Wahl", price: "8,00" },
  { name: "XL-Döner", description: "mit extra Fleisch", price: "8,50" },
  { name: "Calzone Döner", description: "gebacken", price: "9,80" },
  { name: "Döner Box", price: "7,00" },
  { name: "Veggie Döner", description: "mit Grillgemüse & Käse", price: "7,00" },
];

const tellerItems = [
  { name: "Döner Teller Classic", description: "mit Bulgur oder Pommes", price: "12,00" },
  { name: "Döner Teller überbacken", description: "mit Tomatensahnesauce", price: "13,00" },
  { name: "Iskender Teller", description: "mit Tomaten in Buttersoße", price: "14,50" },
  { name: "Döner Teller Holland", description: "mit Hollandaisesauce überbacken", price: "14,80" },
];

const pizzaItems = [
  { name: "FAMILIENPIZZA Margherita", description: "jeder weitere Belag + 3,00€", price: "20,00" },
  { name: "Margherita", price: "6,50" },
  { name: "Toscana", description: "Salami, Schinken, Peperoniwurst, Zwiebeln & Champignons", price: "8,50" },
  { name: "Döneria", description: "mit Zwiebeln, Jalapeños & Dönerfleisch", price: "9,90" },
};

const burgerItems = [
  { name: "Classic Hamburger", price: "7,50" },
  { name: "Cheeseburger", description: "auf Wunsch mit Jalapeños", price: "7,90" },
  { name: "Texas BBQ Burger", description: "Bacon, Pastirma", price: "9,00" },
  { name: "Dönerland", description: "Patty & Dönerfleisch im Burger", price: "9,90" },
];

const salatItems = [
  { name: "Salat Mista", description: "gemischter Salat", price: "6,00" },
  { name: "Bauernsalat", description: "gemischter Salat mit Tomaten, Gurken, Oliven & Weichkäse", price: "9,00" },
  { name: "Döner Salat", description: "gemischter Salat mit Dönerfleisch & Weichkäse", price: "9,50" },
];

const snackItems = [
  { name: "Dönerland Snackbox", description: "3 Nuggets, 2 Mozzarella Sticks, 2 Falafel, 3 Chili Cheese Nuggets, Süßkartoffelpommes + 2 Dips nach Wahl", price: "14,50" },
  { name: "Fritten", price: "3,50" },
  { name: "Süßkartoffelpommes", price: "4,50" },
];

const pideItems = [
  { name: "Sucuk", description: "mit Käse", price: "9,00" },
  { name: "Döner mit Jalapeño", description: "mit Käse", price: "9,00" },
  { name: "Hackfleisch mit Ei", description: "mit Käse", price: "8,50" },
  { name: "Pastirma", description: "mit Käse", price: "9,50" },
];

const dessertItems = [
  { name: "Cheesecake", price: "4,00" },
  { name: "Hot Brownie", price: "5,00" },
  { name: "Tiramisu Eis", description: "(ohne Alkohol)", price: "5,50" },
];

const getraenkeItems = [
  { name: "Coca Cola", price: "2,50" },
  { name: "Fanta", price: "2,50" },
  { name: "Sprite", price: "2,50" },
  { name: "Ayran", price: "2,00" },
];

export default Index;
