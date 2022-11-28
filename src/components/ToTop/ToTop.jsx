import React from 'react'
import s from './ToTop.module.sass'
import { Portal } from '../../ui/Portal'

export const ToTop = () => {
  return (
    <Portal>
      <button
        onClick={() => window.scrollTo(0, 0)}
        type="button"
        className={s.ToTop}
      >
        <svg role="presentation" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48" xmlSpace="preserve">
          {' '}
          <path
            fill="#ededed"
            d="M47.875,24c0,13.186-10.689,23.875-23.875,23.875S0.125,37.186,0.125,24S10.814,0.125,24,0.125
S47.875,10.814,47.875,24z M25.503,16.881l6.994,7.049c0.583,0.588,1.532,0.592,2.121,0.008c0.588-0.583,0.592-1.533,0.008-2.122
l-9.562-9.637c-0.281-0.283-0.664-0.443-1.063-0.443c0,0,0,0-0.001,0c-0.399,0-0.782,0.159-1.063,0.442l-9.591,9.637
c-0.584,0.587-0.583,1.537,0.005,2.121c0.292,0.292,0.675,0.437,1.058,0.437c0.385,0,0.77-0.147,1.063-0.442L22.5,16.87v19.163
c0,0.828,0.671,1.5,1.5,1.5s1.5-0.672,1.5-1.5L25.503,16.881z"
          />
          {' '}

        </svg>
      </button>
    </Portal>
  )
}
