import { JwtPayload } from 'jsonwebtoken';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { config } from '../config';

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.SECRET_HIDDEN_KEY,
};
export default new Strategy(opts, async (payload: JwtPayload, done) => {
  try {
    // if (!token) return done(null, false)
    return done(null, {});
  } catch (err) {
    return done(null, false);
  }
});
