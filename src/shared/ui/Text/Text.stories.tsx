import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Text, TextTheme } from 'shared/ui/Text/Text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title',
  text: 'Any text',
}
export const Error = Template.bind({})
Error.args = {
  title: 'Title',
  text: 'Any text',
  theme: TextTheme.ERROR,
}
export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Title',
}
export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'Any text',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title',
  text: 'Any text',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
  title: 'Title',
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
  text: 'Any text',
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]
