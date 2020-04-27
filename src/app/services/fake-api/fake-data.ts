import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';
import { User } from 'src/app/models/user';
import { Logger } from 'src/app/models/logger';
import { Status } from 'src/app/models/status';
import { Todo } from 'src/app/models/todo';

export class FakeData implements InMemoryDbService {
  createDb() {
    const articles: Article[] = [
      {
        id: 0,
        category: 1,
        titre: 'acciderat malum',
        content: `Et licet quocumque oculos flexeris feminas adfatim multas spectare cirratas, quibus, si nupsissent, per aetatem ter iam nixus poterat suppetere liberorum, ad usque taedium pedibus pavimenta tergentes iactari volucriter gyris, dum exprimunt innumera simulacra, quae finxere fabulae theatrales.
        <br>
        Duplexque isdem diebus acciderat malum, quod et Theophilum insontem atrox interceperat casus, et Serenianus dignus exsecratione cunctorum, innoxius, modo non reclamante publico vigore, discessit.

        Ut enim quisque sibi plurimum confidit et ut quisque maxime virtute et sapientia sic munitus est, ut nullo egeat suaque omnia in se ipso posita iudicet, ita in amicitiis expetendis colendisque maxime excellit. Quid enim? Africanus indigens mei? Minime hercule! ac ne ego quidem illius; sed ego admiratione quadam virtutis eius, ille vicissim opinione fortasse non nulla, quam de meis moribus habebat, me dilexit; auxit benevolentiam consuetudo. Sed quamquam utilitates multae et magnae consecutae sunt, non sunt tamen ab earum spe causae diligendi profectae.`,
        photo: 'https://i.picsum.photos/id/0/218/180.jpg',
        like: 12,
        view: 23,
        creatAt: new Date('2020-04-13T20:16:37'),
      },
      {
        id: 2,
        category: 1,
        titre: 'spectare cirratas',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/168/218/180.jpg',
        like: 16,
        view: 30,
        creatAt: new Date('2020-04-12T21:20:37'),
      },
      {
        id: 3,
        category: 1,
        titre: 'isdem diebus acciderat',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/120/218/180.jpg',
        like: 25,
        view: 40,
        creatAt: new Date('2020-03-15T20:16:37'),
      },
      {
        id: 4,
        category: 2,
        titre: 'maxime virtute',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/50/218/180.jpg',
        like: 5,
        view: 35,
        creatAt: new Date('2020-03-15T20:16:37'),
      },
      {
        id: 5,
        category: 2,
        titre: 'little bit',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/24/218/180.jpg',
        like: 11,
        view: 41,
        creatAt: new Date('2020-03-15T20:16:37'),
      },
      {
        id: 6,
        category: 3,
        titre: 'test abc',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/22/218/180.jpg',
        like: 19,
        view: 54,
        creatAt: new Date('2020-03-15T20:16:37'),
      },
      {
        id: 7,
        category: 3,
        titre: 'with supporting text',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/12/218/180.jpg',
        like: 13,
        view: 24,
        creatAt: new Date('2020-03-15T20:16:37'),
      },
      {
        id: 8,
        category: 3,
        titre: 'additional conten',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/15/218/180.jpg',
        like: 18,
        view: 33,
        creatAt: new Date('2020-03-15T20:16:37'),
      },
      {
        id: 9,
        category: 3,
        titre: 'corvid-19 news',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.`,
        photo: 'https://picsum.photos/id/188/700/360',
        like: 21,
        view: 57,
        creatAt: new Date('2020-04-14T16:00:37'),
      },
    ];
    const categorys: Category[] = [
      { id: 1, name: 'Sports' },
      { id: 2, name: 'Culture' },
      { id: 3, name: 'sante' },
    ];

    const users: User[] = [
      {
        id: 1,
        fullname: 'Issam KATTOUSS',
        username: 'kttss',
        password: '123',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZnVsbG5hbWUiOiJJc3NhbSBLQVRUT1VTUyIsInVzZXJuYW1lIjoia3R0c3MiLCJwYXNzd29yZCI6IjEyMyIsInRva2VuIjoiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnpkV0lpT2lJeE1qTTBOVFkzT0Rrd0lpd2lablZzYkc1aGJXVWlPaUpwYzNOaGJTQnJZWFIwYjNWemN5SXNJblZ6WlhKdVlXMWxJam9pYTNSMGMzTWlMQ0p5YjJ4bElqb2lZV1J0YVc0aWZRLjhpejB2RzJwOUxlaDJGbkxIOWRLakRJQ2Z2SDhYOGJNbld2dFNydkRjU3MifQ.Kxs7ztf77vWgl0w72wB8i7KMNmZOaRfBy-_tba8KQDk',
      },
    ];
    const logger: Logger[] = [
      {
        id: 0,
        date: new Date(),
        user: 'issa',
        typeAction: 'get',
        data: 'test',
      },
    ];
    const status: Status[] = [
      {
        id: 1,
        name: 'To do',
      },
      {
        id: 2,
        name: 'Started',
      },
      {
        id: 3,
        name: 'Completed',
      },
    ];
    const todo: Todo[] = [
      {
        id: 1,
        name: 'task 1: Numquam Cum de viderit ad.',
        status: 1,
        color: '#1973c0',
      },
      {
        id: 2,
        name: 'task 2: Quorum evitandum huius est quae.',
        status: 1,
        color: '#6eab72',
      },
      {
        id: 3,
        name: 'task 3: Et et et formidabatur et.',
        status: 1,
        color: '#2b96a9',
      },
      {
        id: 4,
        name: 'task 4: Si non quid omnia utilitatem.',
        status: 2,
        color: '#e29658',
      },
      {
        id: 5,
        name: 'task 5: Locum calamitosi ex aiunt quam.',
        status: 2,
        color: '#448f09',
      },
      {
        id: 6,
        name: 'task 6: Fors reginae ipsa tessera per.',
        status: 3,
        color: '#b839e6',
      },
    ];
    return { articles, categorys, users, logger, status, todo };
  }
}
