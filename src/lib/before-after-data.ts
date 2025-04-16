import { contentData } from "./content-data";

export interface BeforeAfterComparisonItem {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  before: string;
  after: string;
  description: string;
}

// Массив с данными для сравнения до/после
export const beforeAfterComparisonItems: BeforeAfterComparisonItem[] = [
  {
    id: "1",
    title: "Александр, 28 лет",
    beforeImage: "https://vc7v703vlt.ufs.sh/f/JPvQ68qNOfoDLR0DNnUSV4FvuNmqdszpjxc8ETB9KUJg1kPH",
    afterImage: "https://vc7v703vlt.ufs.sh/f/JPvQ68qNOfoDt8dd4FXHvWNLgyxqAbeQEiS4rRuFKnwMBfzX",
    before: "A1 Beginner",
    after: "B2 Upper-Intermediate",
    description: "Всего за 8 месяцев смог прокачать свой английский с базового до уровня, позволяющего свободно общаться на работе"
  },
  {
    id: "2",
    title: "Мария, 35 лет",
    beforeImage: "https://vc7v703vlt.ufs.sh/f/JPvQ68qNOfoD7BVBTPbE9LQ0VMs5dBNACDFGycK7Sv3YnJPw",
    afterImage: "https://vc7v703vlt.ufs.sh/f/JPvQ68qNOfoDVc5IxE9HhT2akm0S3v1y4lMgeGqBozDZrI7O",
    before: "A2 Elementary",
    after: "C1 Advanced",
    description: "Выучила язык для переезда в другую страну. Теперь успешно работает в международной компании"
  },
  {
    id: "3",
    title: "Дмитрий, 42 года",
    beforeImage: "https://vc7v703vlt.ufs.sh/f/JPvQ68qNOfoDYXWLYViNMPHarF4K5yX8z6nTO7uc2twJSZLU",
    afterImage: "https://vc7v703vlt.ufs.sh/f/JPvQ68qNOfoDpjYvJRdzDMoRIXu8n2PJF5gYSOvUryChZ6AW",
    before: "B1 Intermediate",
    after: "C1 Advanced",
    description: "Улучшил деловой английский за 6 месяцев. Получил повышение благодаря уверенному общению с зарубежными партнерами"
  },
  {
    id: "4",
    title: "Екатерина, 19 лет",
    beforeImage: "https://vc7v703vlt.ufs.sh/f/JPvQ68qNOfoD7BVBTPbE9LQ0VMs5dBNACDFGycK7Sv3YnJPw",
    afterImage: "https://vc7v703vlt.ufs.sh/f/JPvQ68qNOfoDTEzeKNtvWdkOg1qNn3L4op5zuZKVH7s06QXb",
    before: "A1 Beginner",
    after: "B2 Upper-Intermediate",
    description: "Поступила в зарубежный университет после годового курса подготовки к языковым экзаменам"
  }
];

// Общие данные секции
export const beforeAfterComparison = {
  title: contentData.beforeAfter.title,
  description: contentData.beforeAfter.description,
  items: beforeAfterComparisonItems,
  cta: contentData.beforeAfter.cta
}; 