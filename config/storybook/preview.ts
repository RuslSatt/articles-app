import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { SuspenseDecorator } from '@/shared/config/storybook/decorators/SuspenceDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    decorators: [StyleDecorator, RouterDecorator, SuspenseDecorator]
};

export default preview;
