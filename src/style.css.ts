import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: 'calc(100% - 2rem)',
  padding: '1rem',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = recipe({
  base: {
    backgroundColor: '#fff',
    borderRadius: '1rem',
    transition: 'all .2s ease-in-out',
    padding: '.5rem 1.75rem .5rem .5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    position: 'relative',
  },
  variants: {
    selected: {
      true: {
        border: '1px solid #F21717',
      },
      false: {
        border: '1px solid transparent',
      },
    },
  },
});

const checkContainer = style({
  position: 'absolute',
  zIndex: 1,
  right: '.5rem',
  top: '.5rem',
});

const circle = recipe({
  variants: {
    selected: {
      true: {
        backgroundColor: '#ef3124 !important',
      },
    },
  },
});

export const appSt = {
  bottomBtn,
  container,
  box,
  checkContainer,
  circle,
};
