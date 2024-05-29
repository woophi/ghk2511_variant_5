import { Radio } from '@alfalab/core-components/radio';
import { Typography } from '@alfalab/core-components/typography';
import { useId } from 'react';
import { appSt } from './style.css';

type Props = {
  imgSrc: string;
  title: string;
  title2: string;
  subtitle: string;
  value: string;
  checked: boolean;
  setChecked: (v: string) => void;
};

export const BoxItem = ({ checked, imgSrc, setChecked, title, title2, subtitle, value }: Props) => {
  const id = useId();

  return (
    <label htmlFor={id} className={appSt.box({ selected: checked })}>
      <img style={{ borderBottomLeftRadius: '.75rem' }} src={imgSrc} width={48} height={48} />

      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'space-between', width: '100%' }}>
          <Typography.Text tag="p" view="primary-small" weight="bold" defaultMargins={false}>
            {title}
          </Typography.Text>
          <Typography.Text
            tag="p"
            view="secondary-small"
            defaultMargins={false}
            style={{ textAlign: 'right', flexShrink: 0, marginRight: '4px', marginTop: '0px' }}
            color="positive"
          >
            {subtitle}
          </Typography.Text>
        </div>
        <Typography.Text tag="p" view="primary-small" weight="bold" defaultMargins={false}>
          {title2}
        </Typography.Text>
      </div>
      <Radio
        circleClassName={appSt.circle({ selected: checked })}
        className={appSt.checkContainer}
        id={id}
        checked={checked}
        name="boxes"
        onChange={() => setChecked(value)}
      />
    </label>
  );
};
