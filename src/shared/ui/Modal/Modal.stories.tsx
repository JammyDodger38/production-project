import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from 'shared/ui/Modal/Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident magnam alias a pariatur autem dolorum numquam optio, culpa officia distinctio, doloremque similique quod quasi enim tenetur at. Temporibus iste impedit perferendis esse eum voluptatum, accusantium est illo reprehenderit quis alias optio, corrupti id? Enim fuga adipisci nesciunt nam, dolorem sint.',
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident magnam alias a pariatur autem dolorum numquam optio, culpa officia distinctio, doloremque similique quod quasi enim tenetur at. Temporibus iste impedit perferendis esse eum voluptatum, accusantium est illo reprehenderit quis alias optio, corrupti id? Enim fuga adipisci nesciunt nam, dolorem sint.',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
