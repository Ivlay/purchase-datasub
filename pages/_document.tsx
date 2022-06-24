import BaseDocument from 'next/document';
import { withEmotionCache } from 'tss-react/nextJs';

import createEmotionCache from 'styles/createEmotionCache';

export default withEmotionCache({
  Document: BaseDocument,
  getCaches: () => [createEmotionCache()],
});
