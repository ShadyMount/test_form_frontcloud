import { addDecorator } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/storybook/decorators/styleDecorator';
import { themeDecorator } from '../../src/shared/config/storybook/decorators/themeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { routerDecorator } from '../../src/shared/config/storybook/decorators/routerDecorator';
import { i18nDecorator } from '../../src/shared/config/storybook/decorators/i18nDecorator';
import 'loki/configure-react';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(routerDecorator);
addDecorator(i18nDecorator);
addDecorator(styleDecorator);
addDecorator(themeDecorator(Theme.LIGHT));
