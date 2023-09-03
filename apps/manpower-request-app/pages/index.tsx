import { EuiIcon, EuiCode, EuiText, useEuiTheme } from '@elastic/eui';
import { css } from '@emotion/react';

export function Index() {
const { euiTheme } = useEuiTheme();
  return (
   <EuiText>
      <p>
        <EuiIcon
          type="stopFilled"
          size="xxl"
          css={{ color: euiTheme.colors.primary }}
        />{' '}
        This primary color will adjust based on the light or dark theme value
      </p>

      <EuiText
        css={css`
          background: ${euiTheme.colors.lightShade};
          padding: calc(${euiTheme.size.base} * 2);
        `}
      >
        The padding of this box is created using <EuiCode>calc()</EuiCode>{' '}
        because EUI&apos;s theme sizes are string pixel values that are
        calculated off the theme&apos;s <EuiCode>base</EuiCode>
      </EuiText>
    </EuiText>
  );
}

export default Index;
