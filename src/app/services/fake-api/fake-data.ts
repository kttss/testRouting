import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Article } from 'src/app/models/article';
import { Category } from 'src/app/models/category';

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
        creatAt: new Date('2020-04-13T20:16:37'),
      },
      {
        id: 2,
        category: 1,
        titre: 'spectare cirratas',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/168/218/180.jpg',
        creatAt: new Date('2020-04-12T21:20:37'),
      },
      {
        id: 3,
        category: 1,
        titre: 'isdem diebus acciderat',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/120/218/180.jpg',
        creatAt: new Date('2020-03-15T20:16:37'),
      },
      {
        id: 4,
        category: 2,
        titre: 'maxime virtute',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/50/218/180.jpg',
        creatAt: new Date('2020-03-15T20:16:37'),
      },
      {
        id: 5,
        category: 2,
        titre: 'little bit',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/24/218/180.jpg',
        creatAt: new Date('2020-03-15T20:16:37'),
      },
      {
        id: 6,
        category: 3,
        titre: 'test abc',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/22/218/180.jpg',
        creatAt: new Date('2020-03-15T20:16:37'),
      },
      {
        id: 7,
        category: 3,
        titre: 'with supporting text',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/12/218/180.jpg',
        creatAt: new Date('2020-03-15T20:16:37'),
      },
      {
        id: 8,
        category: 3,
        titre: 'additional conten',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.`,
        photo: 'https://i.picsum.photos/id/15/218/180.jpg',
        creatAt: new Date('2020-03-15T20:16:37'),
      },
      {
        id: 9,
        category: 3,
        titre: 'corvid-19 news',
        content: `This is a wider card with supporting text below as a natural lead-in to additional content.
          This content is a little bit longer.`,
        photo: 'https://picsum.photos/id/188/700/360',
        creatAt: new Date('2020-04-14T16:00:37'),
      },
    ];
    const categorys: Category[] = [
      { id: 1, name: 'Sports' },
      { id: 2, name: 'Culture' },
      { id: 3, name: 'sante' },
    ];
    return { articles, categorys };
  }
}
