'use client'
import React, { useState } from 'react'
import './card.css';
import custom from './custom.module.css'
import customSASS from './customSASS.module.scss' // npm i sass
import clsx from 'clsx';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function Card() {
  const [expanding, setExpanding] = useState(1);
  const onChange = (value: any) => {
    setExpanding(value);
  }

  return (
    <div>
      <div className={clsx('card', { [custom.card]: expanding == 2 }, { [customSASS.card]: expanding == 3 })}>Card</div>
      <RadioGroup defaultValue="1" onValueChange={onChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="1" id="r1" />
          <Label htmlFor="r1">Default (Red)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="2" id="r2" />
          <Label htmlFor="r2">CSS (Green)</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="3" id="r3" />
          <Label htmlFor="r3">SASS (Blue)</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
