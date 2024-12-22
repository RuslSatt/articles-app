import type { Preview } from '@storybook/react';
import { StyleDecorator } from '@/shared/config/storybook/decorators/StyleDecorator';
import { RouterDecorator } from '@/shared/config/storybook/decorators/RouterDecorator';
import { SuspenseDecorator } from '@/shared/config/storybook/decorators/SuspenceDecorator';
import { Theme } from '@/shared/const/theme';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        layout: 'fullscreen',
        themes: {
            default: 'dark',
            list: [
                {
                    name: 'light',
                    class: ['app', Theme.LIGHT],
                    color: '#fff'
                },
                {
                    name: 'dark',
                    class: ['app', Theme.DARK],
                    color: '#1f2937'
                }
            ]
        }
    },
    decorators: [StyleDecorator, RouterDecorator, SuspenseDecorator]
};

export default preview;
