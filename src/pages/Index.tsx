import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const services = [
    {
      icon: "Calculator",
      title: "Ведение учета",
      description: "Полное бухгалтерское сопровождение вашего бизнеса"
    },
    {
      icon: "FileText",
      title: "Отчетность",
      description: "Своевременная сдача всех форм отчетности"
    },
    {
      icon: "TrendingUp",
      title: "Налоговая оптимизация",
      description: "Легальное снижение налоговой нагрузки"
    },
    {
      icon: "Users",
      title: "Кадровый учет",
      description: "Ведение кадрового делопроизводства"
    },
    {
      icon: "Shield",
      title: "Консультации",
      description: "Экспертная поддержка по всем вопросам"
    },
    {
      icon: "Briefcase",
      title: "Аутсорсинг",
      description: "Полная передача бухгалтерии на внешний учет"
    }
  ];

  const benefits = [
    {
      icon: "Zap",
      title: "Быстро",
      description: "Работаем оперативно, без задержек"
    },
    {
      icon: "Award",
      title: "Профессионально",
      description: "Команда опытных специалистов"
    },
    {
      icon: "Lock",
      title: "Безопасно",
      description: "Гарантия конфиденциальности данных"
    },
    {
      icon: "DollarSign",
      title: "Выгодно",
      description: "Экономия до 70% на штатном бухгалтере"
    }
  ];

  const prices = [
    {
      name: "Базовый",
      price: "15 000",
      features: ["До 10 операций/мес", "Отчетность", "Консультации онлайн"]
    },
    {
      name: "Стандарт",
      price: "30 000",
      features: ["До 50 операций/мес", "Отчетность", "Личный менеджер", "Кадровый учет"],
      popular: true
    },
    {
      name: "Премиум",
      price: "от 60 000",
      features: ["Без ограничений", "Полный аутсорсинг", "Выделенный бухгалтер", "Налоговая оптимизация"]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Calculator" className="text-primary" size={28} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              БухПрофи
            </span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#benefits" className="hover:text-primary transition-colors">Преимущества</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild className="hidden md:flex">
            <a href="#contacts">Связаться</a>
          </Button>
        </div>
      </header>

      <section 
        className="relative pt-32 pb-20 px-4 min-h-[600px] flex items-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/e4587212-f76e-4b37-82e8-cb33e250364c.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="md:text-7xl font-bold mb-6 text-white drop-shadow-2xl text-5xl">Порядок в учете - Ваша свобода!</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">Бухгалтерский и бизнес-аутсорсинг для малого бизнеса. Наведу порядок, оптимизирую налоги и выстрою процессы, чтобы вы могли спокойно зарабатывать.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 shadow-xl" asChild>
                <a href="#contacts">Получить консультацию</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/90 hover:bg-white shadow-xl" asChild>
                <a href="#prices">Узнать цены</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Комплексное решение всех бухгалтерских задач
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Преимущества работы с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Почему выбирают нас
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name={benefit.icon} className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прозрачное ценообразование без скрытых платежей
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'border-primary border-2 scale-105 shadow-lg' : ''
                } animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-bold">
                    Популярный
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground"> ₽/мес</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <a href="#contacts">Выбрать тариф</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Связаться с нами</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку и получите консультацию в течение часа
          </p>
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email или телефон</label>
                  <Input 
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем бизнесе..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full text-lg py-6">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-accent text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Calculator" size={32} />
            <span className="text-3xl font-bold">БухПрофи</span>
          </div>
          <p className="text-white/80 mb-6">Профессиональные бухгалтерские услуги для вашего бизнеса</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#services" className="hover:text-white/80 transition-colors">Услуги</a>
            <a href="#benefits" className="hover:text-white/80 transition-colors">Преимущества</a>
            <a href="#prices" className="hover:text-white/80 transition-colors">Цены</a>
            <a href="#contacts" className="hover:text-white/80 transition-colors">Контакты</a>
          </div>
          <p className="text-white/60 text-sm">© 2024 БухПрофи. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;