import { useMemo } from 'react';
import { useTreatments } from '@splitsoftware/splitio-react';

const useTreatment = (name) => {
  const treatments = useTreatments([name]);
  const { treatment, config } = treatments[name];

  return {
    treatment,
    config: useMemo(() => {
      try {
        return JSON.parse(config);
      } catch (e) {
        return config;
      }
    }, [config]),
  };
};

export default useTreatment;
