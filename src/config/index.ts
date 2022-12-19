import local from './local';
import production from './production';
import dev from './dev';
import staging from './staging';

type Environment = 'production' | 'local' | 'dev' | 'staging';

const config: any = {
  local,
  production,
  dev,
  staging,
};

const environment: Environment = process.env.REACT_APP_ENV as Environment || 'local';

export default config[environment];
