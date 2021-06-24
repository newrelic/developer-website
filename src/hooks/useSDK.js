import { useEffect, useState } from 'react';
import useScript from './useScript';
import { plugins } from '../../gatsby-config';
import { SDK_BASE_URL } from '../data/constants';

const release = plugins.find(
  (plugin) => plugin.resolve === 'gatsby-source-newrelic-sdk'
).options.release;

const useSDK = () => {
  const [sdkLoaded, setSdkLoaded] = useState({ loaded: false, error: null });

  useEffect(() => {}, [sdkLoaded]);

  useScript(`${SDK_BASE_URL}-${release}-dev.js`, {
    onError: () => setSdkLoaded({ loaded: false, error: 'failed to load' }),
    onLoad: () => setSdkLoaded({ loaded: true, error: null }),
  });
  return sdkLoaded;
};

export default useSDK;
