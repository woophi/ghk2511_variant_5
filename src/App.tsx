import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback, useState } from 'react';
import { BoxItem } from './BoxItem';
import img1 from './assets/p1.png';
import img2 from './assets/p2.png';
import img3 from './assets/p3.png';
import img4 from './assets/p4.png';
import img5 from './assets/p5.png';
import img6 from './assets/p6.png';
import { appSt } from './style.css';
import { sendDataToGA } from './utils/events';

const boxes: { imgSrc: string; title: string; title2: string; subtitle: string; value: string }[] = [
  {
    imgSrc: img1,
    title: 'Инвестиции в акции',
    title2: 'Инвестиции в перспективные акции',
    subtitle: 'За год: +80,82 %',
    value: 'v1',
  },
  {
    imgSrc: img2,
    title: 'Инвестиции в золото',
    title2: 'Инвестиции в физическое золото',
    subtitle: 'За год: +32,4 %',
    value: 'v2',
  },
  {
    imgSrc: img3,
    title: 'Всепогодный портфель',
    title2: 'Эффективный фонд при любой «погоде»',
    subtitle: 'За 3 месяца: +6,6 %',
    value: 'v3',
  },
  {
    imgSrc: img4,
    title: 'Безрисковые инвестиции',
    title2: 'Краткосрочные инвестиции в рублях',
    subtitle: 'За год: +12,65 %',
    value: 'v4',
  },
  {
    imgSrc: img5,
    title: 'Инвестиции в облигации',
    title2: 'Биржевой инвестиционный фонд',
    subtitle: 'За год: +8,63 %',
    value: 'v5',
  },
  {
    imgSrc: img6,
    title: 'Инвестиции с использованием искусственного интеллекта',
    title2: '',
    subtitle: 'За 3 месяца: +14,47 %',
    value: 'v6',
  },
];

export const App = () => {
  const [checkedBox, setChecked] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState('');

  const submit = useCallback(() => {
    if (!checkedBox) {
      setError('У вас не выбрано ни одной категории');
      return;
    }
    setLoading(true);
    sendDataToGA(checkedBox).then(() => {
      setLoading(false);

      (window.location as unknown as string) = 'alfabank://longread?endpoint=v1/adviser/longreads/15912';
    });
  }, [checkedBox]);

  const onSelectOption = useCallback((v: string) => {
    setError('');
    setChecked(v);
  }, []);

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive tag="h1" view="large" font="system" weight="bold">
          Выберите вариант Инвесткопилки
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" weight="medium" defaultMargins={false}>
          Настройте Инвесткопилку в соответствии с вашими ожиданиями.
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" weight="medium" defaultMargins={false}>
          Выберите вариант, более подходящий для вас.
        </Typography.Text>
      </div>
      <div className={appSt.container}>
        {boxes.map(box => (
          <BoxItem
            key={box.value}
            imgSrc={box.imgSrc}
            title={box.title}
            title2={box.title2}
            value={box.value}
            subtitle={box.subtitle}
            setChecked={onSelectOption}
            checked={box.value === checkedBox}
          />
        ))}
      </div>
      <Gap size={96} />
      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} onClick={submit} block={true} view="primary" hint={err}>
          Выбрать
        </ButtonMobile>
      </div>
    </>
  );
};
