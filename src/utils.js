/**
 * If current environment is development-purpose.
 *
 * @returns {boolean}
 */
module.exports.isDevelopment = () =>
  process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging';

/**
 * If current environment is production-purpose.
 *
 * @returns {boolean}
 */
module.exports.isProduction = () =>
  process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging';
