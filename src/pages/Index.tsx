import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const services = [
    {
      icon: "Calculator",
      title: "Бухгалтерский учет",
      description: "Комплексное ведение бухгалтерии от первичных документов до отчетности"
    },
    {
      icon: "FileText",
      title: "Налоговая отчетность",
      description: "Своевременная подготовка и сдача всех налоговых деклараций"
    },
    {
      icon: "TrendingDown",
      title: "Оптимизация налогов",
      description: "Легальное снижение налоговой нагрузки в рамках действующего законодательства"
    },
    {
      icon: "Users",
      title: "Кадровый учет",
      description: "Ведение кадрового делопроизводства и расчет заработной платы"
    },
    {
      icon: "LineChart",
      title: "Финансовый анализ",
      description: "Управленческая отчетность и анализ финансовых показателей"
    },
    {
      icon: "Shield",
      title: "Налоговые проверки",
      description: "Представление интересов в налоговых органах и сопровождение проверок"
    }
  ];

  const benefits = [
    {
      number: "15+",
      title: "лет опыта",
      description: "в бухгалтерском учете"
    },
    {
      number: "200+",
      title: "компаний",
      description: "доверили нам учет"
    },
    {
      number: "100%",
      title: "точность",
      description: "без штрафов и пеней"
    },
    {
      number: "24/7",
      title: "на связи",
      description: "консультации по телефону"
    }
  ];

  const prices = [
    {
      name: "Стартап",
      price: "от 10 000 ₽",
      period: "в месяц",
      features: [
        "До 20 операций",
        "Налоговая отчетность",
        "Консультации онлайн",
        "Электронная отчетность"
      ]
    },
    {
      name: "Бизнес",
      price: "от 25 000 ₽",
      period: "в месяц",
      popular: true,
      features: [
        "До 100 операций",
        "Полное сопровождение",
        "Кадровый учет (до 5 сотрудников)",
        "Личный бухгалтер",
        "Финансовый анализ"
      ]
    },
    {
      name: "Корпоративный",
      price: "от 50 000 ₽",
      period: "в месяц",
      features: [
        "Без ограничений",
        "Выделенная команда",
        "Полный аутсорсинг",
        "Налоговая оптимизация",
        "Поддержка 24/7"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо за обращение! Свяжемся с вами в течение 30 минут.");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Calculator" className="text-white" size={24} />
            </div>
            <div>
              <div className="text-xl font-bold text-primary">БухЭксперт</div>
              <div className="text-xs text-muted-foreground">Профессиональный учет</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#services" className="hover:text-primary transition-colors font-medium">Услуги</a>
            <a href="#about" className="hover:text-primary transition-colors font-medium">О нас</a>
            <a href="#prices" className="hover:text-primary transition-colors font-medium">Тарифы</a>
            <Button asChild>
              <a href="#contacts">Заказать звонок</a>
            </Button>
          </nav>
        </div>
      </header>

      <section 
        className="relative pt-32 pb-24 px-4 min-h-[700px] flex items-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/e4587212-f76e-4b37-82e8-cb33e250364c.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl text-white animate-fade-in">
            <div className="inline-block bg-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ✓ Более 15 лет на рынке
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ваш бухгалтер. Ваша свобода.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Полное бухгалтерское сопровождение бизнеса. Работаем с ИП, ООО и самозанятыми. 
              Гарантируем отсутствие штрафов и налоговых претензий.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 shadow-xl" asChild>
                <a href="#contacts">Бесплатная консультация</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white hover:bg-white/90 text-primary border-2 shadow-xl" asChild>
                <a href="#prices">Узнать стоимость</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-primary/5 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-bold text-primary mb-2">{benefit.number}</div>
                <div className="text-xl font-semibold mb-1">{benefit.title}</div>
                <div className="text-muted-foreground">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексное решение всех бухгалтерских задач вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-24 px-4 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифные планы</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачное ценообразование. Выберите подходящий тариф для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {prices.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'border-accent border-3 scale-105 shadow-xl' : 'hover:-translate-y-1'
                } animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ★ Популярный выбор
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary">{plan.price}</div>
                    <div className="text-muted-foreground">{plan.period}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" className="text-accent flex-shrink-0 mt-1" size={20} />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
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

      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Почему выбирают нас?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="animate-fade-in">
                <Icon name="Award" className="mx-auto mb-4 text-accent" size={48} />
                <h3 className="text-xl font-bold mb-2">Сертифицированные специалисты</h3>
                <p className="text-white/90">Все бухгалтеры имеют профильное образование и регулярно проходят повышение квалификации</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <Icon name="Lock" className="mx-auto mb-4 text-accent" size={48} />
                <h3 className="text-xl font-bold mb-2">Конфиденциальность</h3>
                <p className="text-white/90">Подписываем NDA и гарантируем полную безопасность ваших данных</p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Icon name="Headphones" className="mx-auto mb-4 text-accent" size={48} />
                <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
                <p className="text-white/90">Всегда на связи для решения любых вопросов по учету</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и получите бесплатную консультацию в течение 30 минут
            </p>
          </div>
          <Card className="border-2 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input
                    type="tel"
                    placeholder="+7 (900) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение (необязательно)</label>
                  <Textarea
                    placeholder="Расскажите о вашем бизнесе и задачах..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6">
                  Отправить заявку
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Phone" className="mx-auto mb-3 text-primary" size={32} />
              <div className="font-semibold">Телефон</div>
              <div className="text-muted-foreground">+7 (495) 123-45-67</div>
            </div>
            <div>
              <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
              <div className="font-semibold">Email</div>
              <div className="text-muted-foreground">info@buhexpert.ru</div>
            </div>
            <div>
              <Icon name="MapPin" className="mx-auto mb-3 text-primary" size={32} />
              <div className="font-semibold">Офис</div>
              <div className="text-muted-foreground">Москва, ул. Примерная, 1</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Icon name="Calculator" className="text-white" size={24} />
                </div>
                <div className="text-xl font-bold">БухЭксперт</div>
              </div>
              <p className="text-white/80">Профессиональные бухгалтерские услуги для вашего бизнеса</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#services" className="hover:text-white transition-colors">Бухгалтерский учет</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Налоговая отчетность</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Кадровый учет</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#prices" className="hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@buhexpert.ru</li>
                <li>Пн-Пт: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 БухЭксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
